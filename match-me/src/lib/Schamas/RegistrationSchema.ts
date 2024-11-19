import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().min(3,{
        message:"name should be greater then 3 charater"
    }),
    email: z.string().email(),
    password: z.string().min(6,{
        message:"password must be 6 charater"
    })
})

export type RegisterSchema = z.infer<typeof registerSchema >