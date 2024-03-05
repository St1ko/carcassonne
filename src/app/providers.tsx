"use client";

import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

interface Props {
  children?: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <Theme>{children}</Theme>
    </ThemeProvider>
  );
};
