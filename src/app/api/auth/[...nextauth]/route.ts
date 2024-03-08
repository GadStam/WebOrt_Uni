import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from 'zod'
const userSchema = z
  .object({
    name: z.string().min(1, 'name is required').max(100),
    surname: z.string().min(1, 'surname is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })




export async function POST(req: Request){
    try{
        const body = await req.json();
        const {email, name, surname, password} = userSchema.parse(body);

        const existingUserByEmail = await db.user.findUnique({
            where:{ email: email}
        });
        
        if (existingUserByEmail){
            return NextResponse.json({user: null, message: "This email already exists."}, {status: 409});
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data:{
                name,
                surname,
                email,
                password: hashedPassword
            }
        });
        const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: rest, message: "User created"}, {status: 201});
    }catch(error){
        return NextResponse.json({message: "Wrong"}, {status: 500});
    }
}