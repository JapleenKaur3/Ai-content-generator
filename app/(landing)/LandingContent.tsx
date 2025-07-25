"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function LandingContent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800 dark:text-white">CogniText</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="w-5 h-5 text-gray-800" /> : <Sun className="w-5 h-5 text-white" />}
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative">
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Create Smarter with <span className="text-primary">AI</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          CogniText helps you craft content faster, better, and effortlessly.
        </p>
        <Link href="/sign-in">
          <Button className="text-lg px-8 py-4">Start Creating →</Button>
        </Link>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI That Understands You",
              desc: "Context-aware suggestions tailored to your writing needs.",
            },
            {
              title: "Customizable Templates",
              desc: "Write blogs, posts, or emails with reusable templates.",
            },
            {
              title: "Fast & Free",
              desc: "Instant results. No limits. No cost. Just creativity.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center"
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} CogniText. All rights reserved.
      </footer>
    </div>
  );
}
