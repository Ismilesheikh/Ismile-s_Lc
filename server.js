// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const validPasswords = {
  student1: 'Ismile@2024',
};

app.post('/validate-password', (req, res) => {
  const { student, password } = req.body;
  if (validPasswords[student] && validPasswords[student] === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});