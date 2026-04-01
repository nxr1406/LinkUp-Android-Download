import { Download, Smartphone } from "lucide-react"

export function DownloadSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex rounded-full bg-linkup-accent/10 p-4">
          <Smartphone className="h-10 w-10 text-linkup-accent" />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-linkup-text md:text-3xl lg:text-4xl">
          Ready to Connect?
        </h2>
        <p className="mb-8 text-linkup-secondary md:text-lg">
          Download LinkUp now and start messaging with your friends
        </p>

        <a
          href="/LinkUp_v2.1.apk"
          download
          className="group inline-flex items-center gap-3 rounded-full bg-linkup-accent px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-linkup-accent/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-linkup-accent/40 active:scale-95"
        >
          <Download className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" />
          Download LinkUp for Android
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-linkup-secondary">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Version: 1.0.0
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-linkup-accent" />
            Size: 6.7 MB
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Requires Android 7+
          </span>
        </div>
      </div>
    </section>
  )
}
