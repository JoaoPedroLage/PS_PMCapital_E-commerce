import { z } from 'zod';

export const ticketSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  })
    .min(3, { message: 'Name must be 3 or more characters long' }),
  price: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a number',
  }),
});

export type Ticket = z.infer<typeof ticketSchema>;