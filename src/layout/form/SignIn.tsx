"use client";
// import { UserAuth } from "@/context/AuthContext";
import { auth, db } from "@/utils/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// import { query } from "firebase/database";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

const SignInLayout = () => {
  // const { user, googleSignIn, logOut, setUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      if (user.email) {
        const usersRef = collection(db, "Authers");
        const q = query(usersRef, where("email", "==", user.email));
        const snap = await getDocs(q);
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data);
        if (data.length === 0) {
          const docRef = await addDoc(collection(db, "Authers"), {
            email: user.email,
            name: user.displayName,
            avatar: user.photoURL,
            description: user.providerData[0].providerId,
            isAdmin: false,
            isAuther: false,
          });
          console.log(docRef);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        passwordOne
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignInForm onSubmit={(e: any) => handleSubmit(e)}>
      <SignInContainer>
        <SignInTitle>Sign In</SignInTitle>
        <div>
          <SignInLabel htmlFor="email">Email</SignInLabel>
          <SignInInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <SignInLabel htmlFor="password">Password</SignInLabel>
          <SignInInput
            type="password"
            id="password"
            name="password"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
          />
        </div>
        <SignInButton type="submit">Sign In</SignInButton>
        <SignInWithGoogleButton onClick={handleSignIn}>
          Sign In With Google
        </SignInWithGoogleButton>
        <ForgotPasswordLink href="#">Forgot your password?</ForgotPasswordLink>
      </SignInContainer>
    </SignInForm>
  );
};

export default SignInLayout;

const SignInForm = styled.form`
  background-color: #f3f4f6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 24rem;
`;

const SignInTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SignInLabel = styled.label`
  display: block;
  color: #4b5563;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const SignInInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #60a5fa;
  }
`;

const SignInButton = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: #fff;
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e3a8a;
  }
`;

const SignInWithGoogleButton = styled.button`
  width: 100%;
  background-color: #fcd34d;
  color: #1f2937;
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fbbf24;
  }
`;

const ForgotPasswordLink = styled.a`
  display: block;
  margin-top: 1rem;
  color: #3b82f6;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
