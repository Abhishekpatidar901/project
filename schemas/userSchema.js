const { z } = require('zod');

const userRegistrationSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['User', 'Admin']),
});

const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

module.exports = { userRegistrationSchema, userLoginSchema };
