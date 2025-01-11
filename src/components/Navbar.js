"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { name: "Camera Test", href: "/" },
    { name: "Microphone Test", href: "/mic-test" },
    { name: "Speakers Test", href: "/speakers-test" },
    { name: "True Mirror", href: "/true-mirror-online" },
  ];

  const instructionsItem = { name: "Guides", href: "/guides" };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-lg shadow-blue-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">
                <Image
                  alt="later on"
                  src={"/logo2.png"}
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 justify-center w-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${pathname === item.href
                      ? "border-b-blue-400 text-blue-500"
                      : "border-transparent text-black hover:border-blue-500 hover:text-blue-500"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex">
            <Link
              href={instructionsItem.href}
              className={`${pathname === instructionsItem.href
                  ? "border-b-blue-400 text-blue-500"
                  : "border-transparent text-black hover:border-blue-500 hover:text-blue-500"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
            >
              {instructionsItem.name}
            </Link>
          </div>
          <div className="flex -mr-2 sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center hover:text-white p-2 text-gray-400 before: hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                  className={`${pathname === item.href
                      ? "border-b-blue-400 text-blue-500"
                      : "border-transparent text-black hover:border-blue-500 hover:text-blue-500"
                    } block px-3 py-2 text-base font-medium border-b-2`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={instructionsItem.href}
                className={`${pathname === instructionsItem.href
                    ? "border-b-blue-400 text-blue-500"
                    : "border-transparent text-black hover:border-blue-500 hover:text-blue-500"
                  } block px-3 py-2 text-base font-medium border-b-2`}
              >
                {instructionsItem.name}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
