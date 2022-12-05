require('dotenv').config();
const { Videogame } = require('../db');

const putUpdateData = async (data, id) => {
  await Videogame.update(data, { where: { id } });
}

module.exports = {
  putUpdateData,
}