"use client";
import { createContext } from "react";
import User from "../types/user.type";
import { Dispatch, SetStateAction } from "react";
export const UserContext = createContext<UserContextType>({user : null, setUser : null});

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};
