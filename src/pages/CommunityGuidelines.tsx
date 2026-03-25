import { motion } from 'motion/react';
import { Users, AlertTriangle, HeartHandshake, ShieldAlert, BadgeCheck } from 'lucide-react';

export function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Guidelines</h1>
          <p className="text-muted-foreground">Building a safe and respectful environment for everyone.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <p className="text-lg leading-relaxed mb-12 text-foreground/90 text-center max-w-2xl mx-auto">
            LinkUp is a place for private, ephemeral conversations. To ensure everyone feels safe and welcome, we ask all users to adhere to these core principles.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <HeartHandshake className="w-10 h-10 text-green-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Be Respectful</h3>
              <p className="text-muted-foreground leading-relaxed">
                Treat others with kindness. Harassment, bullying, hate speech, and discrimination of any kind are strictly prohibited. We have zero tolerance for abusive behavior.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <ShieldAlert className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">No Illegal Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Do not use LinkUp to share, promote, or facilitate illegal activities. This includes but is not limited to the sale of illegal goods, fraud, or sharing explicit content involving minors.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <AlertTriangle className="w-10 h-10 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">No Spam or Scams</h3>
              <p className="text-muted-foreground leading-relaxed">
                Do not use our platform to send unsolicited promotional messages, phishing links, or engage in deceptive practices designed to trick other users.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <BadgeCheck className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                While you don't need to use your real name, do not impersonate other individuals, brands, or organizations in a misleading or deceptive manner.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center">
            <h3 className="text-lg font-semibold mb-2">Reporting Violations</h3>
            <p className="text-muted-foreground mb-4">
              If you encounter behavior that violates these guidelines, please report the user immediately. While messages disappear after 24 hours, we investigate all reports seriously.
            </p>
            <a href="mailto:safety@linkup.app" className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Contact Trust & Safety
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
