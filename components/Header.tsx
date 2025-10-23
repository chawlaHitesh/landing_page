import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#194C4D] shadow-sm dark:border-b dark:border-[#6CC7A1]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-[#194C4D] dark:text-white">Encora</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="text-sm text-[#1F1F1F] dark:text-white px-4 py-2 rounded-md hover:bg-[#F8F9F8] dark:hover:bg-[#6CC7A1] dark:hover:text-[#194C4D] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-[#1F1F1F] dark:text-white px-4 py-2 rounded-md hover:bg-[#F8F9F8] dark:hover:bg-[#6CC7A1] dark:hover:text-[#194C4D] transition-colors"
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
