require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db');

const getGenres = async () => {
  const apiCache = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const apiData = await apiCache.data.results.map((data) => data.name);
  apiData.forEach((data) => {
    Genre.findOrCreate({
      where: { name: data }
    })
  });
  const dbData = await Genre.findAll();
  return dbData;
}

module.exports = {
  getGenres,
}
