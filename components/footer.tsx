import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="restaurant-divider"></div>

      {/* Main footer content */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="restaurant-pattern h-full w-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Rodrigos Taco Shop</h3>
                  <p className="text-gray-400 text-sm">Authentic Mexican Cuisine</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience authentic Mexican tacos and traditional cuisine prepared with fresh ingredients and family
                recipes in the heart of Tulsa, Oklahoma.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <div className="font-medium">1956 S Garnett Rd</div>
                    <div>Tulsa, OK 74128</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <a href="tel:+19186055061" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                    (918) 605-5061
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <div>Sun-Thu: 7 AM - 12 AM</div>
                    <div>Fri-Sat: 7 AM - 2 AM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="/menu"
                  className="block text-gray-300 hover:text-red-400 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  → Our Menu
                </Link>
                <Link
                  href="/gallery"
                  className="block text-gray-300 hover:text-red-400 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  → Photo Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-300 hover:text-red-400 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  → Location & Contact
                </Link>
                <Link
                  href="/order"
                  className="block text-gray-300 hover:text-red-400 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  → Order Online
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2024 Rodrigos Taco Shop. All rights reserved.</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ in Tulsa, OK</span>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Open Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
