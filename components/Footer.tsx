import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-encora-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Encora</h3>
            <p className="text-encora-mint font-light">Smart Return Infrastructure Platform</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-encora-mint font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-encora-mint font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-encora-mint font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-encora-mint pt-8 flex flex-wrap justify-between items-center">
          <p className="text-encora-mint font-light">&copy; {currentYear} Encora. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" aria-label="Facebook" className="text-encora-mint hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <AiOutlineFacebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-encora-mint hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <AiOutlineLinkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-encora-mint hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <AiOutlineInstagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X (formerly Twitter)" className="text-encora-mint hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <AiOutlineX className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-encora-mint hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <AiOutlineGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer