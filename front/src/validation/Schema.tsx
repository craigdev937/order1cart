import { z } from "zod";

export const ProdSchema = z.object({
    name: z.string()
        .min(1, "Name is required!")
        .max(60, "Name is too long!"),
    description: z.string()
        .min(1, "Description is required")
        .max(1000, "Description is too long"),
    image: z.string(),
    price: z.string(),
    stock: z.number()
});

export type ProdSType = z.infer<typeof ProdSchema>;




