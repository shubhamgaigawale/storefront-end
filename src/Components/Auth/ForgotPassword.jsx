// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate sending a password reset email
        setMessage('If an account with that email exists, you will receive a password reset email shortly.');
        setEmail('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
            {message && (
                <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send Reset Link
                </button>

                <div className="mt-4 text-center">
                    <Link
                        to="/signin"
                        className="text-blue-500 hover:underline"
                    >
                        Back to Log In
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
