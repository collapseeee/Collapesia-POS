import { z } from 'zod';
export declare const createOrderSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export declare const orderSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
    id: z.ZodString;
    status: z.ZodEnum<{
        pending: "pending";
        paid: "paid";
        shipped: "shipped";
    }>;
}, z.core.$strip>;
export type Order = z.infer<typeof orderSchema>;
