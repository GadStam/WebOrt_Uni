import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';

// Define user schema for request body validation
const userSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required'),
    name: z.string().max(100), // Optional fields
    surname: z.string().max(100), // Optional fields
    // Add validation for other optional fields if needed
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password, name, surname } = userSchema.parse(body);

        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });

        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "This email already exists." }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                surname,
                
             
                // Include other optional fields if provided
            }
        });

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "User created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Wrong" }, { status: 500 });
    }
}
