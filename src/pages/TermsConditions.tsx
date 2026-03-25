import { motion } from 'motion/react';
import { FileText, CheckCircle2 } from 'lucide-react';

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last Updated: March 25, 2025</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm prose prose-slate dark:prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed mb-8 text-foreground/90">
            Please read these terms and conditions carefully before using the LinkUp mobile application operated by LinkUp Inc.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using LinkUp, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                2. User Accounts
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                3. Acceptable Use
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate LinkUp, a LinkUp employee, another user, or any other person or entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                4. Ephemeral Messaging
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LinkUp is designed as an ephemeral messaging service. Messages are automatically deleted from our servers 24 hours after they are sent. We do not guarantee the permanent storage or retrieval of any messages sent through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                5. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
