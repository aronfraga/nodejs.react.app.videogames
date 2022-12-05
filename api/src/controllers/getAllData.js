require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

const getAllApiData = async (id) => {
  const apiCache = await axios.get({
    method: 'get',
    url: `https://api.rawg.io/api/games/${id}?key=${API_KEY}`,
    headers: { 'Accept-Encoding': 'null' }
  });
  const apiData = await apiCache.data;
  const requestMemory = {
      id: apiData.id,
      name: apiData.name,
      release_date: apiData.released,
      image: apiData.background_image,
      description: apiData.description_raw,
      rating: apiData.rating,
      platforms: apiData.platforms.map((data) => data.platform.name),
      genre: apiData.genres.map((data) => data.name),
      created: false,
    }
  return requestMemory;
}

const getAlldbData = async (id) => {
  const dbCache = await Videogame.findOne({ 
    where: { id: id }, 
    include: {
      model: Genre,
      },
  });
  const dbData = {
    id: dbCache.id,
    name: dbCache.name,
    release_date: dbCache.release_date,
    image: dbCache.image,
    description: dbCache.description,
    rating: dbCache.rating,
    platforms: dbCache.platforms,
    genre: dbCache.genres.map((data) => data.name),
    created: dbCache.created,
  }
  return dbData;
}

const getAllData = (id) => {
  if(id.length > 24) {
    return getAlldbData(id);
  } else {
    return getAllApiData(id)
  }
}

module.exports = {
  getAllApiData,
  getAlldbData,
  getAllData,
}
