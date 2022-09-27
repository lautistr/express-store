const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get('/', (req, res) => {
  const categorias = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++){
    categorias.push({
      name: faker.commerce.department()
    })
  }
  res.json(categorias);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.department()
  })
})

module.exports = router;
