const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Replace with your MongoDB connection string
const mongoURI = 'your_mongodb_connection_string';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a schema and model for storing user data
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });

  newUser.save((err) => {
    if (err) return console.error(err);
    res.send('User saved successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
