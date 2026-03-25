import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  UserSearch, 
  Smile, 
  Edit3, 
  Gift, 
  UserPlus, 
  Search, 
  MessageCircle, 
  Lock, 
  Download, 
  Smartphone,
  ChevronRight
} from 'lucide-react';

const LinkUpDown = '/LinkUp_1.0.apk';

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                v1.0.0 Now Available
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Chat Privately. <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Messages disappear
                </span>
                <br className="hidden lg:block" /> in 24 hours.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
                Experience true privacy with LinkUp. No phone numbers required, just pick a username and start chatting securely.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#download"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Download APK
                </a>
                <a 
                  href="#features"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-foreground font-semibold text-lg border-2 border-border hover:border-primary/50 hover:bg-muted transition-all flex items-center justify-center gap-2"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[320px] lg:max-w-[400px]"
            >
              {/* Floating Bubbles */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-12 top-20 bg-card p-4 rounded-2xl shadow-xl border border-border/50 backdrop-blur-sm z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-primary" />
                  <div className="h-2 w-16 bg-muted rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-32 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">Auto-deleted</span>
                </div>
              </motion.div>

              {/* Phone Frame */}
              <div className="relative z-10 rounded-[2.5rem] border-[8px] border-foreground/10 bg-background shadow-2xl overflow-hidden aspect-[9/19]">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-foreground/10 rounded-b-3xl w-1/2 mx-auto" />
                
                {/* Screen Content */}
                <div className="h-full w-full bg-muted/30 flex flex-col pt-12 pb-6 px-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-primary" />
                      <div>
                        <div className="h-3 w-24 bg-foreground/20 rounded-full mb-2" />
                        <div className="h-2 w-16 bg-primary/40 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="self-start max-w-[80%] bg-card border border-border p-3 rounded-2xl rounded-tl-sm shadow-sm">
                      <div className="h-2 w-32 bg-foreground/20 rounded-full mb-2" />
                      <div className="h-2 w-20 bg-foreground/20 rounded-full" />
                    </div>
                    <div className="self-end max-w-[80%] bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm shadow-sm">
                      <div className="h-2 w-28 bg-primary-foreground/80 rounded-full mb-2" />
                      <div className="h-2 w-24 bg-primary-foreground/80 rounded-full" />
                    </div>
                    <div className="self-start max-w-[80%] bg-card border border-border p-3 rounded-2xl rounded-tl-sm shadow-sm">
                      <div className="h-2 w-36 bg-foreground/20 rounded-full" />
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="mt-auto h-12 bg-card border border-border rounded-full flex items-center px-4">
                    <div className="h-2 w-32 bg-muted-foreground/30 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why LinkUp?</h2>
            <p className="text-lg text-muted-foreground">
              Built for privacy, designed for simplicity. Everything you need for secure conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                desc: "Messages auto-delete in 24 hours. No permanent records, ever."
              },
              {
                icon: Zap,
                title: "Real-time Chat",
                desc: "Lightning fast message delivery with typing indicators."
              },
              {
                icon: UserSearch,
                title: "Username Based",
                desc: "Find friends by username. Keep your phone number private."
              },
              {
                icon: Smile,
                title: "Reactions",
                desc: "Express yourself quickly with emoji reactions to any message."
              },
              {
                icon: Edit3,
                title: "Edit & Unsend",
                desc: "Made a typo? Edit or unsend messages with full control."
              },
              {
                icon: Gift,
                title: "Always Free",
                desc: "No ads, no subscriptions, no hidden fees. Just free chatting."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get started in seconds. No phone number required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-border via-primary/50 to-border" />

            {[
              {
                icon: UserPlus,
                step: "Step 1",
                title: "Create Account",
                desc: "Pick a unique username and a strong password."
              },
              {
                icon: Search,
                step: "Step 2",
                title: "Find Friends",
                desc: "Search for friends using their exact username."
              },
              {
                icon: MessageCircle,
                step: "Step 3",
                title: "Start Chatting",
                desc: "Send messages securely. They vanish in 24 hours."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 relative z-10 shadow-xl">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Your Privacy Matters</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We believe conversations should be ephemeral. That's why every message sent on LinkUp is automatically permanently deleted from our servers and devices after 24 hours.
              </p>
              <ul className="space-y-4">
                {[
                  "No phone number required",
                  "Messages auto-delete in 24h",
                  "No permanent chat history",
                  "End-to-end secure infrastructure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="w-3 h-3 text-primary-light" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-full h-full bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-full flex items-center justify-center shadow-2xl">
                  <Lock className="w-24 h-24 text-primary-light" />
                  
                  {/* Orbiting elements */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-slate-600/50"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(108,99,255,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-16 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden"
          >
            {/* Glassmorphism background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Download LinkUp</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the secure messaging revolution. Download the APK directly and start chatting privately today.
            </p>
            
            <a 
              href={LinkUpDown}
              download
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Download className="w-6 h-6" />
              Download APK
            </a>
            
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Version v1.0.0
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Size: ~15 MB
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500" /> Android 6.0+
              </span>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl inline-block text-left max-w-md mx-auto">
              <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium flex items-start gap-2">
                <Shield className="w-5 h-5 shrink-0" />
                <span>Note: You may need to enable "Install from unknown sources" in your Android settings to install the APK.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
