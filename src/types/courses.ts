// zod

import { z } from 'zod';

export const CourseSchema = z.object({
  name: z.string().min(1, { message: 'Course name is required' }),
  description: z.string().min(1, { message: 'Course description is required' }),
  price: z.number().min(1, { message: 'Course price is required' }),
  thumbnail: z.string().min(1, { message: 'Course image is required' }),

  language: z.string().min(1, { message: 'Course language is required' }),
  category: z.string().min(1, { message: 'Course category is required' }),
  tags: z
    .array(z.string().min(1, { message: 'Course tags cannot be empty' }))
    .min(1, { message: 'Course tags is required' }),
  total_duration: z.string().min(1, { message: 'Course duration is required' }),
});
