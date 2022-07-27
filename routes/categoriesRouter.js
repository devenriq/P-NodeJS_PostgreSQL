const express = require('express');
const router = express.Router();
const CategoriesService = require('./../services/categoriesService');

const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const categories = await service.create(body);
  res.json(categories);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categories = await service.update(id, body);
  res.json(categories);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const categories = await service.delete(id);
  res.json(categories);
});

module.exports = router;
