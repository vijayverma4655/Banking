// import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 ">
      <div className="w-full max-w-4xl flex bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Sign In Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
          <div className="flex gap-4 mb-6">
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              G
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              F
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              O
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              In
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">or use your email account</p>
          <form>
            <input
              type="text"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-blue-500 mb-6 cursor-pointer">
              Forget Your Password?
            </p>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div>
        {/* Sign Up Section */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white p-8 flex flex-col items-center justify-center rounded-s-full">
          <h2 className="text-2xl font-bold mb-6">Hello, Friend!</h2>
          <p className="text-center mb-6">
            Register with your personal details to use all of the Sites
            features.
          </p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
