"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const screenshots = [
  { id: 1, src: "/screenshots/skin1.png", alt: "LinkUp Screenshot 1" },
  { id: 2, src: "/screenshots/skin2.png", alt: "LinkUp Screenshot 2" },
  { id: 3, src: "/screenshots/skin3.png", alt: "LinkUp Screenshot 3" },
  { id: 4, src: "/screenshots/skin4.png", alt: "LinkUp Screenshot 4" },
]

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-2 flex-shrink-0">
      {/* Phone Frame */}
      <div className="relative h-[420px] w-[200px] overflow-hidden rounded-[36px] border-[10px] border-linkup-text bg-linkup-text shadow-xl md:h-[480px] md:w-[230px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-1 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-linkup-text" />
        {/* Screen */}
        <div className="h-full w-full overflow-hidden rounded-[26px] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 230px"
          />
        </div>
      </div>
    </div>
  )
}

export function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 260
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-linkup-text md:text-3xl lg:text-4xl">
            Beautiful Interface
          </h2>
          <p className="text-linkup-secondary md:text-lg">
            Designed for the best messaging experience
          </p>
        </div>

        {/* Screenshots Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-linkup-text" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-linkup-text" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 pt-4 md:justify-center"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {screenshots.map((screenshot) => (
              <PhoneMockup key={screenshot.id} src={screenshot.src} alt={screenshot.alt} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {screenshots.map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-linkup-secondary/30" />
          ))}
        </div>
      </div>
    </section>
  )
}
