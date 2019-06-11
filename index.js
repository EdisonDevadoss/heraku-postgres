const express = require('express');
const app = express();

const port = process.env.NODE_ENV || 3000;

app.get('/', (req, res)=>{
  res.json({message: 'test fetch'})
});


app.listen(port);
