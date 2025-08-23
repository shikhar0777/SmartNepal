"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#focus-areas", label: "Focus Areas" },
    { href: "#projects", label: "Projects" },
    { href: "#mentors", label: "Mentors" },
    { href: "#join", label: "Join Us" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Q-SMART-E Logo"
          className="h-24 w-42 object-contain mr-2"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-base text-gray-700 font-semibold hover:text-qsmart-dark-blue transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden mt-4 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
