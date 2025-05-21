"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
// import { useEffect, useState } from "react";
import useScrollingEffect from "@/app/Hooks/useScrollingEffect";

const Header = () => {
  const scrollEffect = useScrollingEffect();

  return (
    <header
      className={`w-full fixed z-50 px-6 py-4 flex items-center justify-between ${
        scrollEffect ? "bg-purple-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="/features" className="hover:text-black transition">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-black transition">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden md:inline">
          Login
        </Button>
        <Button>Get Started</Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
