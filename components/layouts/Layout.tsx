"use client";
import React, { useEffect } from "react";
import Footer from "../Footer";
import { useTheme } from "next-themes";
import Navbar from "../Navbar";
export default function Layout({ children }: React.PropsWithChildren) {
    const {setTheme} = useTheme();
    useEffect(()=>{
        setTheme("light");
    },[]);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar/>
      <div className="flex-1 h-full">{children}</div>
      <Footer/>
    </div>
  );
}
