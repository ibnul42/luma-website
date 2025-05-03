"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#service" },
  { label: "Faq", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle the menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close the menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-3 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Luma</Link>
        </div>

        {/* Menu Button + Dropdown Wrapper */}
        <div className="relative" ref={menuRef}>
          {" "}
          {/* Attach the ref here */}
          {/* Menu Button */}
          <div className="space-y-1.5 cursor-pointer" onClick={toggleMenu}>
            <div
              className={`flex gap-1.5 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            >
              <div
                className={`w-[3px] rounded-full bg-white transition-all duration-150 ${
                  isMenuOpen ? "translate-x-[9px] h-0.5" : "h-[3px]"
                }`}
              ></div>
              <div
                className={`w-8 ${
                  isMenuOpen ? "h-0.5" : "h-[3px]"
                } rounded-full bg-white`}
              ></div>
            </div>
            <div
              className={`flex gap-1.5 transition-transform duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
              <div className="w-7 h-[3px] rounded-full bg-white"></div>
            </div>
            <div
              className={`flex gap-1.5 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            >
              <div
                className={`w-[3px] rounded-full bg-white transition-all duration-150 ${
                  isMenuOpen ? "translate-x-[9px] h-0.5" : "h-[3px]"
                }`}
              ></div>
              <div
                className={`w-8 ${
                  isMenuOpen ? "h-0.5" : "h-[3px]"
                } rounded-full bg-white`}
              ></div>
            </div>
          </div>
          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-72 rounded-xl shadow-lg bg-white/10 backdrop-blur-md z-50 transition-transform duration-500 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-[100vh]"
            }`}
          >
            <nav className="flex flex-col space-y-5 p-4 text-2xl font-normal">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="group relative inline-block text-white/90 hover:text-white overflow-hidden py-1"
                >
                  <span className="block transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
                    {label}
                  </span>
                  <span className="absolute left-0 top-[-80%] block transition-all duration-500 group-hover:translate-y-full group-hover:opacity-100">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
