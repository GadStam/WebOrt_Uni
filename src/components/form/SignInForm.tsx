"use client";
import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { z } from 'zod'; // Importa z de Zod
import { zodResolver } from '@hookform/resolvers/zod'; // Importa zodResolver de react-hook-form
import GoogleBtn from './btn/GoogleBtn';
import Link from 'next/link';

// Define el esquema de validación de Zod
const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
});

function LoginPage() {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(FormSchema), // Usa zodResolver con el esquema de validación de Zod
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        const signInData = await signIn('credentials', {
            email: values.email,
            password: values.password
        });
        if (signInData?.error) {
            setError(signInData.error);
        } else {
            router.push('/admin');
        }
    };
    
    return (
        <div className="flex justify-center items-center h-screen"> {/* Centering and making it responsive */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="dark:text-white text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-3">
                <span className="bg-clip-text">Log In</span>
            </h1>
       
            {error && (
                <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
            )}
    
            <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                {...form.register("email")}
            />
            {form.formState.errors?.email && (
                <span className="text-red-500 text-xs">{form.formState.errors.email.message}</span>
            )}
    
            <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                {...form.register("password")}
            />
            {form.formState.errors?.password && (
                <span className="text-red-500 text-sm">
                    {form.formState.errors.password.message}
                </span>
            )}
    
            <button className='cursor-pointer group relative flex gap-1.5 justify-center items-center px-8 py-2 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md bg-[#352CE8]' type="submit">Log in</button>
    
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
    
            <GoogleBtn name={'sign In'}/>
            <p className='text-center text-sm text-gray-600 mt-2'>
                If you don&apos;t have an account, please&nbsp;
                <Link className='text-blue-500 hover:underline' href='/sign-up'>
                    Sign up
                </Link>
            </p>
        </form>
    </div>
    
    );
}

export default LoginPage;
