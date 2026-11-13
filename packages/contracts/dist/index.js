import { z } from 'zod';
export const createOrderSchema = z.object({
    productId: z.string().min(1),
    quantity: z.number().int().min(1).max(20),
});
export const orderSchema = createOrderSchema.extend({
    id: z.string(),
    status: z.enum(['pending', 'paid', 'shipped']),
});
