// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use helmet to set various HTTP headers for security
app.use(helmet());

// Set Content Security Policy (CSP) headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    imgSrc: ["'self'", 'data:', 'http://localhost:3000'],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    fontSrc: ["'self'", 'https:', 'data:']
  }
}));

const validPasswords = {
  student1: bcrypt.hashSync(process.env.PASSWORD, 10),
};

app.post('/validate-password', (req, res) => {
  const { student, password } = req.body;
  if (validPasswords[student] && bcrypt.compareSync(password, validPasswords[student])) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});