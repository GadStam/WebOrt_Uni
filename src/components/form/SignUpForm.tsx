'use client';

import React from 'react';
import { Input } from "@nextui-org/input";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import GoogleBtn from './btn/GoogleBtn';
import Link from 'next/link';

const FormSchema = z
  .object({
    name: z.string().min(1, 'name is required').max(100),
    surname: z.string().min(1, 'surname is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password
      })
    })
    if (response.ok) {
      router.push('/sign-in');
    } else {
      console.error('Error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen py-32">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md gap-4">
        <h1 className="dark:text-white text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-3">
            <span className="bg-clip-text">Register</span>
        </h1>

        <Input
            type="text"
            label="Name"
            placeholder="Enter your name"
            {...register("name")}
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
            {...register("surname")}
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
            {...register("email")}
        />
        {errors.email && (
            <span className="text-red-500 text-xs">
                {errors.email.message}
            </span>
        )}

        <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            {...register("password")}
        />
        {errors.password && (
            <span className="text-red-500 text-xs">
                {errors.password.message}
            </span>
        )}

        <Input
            type="password"
            label="Confirm Password"
            placeholder="Repeat your password"
            {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
            <span className="text-red-500 text-xs">
                {errors.confirmPassword.message}
            </span>
        )}

<button className='cursor-pointer group relative flex gap-1.5 justify-center items-center px-8 py-2 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md bg-[#352CE8]' type="submit">Log in</button>
    
    <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
or
</div>

    <GoogleBtn name={'Register'}/>
    <p className='text-center text-sm text-gray-600 mt-2'>
        If you have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-in'>
            Sign In
        </Link>
    </p>
      </form>
    </div>
  );
};

export default SignUpForm;
