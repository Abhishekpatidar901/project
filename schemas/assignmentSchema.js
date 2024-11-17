const { z } = require('zod');

const assignmentUploadSchema = z.object({
    userId: z.string(),
    task: z.string(),
    admin: z.string(),
});

module.exports = { assignmentUploadSchema };
