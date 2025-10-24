"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import ThemeSwitch from "./ThemeSwitch"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])
  return (
    <header className="bg-white dark:bg-encora-green shadow-sm dark:border-b dark:border-encora-mint sticky top-0 z-[1000] backdrop-blur-sm bg-white/95 dark:bg-encora-green/95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-encora-green dark:text-white tracking-tight hover:text-encora-green-dark transition-colors"
        >
          Encora
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-2">
            <li>
              <Link
                href="/"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Home
              </Link>
            </li>
             <li>
              <Link
                href="/solution"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/encora-reuse"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Encora Reuse
              </Link>
            </li>
             <li>
              <Link
                href="/encora-access"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Encora Access
              </Link>
            </li>
            <li>
              <Link
                href="/blog-doc"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
               Blog/Docs
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeSwitch />
          <button
            onClick={() => setIsOpen(true)}
            className="text-encora-green dark:text-white focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Overlay (dark background behind drawer) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[9998] md:hidden"
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-encora-green shadow-xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-[9999] md:hidden h-full`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200 dark:border-encora-mint/20">
          <span className="text-lg font-bold text-encora-green dark:text-white">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-encora-green dark:text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col mt-4 space-y-2 px-4">
           <li>
              <Link
                href="/"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Home
              </Link>
            </li>
             <li>
              <Link
                href="/solution"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/encora-reuse"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Encora Reuse
              </Link>
            </li>
             <li>
              <Link
                href="/encora-access"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Encora Access
              </Link>
            </li>
            <li>
              <Link
                href="/blog-doc"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
               Blog/Docs
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </li>
        </ul>
      </div>
    </header>
  )
}
