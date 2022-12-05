require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
const apiLimitRequest = 6;

const getApiData = async () => {
  const requestMemory = [];
  for(var i = 1; i < apiLimitRequest; i++) {
    const apiCache = await axios.get({
      method: 'get',
      url: `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`,
      headers: { 'Accept-Encoding': 'null' }
    });
    apiCache.data.results.map((data) => {
      requestMemory.push({
        id: data.id,
        name: data.name,
        release_date: data.released,
        image: data.background_image,
        rating: data.rating,
        platforms: data.platforms.map((data) => data.platform.name),
        genre: data.genres.map((data) => data.name),
        created: false,
      });
    });
  }
  return requestMemory;
}

const getDbData = async () => {
  const dbCache = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const dbData = await dbCache.map((data) => {
    return {
      id: data.id,
      name: data.name,
      release_date: data.release_date,
      image: data.image,
      rating: data.rating,
      platforms: data.platforms,
      genre: data.genres.map((data) => data.name),
      created: data.created,
    }
  })
  return dbData;
}

const getData = async () => {
  const apiData = await getApiData();
  const dbData = await getDbData();
  return [...apiData.slice(0, ((apiData.length) - (dbData.length))), ...dbData];
}

module.exports = {
  getApiData,
  getDbData,
  getData,
}
