import Link from "next/link"
import { Linkedin, Instagram, Mail } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-black text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-xl font-bold text-white flex items-center mb-4">
              <Logo width={16} height={16} className="text-white [&>span]:text-white" />
            </Link>
            <p className="text-sm text-slate-400">
              <strong>Human + Machine</strong> staffing.
            </p>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/smb" className="text-slate-400 hover:text-white transition-colors">
                  SMB
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-slate-400 hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/solutions/consulting" className="text-slate-400 hover:text-white transition-colors">
                  Staffing
                </Link>
                <ul className="mt-2 ml-3 space-y-2">
                  <li>
                    <Link href="/solutions/consulting/fractional" className="text-slate-400 hover:text-white transition-colors">
                      Hire Talent
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/hire" className="text-slate-400 hover:text-white transition-colors">
                  Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company/aboutus" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/methodology" className="text-slate-400 hover:text-white transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/company/jofrom" className="text-slate-400 hover:text-white transition-colors">
                  The Tech
                </Link>
              </li>
              <li>
                <Link href="/resources/strategy-document" className="text-slate-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section with Icons */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.linkedin.com/company/jofrom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm">LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/jofrom.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
                  <span className="text-sm">Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/J0from"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  aria-label="Follow us on X (formerly Twitter)"
                >
                  <svg
                    className="w-5 h-5 fill-current group-hover:text-slate-200 transition-colors"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-sm">Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  aria-label="Contact Us"
                >
                  <Mail className="w-5 h-5 group-hover:text-blue-300 transition-colors" />
                  <span className="text-sm">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2026 J0 from Corp. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-slate-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
