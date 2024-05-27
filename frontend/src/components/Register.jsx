import React from "react";

function Register({ onLoginClick }) { // Receive the onLoginClick function as a prop
    return (
        <div className="bg-darkgrey p-8 m-4 rounded-lg shadow-md flex flex-col items-center text-center max-w-md w-full">
            <h2 className="text-2xl text-white font-semibold mb-4">Register for CHECKMATE</h2>
            <form className="w-full max-w-xs sm:max-w-sm">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-darkbrown w-full hover:opacity-90 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Register
                    </button>
                </div>
            </form>
            <div className="text-white mt-4"></div>
            <div className="mt-1">
                <span className="text-white text-sm">Already have an account?</span>
                <button
                    className="text-blue-500 hover:text-blue-800 text-sm ml-2 focus:outline-none"
                    onClick={onLoginClick} // Call the onLoginClick function on button click
                >
                    Log In Here
                </button>
            </div>
        </div>
    );
}

export default Register;
