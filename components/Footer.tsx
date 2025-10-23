import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#194C4D] text-white py-12 dark:bg-[#194C4D]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Encora</h3>
            <p className="text-[#6CC7A1] font-light">Smart Return Infrastructure Platform</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-[#6CC7A1] font-light">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-[#6CC7A1] font-light">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#6CC7A1] font-light">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6CC7A1] pt-8 flex flex-wrap justify-between items-center">
          <p className="text-[#6CC7A1] font-light">&copy; {currentYear} Encora. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" aria-label="Facebook" className="text-[#6CC7A1] hover:text-white transition">
              <AiOutlineFacebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#6CC7A1] hover:text-white transition">
              <AiOutlineLinkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#6CC7A1] hover:text-white transition">
              <AiOutlineInstagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X (formerly Twitter)" className="text-[#6CC7A1] hover:text-white transition">
              <AiOutlineX className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-[#6CC7A1] hover:text-white transition">
              <AiOutlineGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
