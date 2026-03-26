import { HeroSection } from "@/components/hero-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { FeaturesSection } from "@/components/features-section"
import { AppInfoSection } from "@/components/app-info-section"
import { DownloadSection } from "@/components/download-section"
import { TermsNotice } from "@/components/terms-notice"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-linkup-bg">
      <HeroSection />
      <ScreenshotsSection />
      <FeaturesSection />
      <AppInfoSection />
      <DownloadSection />
      <TermsNotice />
      <Footer />
    </main>
  )
}
