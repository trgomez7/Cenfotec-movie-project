import {onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth,logout } from "../firebase";
import Login from "./Login";

export const SignOutUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  if (user){
    logout()
  }
  history("/")
  return <Login></Login>


};
