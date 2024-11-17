const express = require('express');
const { uploadAssignment, getAdmins } = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', authenticate, authorize(['User']), uploadAssignment);
router.get('/admins', authenticate, getAdmins);

module.exports = router;
