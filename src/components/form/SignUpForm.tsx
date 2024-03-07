"use client";
import React from 'react';
import { Input } from "@nextui-org/input";
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import GoogleBtn from './btn/GoogleBtn';

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
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

  console.log(errors);


  return (
    <div>
      <form onSubmit={onSubmit} className="flex w-full flex-wrap gap-4">
        <h1 className="dark:text-white text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center relative z-10 mb-3">
          <span className="bg-clip-text">Register</span>
        </h1>

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">No pudmos crear usuario Email o Nombre de usuario ya existe</p>
        )}

        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-xs">
            {errors.name.message}
          </span>
        )}

<Input
          type="text"
          label="Surname"
          placeholder="Enter your surname"
          {...register("surname", {
            required: {
              value: true,
              message: "surname is required",
            },
          })}
        />
        {errors.surname && (
          <span className="text-red-500 text-xs">
            {errors.surname.message}
          </span>
        )}

        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
         {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <Input
          type="password"
          label="Confirm Password"
          placeholder="Repeat your password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
        />
         {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <button type="submit">Register</button>
        <p className='text-center text-sm Otext-gray-600 mt-2'>
            If you have an account, please&nbsp; .
            <Link className='text-blue-500 hover:underline' href='/sign-in'>Sign In</Link>
            </p>
            <GoogleBtn name={'Register'}/>
      </form>
    </div>
  );
}
export default SignUpForm;




