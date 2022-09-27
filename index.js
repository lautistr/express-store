const express = require("express");
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () =>{
  console.log("My port: " + port);
});
// app.get("/", (req, res) =>{
//   res.send("Hola mi server en Express");
// });
// app.get("/nueva-ruta", (req, res) =>{
//   res.send("Hola soy una nueva ruta");
// });


// app.get('/api/categories/:categoryId/products/:productId', (req,res)=>{
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId
//   });
// });

// app.get('/api/users', (req, res) => {
//   const { limit, offset }= req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   }
//   res.send('No hay parametros');
// })

