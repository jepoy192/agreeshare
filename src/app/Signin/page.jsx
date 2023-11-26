"use client";
import React, { useState } from 'react';

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
            <div className="w-1/2 h-1/2 py-[120px] flex bg-green items-center justify-center">
            <img src={img} alt="Logo" className="h-[560px] w-auto float-left" />            
            </div>
            <div className="w-[560px] p-6 bg-white rounded shadow-md">
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
                    <input 
                        type="submit" 
                        value="Sign In" 
                        className="w-full py-2 px-4 border border-transparent rounded-[500px] shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <a href="/Signup" className="text-green-600 hover:text-green-500 underline">Sign up</a>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Page;