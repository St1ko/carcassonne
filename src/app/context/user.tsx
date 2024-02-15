"use client";

import React, { createContext, useContext, useEffect } from "react";

import { useCookies } from "react-cookie";

import { generateUser } from "../actions/user";

type UserContextType = string | undefined;

const UserContext = createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    if (!cookies.user) {
      generateUser().then((user) => {
        setCookie("user", user);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={cookies.user}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext) as UserContextType;
};
