import { MessageCircle, Circle, Users, Heart, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Real-time Messaging",
    description: "Send and receive messages instantly with lightning-fast delivery",
  },
  {
    icon: Circle,
    title: "Typing Indicator",
    description: "See when your friends are typing a response in real-time",
  },
  {
    icon: Users,
    title: "Online Status",
    description: "Know when your contacts are online and available to chat",
  },
  {
    icon: Heart,
    title: "Reactions",
    description: "Express yourself with quick emoji reactions to any message",
  },
  {
    icon: Clock,
    title: "Disappearing Messages",
    description: "24-hour disappearing messages for private conversations",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Your account is protected with industry-standard security",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-linkup-text md:text-3xl lg:text-4xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl text-linkup-secondary md:text-lg">
            Everything you need for seamless communication
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-linkup-border bg-white p-6 transition-all duration-300 hover:border-linkup-accent/20 hover:shadow-lg hover:shadow-linkup-accent/5"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-linkup-accent/10 p-3 transition-colors group-hover:bg-linkup-accent/20">
                <feature.icon className="h-6 w-6 text-linkup-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-linkup-text">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-linkup-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
