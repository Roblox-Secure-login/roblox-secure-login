const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simple in-memory storage (use a database in production)
let storedData = [];

// Endpoint to store data
app.post('/store-data', (req, res) => {
  const { data } = req.body;
  storedData.push(data);
  res.send('Data stored successfully');
});

// Endpoint to retrieve stored data (authentication required)
app.get('/get-data', (req, res) => {
  // Add authentication logic here
  res.json({ data: storedData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
