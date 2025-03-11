const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let storedData = [];

app.post('/store-data', (req, res) => {
  const { data } = req.body;
  storedData.push(data);
  res.send('Data stored successfully');
});

app.get('/get-data', (req, res) => {
  res.json({ data: storedData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
