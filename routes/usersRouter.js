const express = require('express');
const router = express.Router();
const UserService = require('./../services/usersService');

const service = new UserService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
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
