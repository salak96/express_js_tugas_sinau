const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route get all
router.get('/users', userController.getAllUsers);

// Route untuk mendapatkan user berdasarkan ID (menggunakan params)
router.get('/users/:id', userController.getUserById);

// Route untuk mendapatkan user berdasarkan umur (menggunakan query)
router.get('/users/age', userController.getUsersByAge);

module.exports = router;
