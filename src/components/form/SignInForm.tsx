"use client";
import React from 'react';
import { Input } from "@nextui-org/input";
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import Link from 'next/link';
import GoogleBtn from './btn/GoogleBtn';


function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const router = useRouter()
      const [error, setError] = useState(null)
      
      const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });
    
        console.log(res)
        if (res.error) {
          setError(res.error)

        } else {
          router.push('/')
          router.refresh()
        }
      });
    
  return (
    <div>
      <form onSubmit={onSubmit} className="flex w-full flex-wrap gap-4">
        <h1 className="dark:text-white text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center relative z-10 mb-3">
          <span className="bg-clip-text">Log In</span>
        </h1>
       
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
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

       
        <button type="submit">Log in</button>
        
            <p className='text-center text-sm Otext-gray-600 mt-2'>
            If you don&apos;t have an account, please&nbsp; .
            <Link className='text-blue-500 hover:underline' href='/sign-up'>Sign up</Link>
            </p>
            <GoogleBtn name={'Log In'}/>
      </form>
    </div>
  );
}
export default SignInForm;



