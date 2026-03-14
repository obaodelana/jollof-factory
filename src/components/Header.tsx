import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Recipes", href: "/recipes" },
    { label: "About", href: "/story" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary border-b-2 border-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img
              src="/Logo.png"
              alt="Jollof Factory Logo"
              className="h-10 md:h-12 w-auto object-contain hover:-rotate-2 transition-transform"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-bold text-dark hover:text-primary transition-colors uppercase tracking-wider font-display"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#shop"
            className="inline-flex items-center justify-center font-display uppercase tracking-wider border-2 border-dark transition-all duration-200 focus:outline-none bg-dark text-white shadow-neo hover:bg-gray-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(18,18,18,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none text-sm px-6 py-3"
          >
            Get The Sauce
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark p-2 border-2 border-dark bg-white shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-b-2 border-dark p-6 flex flex-col gap-6 shadow-xl">
          <nav className="flex flex-col gap-4 text-center">
            <a
              href="/#shop"
              className="text-2xl font-black text-dark hover:text-white hover:stroke-dark transition-colors uppercase tracking-widest font-display"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </a>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-black text-dark hover:text-white hover:stroke-dark transition-colors uppercase tracking-widest font-display"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center font-display uppercase tracking-wider border-2 border-dark transition-all duration-200 focus:outline-none bg-primary text-white shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(18,18,18,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none text-base md:text-lg px-8 py-4"
          >
            Get The Sauce
          </a>
        </div>
      )}
    </header>
  );
}
