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
} from "lucide-react";
const LINKS = ["Home", "About Us", "Service", "Resume", "Project"];
export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 rounded-t-3xl">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Lets Connect <br /> there
          </h2>

          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
          >
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
              <Link href="#">
                <Facebook className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
              <Link href="#">
                <Twitter className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
              <Link href="#">
                <Linkedin className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
              <Link href="#">
                <Github className="bg-white text-gray-800 hover:text-gray-900 text-lg! rounded p-1" />
              </Link>
            </div>
          </div>

          {/* Navigation & Contact */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="mb-4 font-semibold text-orange-400">Navigation</h4>
              <ul className="space-y-2">
                {LINKS.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-orange-400">Contact</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>+91 7738443636</li>
                <li>Jaycreo36@gmail.com</li>
                <li>Portfolio-jcreo.com</li>
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
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-none px-5">
                <SendHorizonal className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-neutral-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-neutral-400 gap-4">
          <p>Copyright © 2023 Jayesh. All Rights Reserved.</p>

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
