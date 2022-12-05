require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { getDbData } = require('../controllers/getData');

const getApiSearch = async (name) => {
  const requestMemory = [];
    const apiCache = await axios({
      method: 'get',
      url: `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`,
      Headers: { 'Accept-Encoding': 'null' }
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
  return requestMemory.slice(0, 15);
}

const getDbSearch = async (name) => {
  const normalizedName = name.toLowerCase();
  const bdData = await getDbData();
  const bdFilter = await bdData.filter((data) => data.name.toLowerCase().includes(normalizedName));
  return bdFilter.slice(0, 15);
}

const getDataSearch = async (name) => {
  const apiData = await getApiSearch(name);
  const dbData = await getDbSearch(name);
  return [...apiData.slice(0, ((apiData.length) - (dbData.length))), ...dbData];
}

module.exports = {
  getApiSearch,
  getDbSearch,
  getDataSearch,
}
