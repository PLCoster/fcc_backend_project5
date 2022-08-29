// .env file can hold PORT variable if desired
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer();

// Log incoming requests in development:
if (process.env.RUN_MODE === 'development') {
  app.use((req, res, next) => {
    console.log(
      `${req.method} ${req.path}; IP=${req.ip}; https?=${req.secure}`,
    );
    next();
  });
}

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors());

// Serve static files from 'public' folder
// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(__dirname + '/public'));

// Send index.html on requests to root
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// POST request to /api/fileanalyse analyses file metadata with multer
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  // If valid file was uploaded, file data is on req.file:
  if (!req.file) {
    return res.json({ error: 'Please upload a file' });
  }

  const { originalname: name, mimetype: type, size } = req.file;
  return res.json({ name, type, size });
});

// 404 page not found:
app.get('*', (req, res) => {
  // Redirect to index
  res.redirect('/');
});

// Internal Error Handler:
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server error: See Server Logs');
});

// Have server listen on PORT or default to 3000
// http://localhost:3000/
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
