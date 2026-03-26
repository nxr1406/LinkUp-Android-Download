import { Info, Box, HardDrive, Building2, Calendar, Smartphone } from "lucide-react"

const appInfo = [
  {
    icon: Info,
    label: "App Name",
    value: "LinkUp",
  },
  {
    icon: Box,
    label: "Version",
    value: "1.0.0",
  },
  {
    icon: HardDrive,
    label: "Size",
    value: "6.7 MB",
  },
  {
    icon: Building2,
    label: "Developer",
    value: "LinkUp Inc.",
  },
  {
    icon: Calendar,
    label: "Updated",
    value: "March 2026",
  },
  {
    icon: Smartphone,
    label: "Platform",
    value: "Android",
  },
]

export function AppInfoSection() {
  return (
    <section className="bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-linkup-text md:text-3xl lg:text-4xl">
            App Information
          </h2>
          <p className="text-linkup-secondary md:text-lg">
            Technical details about LinkUp
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-linkup-border bg-white shadow-sm">
          <div className="grid divide-y divide-linkup-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {appInfo.slice(0, 2).map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-5">
                <div className="rounded-xl bg-linkup-accent/10 p-3">
                  <item.icon className="h-5 w-5 text-linkup-accent" />
                </div>
                <div>
                  <p className="text-sm text-linkup-secondary">{item.label}</p>
                  <p className="font-semibold text-linkup-text">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid divide-y divide-linkup-border border-t border-linkup-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {appInfo.slice(2, 4).map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-5">
                <div className="rounded-xl bg-linkup-accent/10 p-3">
                  <item.icon className="h-5 w-5 text-linkup-accent" />
                </div>
                <div>
                  <p className="text-sm text-linkup-secondary">{item.label}</p>
                  <p className="font-semibold text-linkup-text">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid divide-y divide-linkup-border border-t border-linkup-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {appInfo.slice(4, 6).map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-5">
                <div className="rounded-xl bg-linkup-accent/10 p-3">
                  <item.icon className="h-5 w-5 text-linkup-accent" />
                </div>
                <div>
                  <p className="text-sm text-linkup-secondary">{item.label}</p>
                  <p className="font-semibold text-linkup-text">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
