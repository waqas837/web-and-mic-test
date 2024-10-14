"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Camera Test", href: "/" },
    { name: "Microphone Test", href: "/microphone-test" },
    { name: "Speakers Test", href: "/speakers-test" },
    { name: "True mirror", href: "/true-mirror-online" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <footer className="bg-gray-200 text-gray-800 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">
                WebcamTest
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    router.pathname === item.href
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-auto">
            <Link
              href="/reviews"
              className="text-gray-500 hover:text-gray-700 text-sm font-medium"
            >
              Reviews
            </Link>
          </div>
          <div className="flex -mr-2 sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`${
                    router.pathname === item.href
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  } block px-3 py-2 text-base font-medium border-b-2`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/reviews"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700"
              >
                Reviews
              </Link>
            </div>
          </div>
        )}
      </nav>
    </footer>
  );
};

export default Footer;
