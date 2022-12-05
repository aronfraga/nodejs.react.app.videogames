require('dotenv').config();
const { Videogame, Genre } = require('../db');
const { getDbData } = require('../controllers/getData');

const checkData = async (name) => {
  const normalizedName = name.toLowerCase();
  const bdData = await getDbData();
  const bdFind = await bdData.find((data) => data.name.toLowerCase() === normalizedName);
  return bdFind === undefined? true : false;
}

const newData = async (name, release_date, image, rating, platforms, genre, description) => {
  const checkName = await checkData(name);
  if(checkName) {
    const newRegister = await Videogame.create({
      name,
      description,
      release_date,
      image,
      rating,
      platforms,
    })
    const searchedGenre = await Genre.findAll({
      where: { name: genre }
    })
    await newRegister.addGenre(searchedGenre);
  } else {
    throw new Error('the name already exists in database');
  }
}

module.exports = {
  newData,
}


