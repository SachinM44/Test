import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">login in with google </p>
        </div>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

export default LoginPage;

