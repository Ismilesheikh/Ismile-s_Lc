// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3001; // Change the port here

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use helmet to set various HTTP headers for security
app.use(helmet());

// Set Content Security Policy (CSP) headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    imgSrc: ["'self'", 'data:', 'http://localhost:3001'],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    fontSrc: ["'self'", 'https:', 'data:']
  }
}));

const validPasswords = {
  student1: 'Ismile@2024',
  student2: 'Ismile@2024'
};

app.post('/validate-password', (req, res) => {
  const { student, password } = req.body;
  if (validPasswords[student] && validPasswords[student] === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwbyuo39cBuZktxPORqNnunW2SSOb18VaeREza-wwLQ9YYrL77cQIG1E2cEOaNF3RfO/exec');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});