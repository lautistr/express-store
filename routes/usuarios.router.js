const express = require("express");
const faker = require("faker")

const router = express.Router();

router.get('/', (req, res) => {
  const usuarios = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++){
    usuarios.push({
      username: faker.name.firstName()
    });
  };
  res.json(usuarios);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    username: faker.name.firstName()
  })
})

module.exports = router;
