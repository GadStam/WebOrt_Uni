import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from 'zod'
import { TypeUser } from "@prisma/client";





export async function POST(req: Request){
    try{
        const body = await req.json() as {email: string, user_type:TypeUser};
        const {email, user_type} = body;


        const editUser = await db.user.update({
            where:{
                email
            },
            data:{
                user_type
            }
        });
        const {password: newUserPassword, ...rest} = editUser;

        return NextResponse.json({user: rest, message: "User updated"}, {status: 200});
    }catch(error){
        return NextResponse.json({message: error}, {status: 500});
    }
}

