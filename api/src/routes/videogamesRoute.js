const { Router } = require('express');
const { getData } = require('../controllers/getData');
const { getDataSearch } = require('../controllers/getDataSearch');
const { newData } = require('../controllers/postNewData');

const router = Router();

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    if(name){
      const response = await getDataSearch(name);
      res.status(201).json(response);
    } else if(name === undefined){
      const response = await getData();
      res.status(201).json(response);
    } else {
      throw new Error('name must not be empty');
    }
  } catch (error) {
    res.status(404).json(error);
  }
})

router.post('/', async (req, res) => {
  const { name, release_date, image, rating, platforms, genre, description } = req.body;
  if(!name || !release_date || !image || !rating || !platforms || !genre || !description) {
    throw new Error('the parameters must not be empty');
  }
  try {
    const response = await newData(name, release_date, image, rating, platforms, genre, description);
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
})

module.exports = router;