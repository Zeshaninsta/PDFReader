const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single('file');

app.post('/api/upload-pdf', (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: 'File upload error' });
    } else if (err) {
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }

    const filePath = path.join(__dirname, req.file.path);

    try {
      res.sendFile(filePath);
    } catch (error) {
      res.status(500).json({ error: 'Error sending PDF file' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
