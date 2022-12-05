require('dotenv').config();
const { Videogame } = require('../db');

const deleteData = async (id) => {
  await Videogame.destroy({ where: { id } });
}

module.exports = {
  deleteData,
}
