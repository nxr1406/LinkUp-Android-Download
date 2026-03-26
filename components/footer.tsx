import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-linkup-border bg-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-linkup-accent to-blue-600">
              <MessageCircle className="h-5 w-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-xl font-bold text-linkup-text">LinkUp</span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            <Link
              href="/privacy"
              className="text-sm text-linkup-secondary transition-colors hover:text-linkup-text"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-linkup-secondary transition-colors hover:text-linkup-text"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-sm text-linkup-secondary transition-colors hover:text-linkup-text"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-center text-sm text-linkup-secondary">
            &copy; {currentYear} LinkUp Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
