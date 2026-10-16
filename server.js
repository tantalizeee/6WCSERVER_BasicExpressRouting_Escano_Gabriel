// Author: Gabriel Z. Escaño
// WD - 303

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (CSS, images) from /public
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// Log the page, then send it
function render(res, file) {
  console.log(`Rendering ${file}`);
  res.sendFile(path.join(__dirname, 'public', file));
}

app.get('/', (req, res) => render(res, 'index.html'));
app.get('/menu', (req, res) => render(res, 'menu.html'));
app.get('/about', (req, res) => render(res, 'about.html'));
app.get('/contact', (req, res) => render(res, 'contact.html'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});