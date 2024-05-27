import React from "react";

function Login({ onRegisterClick }) {
    return (
        <div className="bg-darkgrey p-8 m-4 rounded-lg shadow-md flex flex-col items-center text-center max-w-md w-full">
            <h2 className="text-2xl text-white font-semibold mb-4">Log In to CHECKMATE</h2>
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
                <a
                    className="inline-block align-baseline font-bold text-sm mb-4 text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-darkbrown w-full hover:opacity-90 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Log In
                    </button>
                </div>
            </form>
            <div className="text-white mt-4"></div>
            <div className="mt-1">
                <span className="text-white text-sm">Don't have an account?</span>
                <a
                    className="text-blue-500 hover:text-blue-800 text-sm ml-2"
                    onClick={onRegisterClick}
                >
                    Register Here
                </a>
            </div>
        </div>
    );
}

export default Login;
