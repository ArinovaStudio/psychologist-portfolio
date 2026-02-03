"use client";
import React, { useEffect } from "react";
import Footer from "../Footer";
import { useTheme } from "next-themes";

export default function Layout({ children }: React.PropsWithChildren) {
  const { setTheme } = useTheme();
  useEffect(() => {
    // window.scrollTo(0,0);
    setTheme("light");
  }, []);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </div>
  );
}
