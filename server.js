// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable Cross-Origin Requests (CORS)

// Connect to MongoDB
mongoose.connect('mongodb://localhost/NitinDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define User and Product routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
