import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from 'zod'
import { TypeUser } from "@prisma/client";
import { Buffer } from 'buffer';




export async function POST(req: Request){
    try{
        const body = await req.json() as { email: string, birthDate: Date, profile_picture: Buffer, carrera: string, universidad: string, linkedin: string, mail: string, id_especialidad: string };
        const {email, birthDate, profile_picture, carrera, universidad, linkedin, mail, id_especialidad} = body;
        console.log(body);

        const editUser = await db.user.update({
            where:{
                email
            },
            data:{
                birthDate: new Date(birthDate), 
                profile_picture, 
                carrera, 
                universidad, 
                linkedin, 
                mail, 
                id_especialidad
            }
        });
        const {password: newUserPassword, ...rest} = editUser;

        return NextResponse.json({user: rest, message: "User updated"}, {status: 200});
    }catch(error){
        console.log(error);
        return NextResponse.json({message: error}, {status: 500});
    }
}

export async function GET(req: Request) {
    try {
        // Consultar todos los registros en la tabla Especialidad
        const especialidades = await db.especialidad.findMany();

        // Devolver los datos obtenidos como una respuesta JSON
        return NextResponse.json({ especialidades }, { status: 200 });
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta
        return NextResponse.json({ message: error }, { status: 500 });
    }
}