"use client";
import React, { useState, useEffect } from 'react';
import { Input } from "@nextui-org/input";
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import ImageFinput from './ImageFinput';
import './style.css'
import Image from 'next/image';

interface Props {
  email: string;
}

const UserForm: React.FC<Props> = ({ email }) => {

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [preview, setPreview] = useState();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [especialidades, setEspecialidades] = useState<{
    id_especialidad: string;
    nombre: string;
  }[]>([]);

  const onSubmit = handleSubmit(async (data) => {


    const res = await fetch("/api/user_details", {
      method: "POST",
      body: JSON.stringify({
        email,

        birthDate: data.birthDate,
        carrera: data.carrera,
        universidad: data.universidad,
        linkedin: data.linkedin,
        mail: data.mail,
        imagen: imageUrl,
        id_especialidad: data.id_especialidad,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/");
    } else {
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


      <form className="flex justify-center items-center" onSubmit={async(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', file)

        const response = await fetch('/api/upload',{
            method: 'POST',
            body:formData,
           
        })
        const data = await response.json()
        console.log(data)
        setImageUrl(data.url)
    }}>
        <div className="file-upload-form">
        <label className="file-upload-label">
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded Image" width={300} height={200} />
) : (
  <div className="file-upload-design">
    <svg viewBox="0 0 640 512" height="1em">
      <path
        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
      ></path>
    </svg>
    <p>Drag and Drop</p>
    <p>or</p>
    <span className="browse-button">Browse file</span>
    <input
      id="file"
      type="file"
      accept="image/*"
      onChange={(e) => {
        setFile(e.target.files[0]);
        setPreview(e.target.files[0]);
      }}
    />
   
    <button>upload</button>
  </div>
)}

    </label>
    </div>
    </form>



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



        <Controller
          name="id_especialidad"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              items={especialidades}
              label="Selecciona tu especialidad"
              placeholder="Especialidad"
              className="max-w-xs"
            >
              {(especialidad) => <SelectItem value={especialidad.id_especialidad} key={especialidad.id_especialidad}>{especialidad.nombre}</SelectItem>}
            </Select>
          )}
        />


        <button className='cursor-pointer group relative flex gap-1.5 justify-center items-center px-8 py-2 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md bg-[#352CE8]' type="submit">Register</button>
      </form>

    </div>
  );
}
export default UserForm;