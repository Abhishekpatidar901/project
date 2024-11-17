const express = require('express');
const { getAssignments, updateAssignmentStatus } = require('../controllers/adminController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/assignments', authenticate, authorize(['Admin']), getAssignments);
router.post('/assignments/:id/status', authenticate, authorize(['Admin']), updateAssignmentStatus);

module.exports = router;
