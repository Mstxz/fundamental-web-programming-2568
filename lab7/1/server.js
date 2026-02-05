const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/dogs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/dog.html'));
});
app.get('/cats', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/cat.html'));
});
app.get('/birds', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/bird.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/about.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});