import React from 'react';
import { Button } from 'antd';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../Firebase';



const Login = () => {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup( auth, googleProvider)
    .catch((error) => {
      console.log(error.message);
    });
  }

  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-900">
      <div className="mx-auto max-w-[350px] space-y-6 bg-blue-100 p-10 rounded-lg ">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold pb-10">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">Sign in with your Google account</p>
      </div>
      <div>
        <Button onClick={handleGoogle} className="w-full" variant="outline">
          Sign in with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <a className="underline" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Login;