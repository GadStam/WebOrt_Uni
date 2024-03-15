"use client";
import React, { useState, useEffect } from 'react';
import { Input } from "@nextui-org/input";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [especialidades, setEspecialidades] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
   

    const res = await fetch("/api/user_details", {
      method: "POST",
      body: JSON.stringify({
        birthDate: data.birthDate,
        carrera: data.carrera,
        universidad: data.universidad,
        linkedin: data.linkedin,
        mail: data.mail,
        imagen: data.imagen,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/");
    }else{
      setError(true);
    }
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/user_details');
        if (!res.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await res.json();
        setEspecialidades(data.especialidades);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(errors);


  return (
    <div className="flex justify-center items-center h-screen py-32 sm:mt-28 lg:mt-32 mb-20">
      <form onSubmit={onSubmit} className="flex flex-col w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md gap-4">
      <h1 className="dark:text-white text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-3">
            <span className="bg-clip-text">Complete Info</span>
        </h1>

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">No pudmos crear usuario Email o Nombre de usuario ya existe</p>
        )}

        <Input
          type="date"
          label="fecha de Nacimeinto"
          placeholder="26/11/2004"
          {...register("birthDate", {
            required: {
              value: true,
              message: "birthDate is required",
            },
          })}
        />
        {errors.birthDate && (
          <span className="text-red-500 text-xs">
            {errors.birthDate.message}
          </span>
        )}

        <Input
          type="text"
          label="carrera"
          placeholder="ingenieria en sistemas"
          {...register("carrera", {
            required: {
              value: true,
              message: "carrera is required",
            },
          })}
        />
         {errors.carrera && (
          <span className="text-red-500 text-xs">{errors.carrera.message}</span>
        )}

        <Input
          type="text"
          label="universidad"
          placeholder="ingenieria en sistemas"
          {...register("universidad", {
            required: {
              value: true,
              message: "universidad is required",
            },
          })}
        />
         {errors.universidad && (
          <span className="text-red-500 text-xs">{errors.universidad.message}</span>
        )}



        <Input
          type="text"
          label="linkedin"
          placeholder="https://www.linkedin.com/in/gad-stamati-9007b0234/"
          {...register("linkedin", {
            required: {
              value: true,
              message: "linkedin is required",
            },
          })}
        />
        {errors.linkedin && (
          <span className="text-red-500 text-sm">
            {errors.linkedin.message}
          </span>
        )}

        <Input
          type="text"
          label="mail"
          placeholder="gadstam@gmail.com"
          {...register("mail", {
            required: {
              value: true,
              message: "mail is required",
            },
          })}
        />
         {errors.mail && (
          <span className="text-red-500 text-sm">
            {errors.mail.message}
          </span>
        )}

        <Input
          type="file"
          label="Foto de Perfil"
          placeholder="foto"
          {...register("imagen", {
            required: {
              value: false,
              message: "imagen is required",
            },
          })}
        />
         {errors.imagen && (
          <span className="text-red-500 text-sm">
            {errors.imagen.message}
          </span>
        )}
         <Select
      items={especialidades}
      label="Selecciona tu especialidad"
      placeholder="Especialidad"
      className="max-w-xs"
    >
      {(especialidad) => <SelectItem key={especialidad.id_especialidad}>{especialidad.nombre}</SelectItem>}
    </Select>


        <button className='cursor-pointer group relative flex gap-1.5 justify-center items-center px-8 py-2 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md bg-[#352CE8]' type="submit">Register</button>
      </form>
     
    </div>
  );
}
export default UserForm;