import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export function TermsNotice() {
  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-amber-100 p-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-amber-900">
                Important Notice
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-amber-800">
                Please read our Terms and Conditions before downloading and using LinkUp. By downloading, you agree to our terms of service and privacy policy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-amber-700 underline decoration-amber-300 underline-offset-2 transition-colors hover:text-amber-900 hover:decoration-amber-500"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm font-medium text-amber-700 underline decoration-amber-300 underline-offset-2 transition-colors hover:text-amber-900 hover:decoration-amber-500"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
