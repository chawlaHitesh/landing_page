import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function Header() {
  return (
    <header className="bg-white dark:bg-encora-green shadow-sm dark:border-b dark:border-encora-mint sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-encora-green/95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-encora-green dark:text-white tracking-tight hover:text-encora-green-dark transition-colors">
            Encora
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-2">
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
                href="/contact"
                className="text-sm text-encora-text dark:text-white px-4 py-2 rounded-lg hover:bg-encora-gray dark:hover:bg-encora-mint dark:hover:text-encora-green transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  )
}