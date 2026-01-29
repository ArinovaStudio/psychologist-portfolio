"use client";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  // const [scrolled,setScrolled] = useState(false);
  // useEffect(()=>{
  //   const handleScroll = () => {
  //     if(window.scrollY>60){
  //       setScrolled(true);
  //     }
  //     else{
  //       setScrolled(false);
  //     }
  //   }
  //   window.addEventListener("scroll",handleScroll);
  //   return ()=>{
  //     window.removeEventListener("scroll",handleScroll);
  //   }
  // },[]);
  const showActive = (link: string) => {
    return `text-gray-400 hover:bg-primary hover:text-white rounded-full text-center max-w-30 w-full text-lg whitespace-nowrap py-3 px-3 ${
      link === active && "bg-primary py-3 px-3 text-white"
    }`; 
  };
  const handleScroll = (section_id: string) => {
    const element = document.getElementById(section_id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const links = [
    "home",
    "about",
    "service",
    "#",
    "case-studies",
    "blogs",
    "contact",
  ];
  return (
    <div className="w-full flex z-30">
      <div
        className={`w-full flex bg-foreground px-2 py-2 my-5 rounded-full mx-20`}
      >
        <ul className="flex justify-between w-full items-center px-1">
          {links.map((link: string, index) => {
            if (link === "#") {
              return (
                <li
                  key={index}
                  className="text-xl text-center rounded-full uppercase text-gray-200"
                >
                  shruti sharma
                </li>
              );
            } else {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setActive(link);
                    handleScroll(link);
                  }}
                  className={`cursor-pointer capitalize ${showActive(link)}`}
                >
                  {link.replace("-", " ")}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
