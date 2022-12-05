const { Router } = require('express');
const { getGenres } = require('../controllers/getGenres');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const response = await getGenres();
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
})

module.exports = router;