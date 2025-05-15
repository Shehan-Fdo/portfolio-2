// src/app/components/Header.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// No longer need to import Header.module.css

const Header = () => {
  const pathname = usePathname();

const blueColor = "#583EBC"
const navLinkBaseClasses = "mr-4xl no-underline py-2.5 px-4 rounded-3xl transition-colors duration-200 ease-in-out";
const navLinkHoverClasses = "hover:bg-purple-500 hover:text-white";
const activeLinkClasses = "bg-white py font-bold text-[#333333]";
const inactiveTextColor = "text-white";

  return (
    
  <header className="absolute top-0 left-0 w-full bg-transparent mt-10 flex justify-center">

      <nav className="flex justify-between items-center w-full max-w-screen-xl"> {/* max-w-screen-xl is 1280px, close to 1200px */}

        <ul className="flex list-none gap-10 items-center bg-purple-600 rounded-4xl py-5 px-4.5 mx-auto drop-shadow-lg">
          <li>
            <Link
              href="/"
              className={`${navLinkBaseClasses} ${pathname === "/" ? activeLinkClasses : `${inactiveTextColor} ${navLinkHoverClasses}`}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${navLinkBaseClasses} ${pathname === "/about" ? activeLinkClasses : `${inactiveTextColor} ${navLinkHoverClasses}`}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`${navLinkBaseClasses} ${pathname === "/services" ? activeLinkClasses : `${inactiveTextColor} ${navLinkHoverClasses}`}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${navLinkBaseClasses} ${pathname === "/contact" ? activeLinkClasses : `${inactiveTextColor} ${navLinkHoverClasses}`}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;