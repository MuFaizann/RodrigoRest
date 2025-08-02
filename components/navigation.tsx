"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximately 100vh)
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > heroHeight * 0.8) // Start transition when 80% down the hero
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Location" },
    { href: "/order", label: "Order Online" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-lg p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/RodrigosLog.avif"
                  alt="Rodrigos Taco Shop Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-white">Rodrigos</div>
              <div className="text-sm text-orange-300 font-medium -mt-1">Taco Shop</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-medium text-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-colors">
              <Link href="/order" className="flex items-center space-x-2">
                <span>Order Now!</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-gray-800 text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-orange-600 to-orange-700 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 mb-3">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">(918) 605-5061</span>
                </div>
                <Button className="btn-restaurant w-full mx-4">
                  <Link href="/order">Order Now!</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
