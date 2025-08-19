import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Certified" width={40} height={40} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Since 1972</h4>
                  <span className="text-muted-foreground">1972-2025</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enquiry</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <a href="tel:+237677737328" className="hover:text-primary">
                          +237 677 73 73 28
                        </a>
                        <p className="text-sm text-muted-foreground">Mobile</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <a href="tel:+237233362590" className="hover:text-primary">
                          +237 233 36 25 90
                        </a>
                        <p className="text-sm text-muted-foreground">Corporate</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Banking Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p>8.00am to 4.00pm</p>
                        <p className="text-sm text-muted-foreground">Mon - Friday</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p>8.00am to 2.00pm</p>
                        <p className="text-sm text-muted-foreground">Saturday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-semibold">
                      <a href="mailto:info@ntaccul.org" className="hover:text-primary">
                        info@ntaccul.org
                      </a>
                    </h4>
                    <p className="text-sm text-muted-foreground">Send your queries.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Our Bank Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Bank</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/credit-card" className="hover:text-primary transition-colors">
                    NtaCCUL Card
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-6 mt-8">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/leadership" className="hover:text-primary transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/trade-fx" className="hover:text-primary transition-colors">
                    NtaCCUL Card
                  </Link>
                </li>
                <li>
                  <Link href="/vehicle-loan" className="hover:text-primary transition-colors">
                    Vehicle Loan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about-us" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/all-cards" className="hover:text-primary transition-colors">
                    Agricultural Loans
                  </Link>
                </li>
                <li>
                  <Link href="/business-account" className="hover:text-primary transition-colors">
                    Savings
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/debit-card" className="hover:text-primary transition-colors">
                    NtaCCUL Card
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center space-x-3 text-center">
              <MapPin className="w-5 h-5 text-primary" />
              <Link href="#" className="hover:text-primary">
                Branches & ATMs
              </Link>
            </div>
            <div className="flex items-center space-x-3 text-center">
              <Mail className="w-5 h-5 text-primary" />
              <Link href="#" className="hover:text-primary">
                Complaint Registration
              </Link>
            </div>
            <div className="flex items-center space-x-3 text-center">
              <ArrowRight className="w-5 h-5 text-primary" />
              <Link href="#" className="hover:text-primary">
                Download Forms
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">Follow Us On</div>

            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="NtaCCUL"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-primary">
                Disclaimer
              </Link>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-slate-800">
            <p className="text-sm text-muted-foreground">Copyright © 2025 NtaCCUL. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
