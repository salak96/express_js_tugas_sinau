require('dotenv').config(); // Memuat file .env
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Enable CORS
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan routes
app.use('/api', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
