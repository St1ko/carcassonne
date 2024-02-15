"use client";

import { Theme } from "@radix-ui/themes";
import { CookiesProvider } from "react-cookie";

import { UserProvider } from "./context/user";

interface Props {
  children?: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Theme>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <UserProvider>{children}</UserProvider>
      </CookiesProvider>
    </Theme>
  );
};
