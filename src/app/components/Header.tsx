"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Recipes', href: '/recipes' },
    { label: 'Story', href: '/story' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary border-b-2 border-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <img
              src="/Logo.png"
              alt="Jollof Factory Logo"
              className="h-10 md:h-12 w-auto object-contain hover:-rotate-2 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-bold text-dark hover:text-primary transition-colors uppercase tracking-wider font-display"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button size="md" variant="dark">Get The Sauce</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark p-2 border-2 border-dark bg-white shadow-neo active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-b-2 border-dark p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-center">
            <Link
              href="/#shop"
              className="text-2xl font-black text-dark hover:text-white hover:stroke-dark transition-colors uppercase tracking-widest font-display"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-2xl font-black text-dark hover:text-white hover:stroke-dark transition-colors uppercase tracking-widest font-display"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button size="lg" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Get The Sauce</Button>
        </div>
      )}
    </header>
  );
};