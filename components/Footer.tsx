import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  SendHorizonal,
  ArrowUpRight,
  Instagram,
  Youtube,
} from "lucide-react";
const LINKS = ["home", "about", "service", "case-studies", "blogs", "contact"];
import { Unbounded } from "next/font/google";
const geistSans = Unbounded({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Unbounded({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const handleScroll = (section_id: string) => {
  const element = document.getElementById(section_id);
  element?.scrollIntoView({
    behavior: "smooth",
  });
};
export default function Footer() {
  return (
    <footer
      className={`w-full bg-neutral-900 text-neutral-300 rounded-t-3xl ${geistMono.className} ${geistSans.className}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Lets Connect <br /> there
          </h2>

          <Button size="lg" className="rounded-full px-6">
            Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Separator className="my-10 bg-neutral-700" />

        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <div className="flex gap-4 text-neutral-400">
              <Link href="https://www.threads.com/@mindsetpsychology4" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-white rounded" viewBox="0 0 24 24" fill="#000000"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" color="currentColor"/></svg>
              </Link>
              <Link href="https://www.linkedin.com/in/shruti-sharma-b21287263" target="_blank">
                <Linkedin className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
              <Link href="https://www.instagram.com/mindsetpsychology4" target="_blank">
                <Instagram className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
              <Link href="https://www.youtube.com/@psychologymindset-z9j" target="_blank">
                <Youtube className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
            </div>
          </div>

          {/* Navigation & Contact */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="mb-4 font-semibold text-primary">Navigation</h4>
              <ul className="space-y-2">
                {LINKS.map((item) => (
                  <li
                    key={item}
                    onClick={()=>handleScroll(item)}
                    className="hover:text-white capitalize transition cursor-pointer"
                  >
                    {item.replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-orange-400">Contact</h4>
              <ul className="space-y-2 text-neutral-400">
                <li className="break-words">+91 7738443636</li>
                <li className="break-words">Jaycreo36@gmail.com</li>
                <li className="break-words">Portfolio-jcreo.com</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-orange-400">
              Get the latest information
            </h4>

            <div className="flex rounded-lg overflow-hidden bg-white">
              <Input
                placeholder="Email Address"
                className="border-none rounded-none focus-visible:ring-0"
              />
              <Button className="rounded-none px-5">
                <SendHorizonal className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-neutral-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-neutral-400 gap-4">
          <p>Copyright © 2026 Arinova Studio. All Rights Reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              User Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
