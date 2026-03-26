"use client"

import { Download, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* App Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-linkup-accent to-blue-600 shadow-lg shadow-linkup-accent/30 transition-transform duration-300 hover:scale-105 md:h-32 md:w-32 md:rounded-[32px]">
              <MessageCircle className="h-14 w-14 text-white md:h-16 md:w-16" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 ring-4 ring-white">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-linkup-text md:text-5xl lg:text-6xl">
          LinkUp
        </h1>

        {/* Tagline */}
        <p className="mb-4 text-xl font-medium text-linkup-accent md:text-2xl">
          Connect Instantly
        </p>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-linkup-secondary md:text-lg">
          Experience seamless messaging with LinkUp. Fast, secure, and beautifully designed for meaningful conversations.
        </p>

        {/* Download Button */}
        <a
          href="/LinkUp_v1.0.apk"
          download
          className="group inline-flex items-center gap-3 rounded-full bg-linkup-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-linkup-accent/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-linkup-accent/40 active:scale-95 md:text-lg"
        >
          <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
          Download for Android
        </a>

        {/* Version & Size Info */}
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-linkup-secondary">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-linkup-secondary/50" />
            Version 1.0.0
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-linkup-secondary/50" />
            6.7 MB
          </span>
        </div>
      </div>
    </section>
  )
}
