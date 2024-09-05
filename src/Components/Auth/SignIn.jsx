import React, { useState } from 'react';

function SignIn({ onSignIn, onSignUp, onForgotPassword, onGoogleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setIsLoggedIn] = useState();
    const [, setDisplaUsername] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignIn(username, password, setIsLoggedIn, setUsername);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Sign In
                </button>
            </form>
            <div className="mt-4 flex justify-between text-sm">
                <button
                    className="text-blue-500 hover:underline"
                    onClick={onForgotPassword}
                >
                    Forgot Password?
                </button>
                <button
                    className="text-blue-500 hover:underline"
                    onClick={onSignUp}
                >
                    Create Account
                </button>
            </div>
            <button
                className="w-full mt-6 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                onClick={onGoogleLogin}
            >
                Sign in with Google
            </button>
        </div>
    );
}

export default SignIn;
