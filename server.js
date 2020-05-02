'use strict';

const express = require('express');

// Constants
const PORT = 7070;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

const ELK = require('elkjs')
const elk = new ELK()

app.post('/', (req, res) => {
  console.log(req.body);
  elk.layout(req.body)
   .then(function(g) {
     res.json(g);//res.send(JSON.stringify(g, null, " "));
   })
   .catch(function(g) {
     res.status(500).send(g)
   })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);




