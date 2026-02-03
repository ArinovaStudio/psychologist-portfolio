"use client";
import React, { useEffect } from "react";
export default function ScrollToTop({ children }: React.PropsWithChildren) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return children;
}
