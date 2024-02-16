"use client";

import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";

import { UserProvider } from "./context/user";

interface Props {
  children?: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <Theme>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <UserProvider>{children}</UserProvider>
        </CookiesProvider>
      </Theme>
    </ThemeProvider>
  );
};
