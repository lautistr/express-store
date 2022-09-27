const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/", (req, res) =>{
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(productos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl()
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'patched',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
