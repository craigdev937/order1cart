import { z } from "zod/mini";

export const ProdSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.number(),
    stock: z.number()
});

export type ProdSType = z.infer<typeof ProdSchema>;



