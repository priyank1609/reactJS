import { z } from "zod";

const ordersData = {
    customer: {
        name: "Mr. Ram",
        email: "ram@gmail.com"
    },
    id: 12345,
    date: new Date("2026-01-09"),
    price: 123.45,
    password: "Priyank123",
    category: "apple"
};
const orderSchema = z.object({
    customer: z.object({
        name: z.string().trim().min(3).max(10),
        email: z.string().trim().email()
    }),
    id: z.number().min(1000),
    date: z.date(),
    price: z.number().min(10),
    password: z.string().min(8).regex(/[A-Z]/, 'Password must contain at least one uppercase letter').regex(/[0-9]/, 'Password must contain at least one number'),
    category: z.string().refine((value) => {
        if(value === "orange") return false;
        return true;
    }, { message: "Category cannot be orange" })
})

orderSchema.parse(ordersData);