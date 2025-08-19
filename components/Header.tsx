"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      {/* Header Top */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <Link href="/login" className="flex items-center space-x-2 hover:text-accent">
                  <Image
                    src="https://ntaccul.org/wp-content/themes/flexibank/assets/images/icons/icon-2.png"
                    alt="Login"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>Login</span>
                </Link>
                <Link href="/register" className="flex items-center space-x-2 hover:text-accent">
                  <Image
                    src="https://ntaccul.org/wp-content/themes/flexibank/assets/images/icons/icon-2.png"
                    alt="Register"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>Register</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="https://ntaccul.org/wp-content/themes/flexibank/assets/images/icons/icon-3.png"
                  alt="Email"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <a href="mailto:info@ntaccul.org" className="hover:text-accent">
                  info@ntaccul.org
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/careers" className="hover:text-accent">
                Careers
              </Link>
              <Link href="/faqs" className="hover:text-accent">
                FAQ's
              </Link>
              <Link href="/debit-card" className="hover:text-accent">
                NtaCCUL Card
              </Link>
              <Link href="/apply-now" className="hover:text-accent">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://ntaccul.org/wp-content/uploads/2025/04/NTACCUL-LOGO.jpg"
                alt="NtaCCUL Logo"
                width={300}
                height={95}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary font-medium">
                Home
              </Link>

              <div className="relative group">
                <button className="text-foreground hover:text-primary font-medium flex items-center">Services</button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                  <div className="space-y-2">
                    <Link href="/accounts" className="block hover:text-primary">
                      Accounts
                    </Link>
                    <Link href="/digital-services" className="block hover:text-primary">
                      Digital Services
                    </Link>
                    <Link href="/cards" className="block hover:text-primary">
                      Cards
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-foreground hover:text-primary font-medium">About</button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                  <div className="space-y-2">
                    <Link href="/about-us" className="block hover:text-primary">
                      About Us
                    </Link>
                    <Link href="/leadership" className="block hover:text-primary">
                      Leadership
                    </Link>
                    <Link href="/careers" className="block hover:text-primary">
                      Careers
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/apply-now" className="text-foreground hover:text-primary font-medium">
                Apply Now
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary font-medium">
                Get In Touch
              </Link>
              <Link href="/branch-code" className="text-foreground hover:text-primary font-medium">
                Branch Code
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center space-x-2 text-foreground hover:text-primary"
              >
                <Image
                  src="https://ntaccul.org/wp-content/themes/flexibank/assets/images/icons/icon-7.png"
                  alt="Search"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Search</span>
              </button>

              <div className="hidden lg:flex items-center space-x-2 text-foreground">
                <Image
                  src="https://ntaccul.org/wp-content/themes/flexibank/assets/images/icons/icon-8.png"
                  alt="Help"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <Link href="/contact" className="hover:text-primary">
                  Help
                </Link>
              </div>

              <Button asChild className="hidden lg:inline-flex">
                <Link href="/accounts">New Account</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden bg-white border-t fixed top-0 left-0 w-full h-full z-40 pt-20"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-4">
                  <Link href="/" className="block text-foreground hover:text-primary text-lg py-2">
                    Home
                  </Link>
                  <Link href="/services" className="block text-foreground hover:text-primary text-lg py-2">
                    Services
                  </Link>
                  <Link href="/about" className="block text-foreground hover:text-primary text-lg py-2">
                    About
                  </Link>
                  <Link href="/apply-now" className="block text-foreground hover:text-primary text-lg py-2">
                    Apply Now
                  </Link>
                  <Link href="/contact" className="block text-foreground hover:text-primary text-lg py-2">
                    Contact
                  </Link>
                  <Button asChild className="w-full mt-4">
                    <Link href="/accounts">New Account</Link>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <button onClick={() => setIsSearchOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your keyword and hit enter"
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
