"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
export default function GoBack() {
  const router = useRouter();
  const goBack = () => {
    if (window.history.length) {
      router.push("/");
    } else {
      router.back();
    }
  };
    return (
      <Button
        onClick={goBack}
        variant={"outline"}
        className="text-md"
        size="lg"
      >
        <ArrowLeft /> Back
      </Button>
    );
}
