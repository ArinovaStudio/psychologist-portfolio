"use client";
import ConsultantSection from "../_components/ConsultantSection";
import HeroSection from "../_components/HeroSection";
import AboutSection from "../_components/AboutUs";
import HelpSection from "../_components/HelpSection";
import WorksSection from "../_components/WorksSection";
import BooksSection from "../_components/BooksSection";
import SkillsBanner from "../_components/SkillsBanner";
import TestimonialsSection from "../_components/TestimonialSection";
import BlogsReference from "../_components/BlogsReference";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <div>
        <HeroSection />

        <AboutSection />

        <HelpSection />

        <WorksSection />

        <ConsultantSection />

        <BooksSection />

        <SkillsBanner />
        <TestimonialsSection />

        <BlogsReference />
      </div>
    </>
  );
}
