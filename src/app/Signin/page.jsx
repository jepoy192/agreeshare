"use client";
import React, { useState } from 'react';
import Link from 'next/link';


const img = '/final-logo-1.svg';

const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error
        setError('');

        // Validate username
        if (!username.trim()) {
            setError('Username is required');
            return;
        }

        // Validate password
        if (!password.trim()) {
            setError('Password is required');
            return;
        }

        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 bg-green-400/75">
            <Link href="/">
            <img src={img} alt="Logo" className="h-[560px] w-auto float-left" />  
            </Link>          
            <div class="max-w-sm rounded-3xl bg-gradient-to-b from-green-500 to-yellow-500 p-px dark:from-green-800 dark:to-yellow-700">
            <div class="rounded-[calc(1.5rem-1px)] bg-white w-[400px] p-12 dark:bg-gray-900">
            <h1 className="text-[32px] underline decoration-green-500 font-semibold leading-[38px] mb-4 text-center text-[#1A1A1A]">
                Sign In
            </h1>
                <form onSubmit={handleSubmit} className="">
                    {error && <p className="mb-4 text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            
                        </label>
                        <input
                            placeholder="Username" 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            
                        </label>
                        <input
                            placeholder="Password" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-green-600 hover:text-green-500">Forgot password?</a>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center justify-center bg-gradient-to-r from-green-500 to-yellow-500 hover:to-yellow-600">
                            <span className="relative text-sm text-white">Sign Up</span>
                            <div className="flex items-center -space-x-3 translate-x-3">
                                <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <a href="/Signup" className="text-green-600 hover:text-green-500 underline">Sign up</a>
                    </p>
                </form>
            </div>
            </div>
        </section>                    

    );
};

export default Page;