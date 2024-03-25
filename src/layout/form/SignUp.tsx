"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/utils/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const SignUpLayout = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const auths = await createUserWithEmailAndPassword(
        auth,
        email,
        passwordOne
      );
      await addDoc(collection(db, "Authers"), {
        email: auths.user.email,
        name: auths.user.displayName,
        avatar: auths.user.photoURL,
        description: auths.user.providerData[0].providerId,
        isAdmin: false,
        isAuther: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auths = await signInWithPopup(auth, provider);
      await addDoc(collection(db, "Authers"), {
        email: auths.user.email,
        name: auths.user.displayName,
        avatar: auths.user.photoURL,
        description: auths.user.providerData[0].providerId,
        isAdmin: false,
        isAuther: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" h-screen flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
        <button
          onClick={handleSignIn}
          className="w-full mt-4 bg-yellow-400 text-gray-900 py-2 rounded-md transition duration-300 hover:bg-yellow-500 focus:outline-none"
        >
          Sign Up With Google
        </button>
        <a
          href="#"
          className="block mt-4 text-blue-600 text-sm hover:underline"
        >
          Forgot your password?
        </a>
      </div>
    </form>
  );
};

export default SignUpLayout;
