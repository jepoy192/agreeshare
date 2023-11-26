"use client";
import React, { useState } from 'react';

const img = '/final-logo-1.svg';

const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleSignup = (event) => {
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

        // Validate confirm password
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Validate file
        if (!file) {
            setError('ID is required');
            return;
        }

        console.log(`Username: ${username}, Password: ${password}, Confirm Password: ${confirmPassword}, File: ${file}, Error: ${error}`);
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 bg-green-400/75">
            <div className="w-1/2 h-1/2 py-[120px] flex bg-green items-center justify-center">
            <img src={img} alt="Logo" className="h-[560px] w-auto float-left" />            
            </div>
            <div className="w-[560px] p-6 bg-white rounded shadow-md">
            <h1 className="text-[32px] underline decoration-green-500 font-semibold leading-[38px] mb-4 text-center text-[#1A1A1A]">
                Sign Up
            </h1>
                <form onSubmit={handleSignup}>
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
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            
                        </label>
                        <input
                            placeholder="Confirm Password" 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            
                        </label>
                        <input
                            placeholder="Upload Id" 
                            type="file" 
                            onChange={(e) => setFile(e.target.files[0])} 
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <p className="block text-sm font-medium text-gray-700">
                            <input type="checkbox" id="accept" name="accept" />
                            <label htmlFor="accept" className="ml-2 text-sm text-gray-600">Accept All </label>
                            <a href="/Signup" className="text-green-600 hover:text-green-500 underline">Terms & Conditions</a>
                        </p>
                    </div>
                    <input 
                        type="submit" 
                        value="Sign Up" 
                        className="w-full py-2 px-4 border border-transparent rounded-[500px] shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <a href="/Signin" className="text-green-600 hover:text-green-500 underline">Sign in</a>
                </p>
            </div>
        </section>
    );
};

export default Page;