// zod

import { z } from 'zod';


export const CourseSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Course name must be at least 3 characters' })
    .max(100, { message: 'Course name must be at most 100 characters' }),
  
  description: z
    .string()
    .min(10, { message: 'Course description must be at least 10 characters' })
    .max(500, { message: 'Course description must be at most 500 characters' }),

  price: z
    .number()
    .min(1, { message: 'Course price must be at least 1' }),

  language: z
    .string()
    .min(2, { message: 'Course language must be at least 2 characters' })
    .max(30, { message: 'Course language must be at most 30 characters' }),

  

  tags: z
    .array(z.string().min(1, { message: 'Course tag cannot be empty' }))
    .min(1, { message: 'At least one course tag is required' })
    .max(10, { message: 'You can add up to 10 tags only' }),
});
