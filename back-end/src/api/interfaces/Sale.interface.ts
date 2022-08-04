import { z } from 'zod';

export const saleSchema = z.object({
  userId: z.number({
    required_error: 'userId is required',
    invalid_type_error: 'userId must be a number',
  }),
  sellerId: z.number({
    required_error: 'sellerId is required',
    invalid_type_error: 'sellerId must be a number',
  }),
  totalPrice: z.number({
    required_error: 'totalPrice is required',
    invalid_type_error: 'totalPrice must be a number',
  }),
  deliveryAddress: z.string({
    required_error: 'deliveryAddress is required',
    invalid_type_error: 'deliveryAddress must be a string',
  }),
  deliveryNumber: z.number({
    required_error: 'deliveryNumber is required',
    invalid_type_error: 'deliveryNumber must be a number',
  }),
});

export type Sale = z.infer<typeof saleSchema>;