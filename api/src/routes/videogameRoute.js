const { Router } = require('express');
const { getAllData } = require('../controllers/getAllData');
const { putUpdateData } = require('../controllers/putUpdateData');
const { deleteData } = require('../controllers/deleteData');

const router = Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getAllData(id);
    res.status(201).json(response);
  } catch(error) {
    res.status(404).json(error);
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const response = await putUpdateData(data, id);
    res.status(201).json(response);
  } catch(error) {
    res.status(404).json(error);
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteData(id);
    res.status(201).json(response);
  } catch(error) {
    res.status(404).json(error);
  }
})

module.exports = router;