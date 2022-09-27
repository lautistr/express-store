const express = require('express');

const productosRouter = require('./productos.router');
const usuariosRouter = require('./usuarios.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/productos', productosRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/categorias', categoriasRouter);
};

module.exports = routerApi;
