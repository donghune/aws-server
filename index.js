const express = require('express')
const MazeKeyGen = require('./algorithm');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const ROOMS = req.query["rooms"] || 0;
  const KEYS = req.query["keys"] || 0;
  const level = new MazeKeyGen({rooms: ROOMS, keys: KEYS});
  const result = level.generate();
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
