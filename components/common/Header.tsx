"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, MoonStar, Sun } from "lucide-react";
import useScrollingEffect from "@/app/Hooks/useScrollingEffect";
import useModeToggler from "@/app/Hooks/useModeToggler";
// import ThemeToggle from "@/theme/theme-toggle";

const Header = () => {
  const scrollEffect = useScrollingEffect();
  const { modeToggler, changedMood } = useModeToggler();

  return (
    <header
      className={`w-full fixed z-50 px-6 py-4 flex items-center justify-between ${
        scrollEffect
          ? "bg-purple-100 shadow-md dark:bg-pink-50"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className={`text-xl font-bold ${
            scrollEffect ? "text-purple-950" : ""
          }`}
        >
          Logo
        </Link>
        <nav
          className={`hidden md:flex gap-6 text-sm font-semibold ${
            scrollEffect
              ? "text-gray-700 dark:text-purple-900"
              : "text-gray-700 dark:text-pink-100"
          }`}
        >
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
        <Button
          onClick={modeToggler}
          variant={"outline"}
          className={`flex  border-none ${
            scrollEffect
              ? "bg-purple-100 hover:bg-purple-100 dark:text-purple-100"
              : "bg-transparent hover:bg-transparent hover:text-purple-950"
          }`}
        >
          {changedMood === "light" ? (
            <MoonStar className="text-orange-600 shadow-none border-none" />
          ) : (
            <Sun className="text-orange-600 shadow-none border-none" />
          )}
        </Button>
        <Button
          variant="ghost"
          className={`hidden md:inline ${
            scrollEffect ? "bg-purple-100 dark:bg-purple-900" : ""
          }`}
        >
          Login
        </Button>
        <Button>Get Started</Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu
            className={`h-5 w-5 ${scrollEffect ? "text-purple-950" : ""}`}
          />
        </Button>
      </div>
    </header>
  );
};

export default Header;
