const express = require('express');
const router = express.Router();
const BrandService = require('./../services/brandsService');

const service = new BrandService();

router.get('/', async (req, res) => {
  const brand = await service.find();
  res.json(brand);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newBrand = await service.create(body);
  res.status(201).json(newBrand);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.delete(id);
  res.json(user);
});

module.exports = router;
