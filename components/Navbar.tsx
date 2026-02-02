"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    "home",
    "about",
    "service",
    "#",
    "case-studies",
    "blogs",
    "contact",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    links.forEach((id) => {
      if (id !== "#") {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const showActive = (link: string) => {
    return `text-gray-400 hover:bg-primary hover:text-white rounded-full text-center max-w-30 w-full text-lg whitespace-nowrap py-3 px-3 ${
      link === active && "bg-primary text-white"
    }`;
  };

  const handleScroll = (section_id: string) => {
    const element = document.getElementById(section_id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="w-full flex z-30 justify-center">
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:flex w-full bg-foreground px-2 py-2 my-5 rounded-full mx-20">
        <ul className="flex justify-between w-full items-center px-1">
          {links.map((link, index) =>
            link === "#" ? (
              <li
                key={index}
                className="text-xl text-center rounded-full uppercase text-gray-200"
              >
                shruti sharma
              </li>
            ) : (
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
            )
          )}
        </ul>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden fixed top-4 left-4 right-4 bg-foreground rounded-full px-4 py-3 flex items-center justify-between z-40">
        <span className="uppercase text-gray-200 text-sm font-semibold">
          shruti sharma
        </span>

        <button onClick={() => setOpen(!open)}>
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-foreground rounded-2xl p-4 z-30">
          <ul className="flex flex-col gap-2">
            {links.map(
              (link, index) =>
                link !== "#" && (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(link);
                      handleScroll(link);
                    }}
                    className={`capitalize cursor-pointer text-center py-3 rounded-xl ${
                      link === active
                        ? "bg-primary text-white"
                        : "text-gray-400 hover:bg-primary hover:text-white"
                    }`}
                  >
                    {link.replace("-", " ")}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
