import { z } from 'zod';

export const createOrderSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1).max(20),
});
export type CreateOrderInput = z.infer<typeof createOrderSchema>;

export const orderSchema = createOrderSchema.extend({
  id: z.string(),
  status: z.enum(['pending', 'paid', 'shipped']),
});
export type Order = z.infer<typeof orderSchema>;
