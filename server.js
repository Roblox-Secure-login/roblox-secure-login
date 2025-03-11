const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Access the input fields
    console.log('Username:', username);
    console.log('Password:', password);

    // Perform your authentication logic here

    // Respond to the client
    res.json({ message: 'Login data received' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
