const Assignment = require('../models/assignmentModel');

// Get all assignments tagged to an admin
const getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ admin: req.user.id });
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch assignments' });
    }
};

// Update the status of an assignment
const updateAssignmentStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const assignment = await Assignment.findById(id);
        if (!assignment) return res.status(404).json({ error: 'Assignment not found' });

        assignment.status = status;
        await assignment.save();
        res.status(200).json({ message: `Assignment ${status.toLowerCase()} successfully` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update assignment status' });
    }
};

module.exports = { getAssignments, updateAssignmentStatus };
