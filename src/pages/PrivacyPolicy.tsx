import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, EyeOff, Clock, Trash2, FileText } from 'lucide-react';

export function PrivacyPolicy() {
  const [language, setLanguage] = useState<'English' | 'Bangla'>('English');

  const content = {
    English: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 25, 2025",
      intro: "Welcome to LinkUp. Your privacy is our top priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect minimal information to provide our service. This includes your chosen username and a securely hashed version of your password. We do not require or collect phone numbers, email addresses, or real names."
        },
        {
          title: "2. How We Use Your Information",
          content: "Your information is used solely to authenticate your account and facilitate message delivery. We do not use your data for targeted advertising or sell it to third parties."
        },
        {
          title: "3. 24-Hour Auto-Deletion",
          content: "All messages sent through LinkUp are ephemeral. They are automatically and permanently deleted from our servers and all participating devices exactly 24 hours after being sent. We cannot recover deleted messages."
        },
        {
          title: "4. End-to-End Encryption",
          content: "While messages are in transit, they are encrypted. Once delivered, they remain on the device until the 24-hour timer expires or they are manually deleted by the user."
        },
        {
          title: "5. Data Security",
          content: "We implement industry-standard security measures to protect your account information. However, no method of transmission over the internet or electronic storage is 100% secure."
        },
        {
          title: "6. Changes to This Policy",
          content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
        }
      ]
    },
    Bangla: {
      title: "গোপনীয়তা নীতি",
      lastUpdated: "সর্বশেষ আপডেট: ২৫ মার্চ, ২০২৫",
      intro: "LinkUp-এ স্বাগতম। আপনার গোপনীয়তা আমাদের সর্বোচ্চ অগ্রাধিকার। আপনি যখন আমাদের মোবাইল অ্যাপ্লিকেশন ব্যবহার করেন তখন আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, প্রকাশ এবং সুরক্ষিত করি তা এই গোপনীয়তা নীতি ব্যাখ্যা করে।",
      sections: [
        {
          title: "১. আমরা যে তথ্য সংগ্রহ করি",
          content: "আমাদের পরিষেবা প্রদানের জন্য আমরা ন্যূনতম তথ্য সংগ্রহ করি। এর মধ্যে রয়েছে আপনার নির্বাচিত ব্যবহারকারীর নাম (username) এবং আপনার পাসওয়ার্ডের একটি সুরক্ষিত হ্যাশ করা সংস্করণ। আমরা ফোন নম্বর, ইমেল ঠিকানা বা আসল নাম চাই না বা সংগ্রহ করি না।"
        },
        {
          title: "২. আমরা কীভাবে আপনার তথ্য ব্যবহার করি",
          content: "আপনার তথ্য শুধুমাত্র আপনার অ্যাকাউন্ট প্রমাণীকরণ এবং বার্তা বিতরণের সুবিধার্থে ব্যবহৃত হয়। আমরা লক্ষ্যযুক্ত বিজ্ঞাপনের জন্য আপনার ডেটা ব্যবহার করি না বা তৃতীয় পক্ষের কাছে বিক্রি করি না।"
        },
        {
          title: "৩. ২৪-ঘন্টা স্বয়ংক্রিয়-মুছে ফেলা",
          content: "LinkUp-এর মাধ্যমে প্রেরিত সমস্ত বার্তা ক্ষণস্থায়ী। পাঠানোর ঠিক ২৪ ঘন্টা পর আমাদের সার্ভার এবং সমস্ত অংশগ্রহণকারী ডিভাইস থেকে এগুলি স্বয়ংক্রিয়ভাবে এবং স্থায়ীভাবে মুছে ফেলা হয়। আমরা মুছে ফেলা বার্তা পুনরুদ্ধার করতে পারি না।"
        },
        {
          title: "৪. এন্ড-টু-এন্ড এনক্রিপশন",
          content: "বার্তাগুলি ট্রানজিটে থাকা অবস্থায় এনক্রিপ্ট করা হয়। একবার বিতরণ করা হলে, ২৪-ঘন্টা টাইমার শেষ না হওয়া পর্যন্ত বা ব্যবহারকারীর দ্বারা ম্যানুয়ালি মুছে না ফেলা পর্যন্ত সেগুলি ডিভাইসে থাকে।"
        },
        {
          title: "৫. ডেটা নিরাপত্তা",
          content: "আপনার অ্যাকাউন্টের তথ্য সুরক্ষিত রাখতে আমরা শিল্প-মানক নিরাপত্তা ব্যবস্থা প্রয়োগ করি। যাইহোক, ইন্টারনেটে সংক্রমণের কোনো পদ্ধতি বা ইলেকট্রনিক স্টোরেজ ১০০% নিরাপদ নয়।"
        },
        {
          title: "৬. এই নীতিতে পরিবর্তন",
          content: "আমরা সময়ে সময়ে আমাদের গোপনীয়তা নীতি আপডেট করতে পারি। আমরা এই পৃষ্ঠায় নতুন গোপনীয়তা নীতি পোস্ট করে এবং 'সর্বশেষ আপডেট' তারিখ আপডেট করে যেকোনো পরিবর্তনের বিষয়ে আপনাকে অবহিত করব।"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-muted-foreground">{currentContent.lastUpdated}</p>
          
          {/* Language Toggle */}
          <div className="mt-8 inline-flex bg-muted p-1 rounded-full border border-border">
            <button
              onClick={() => setLanguage('English')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                language === 'English' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('Bangla')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                language === 'Bangla' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              বাংলা
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <p className="text-lg leading-relaxed mb-10 text-foreground/90">
            {currentContent.intro}
          </p>

          <div className="space-y-10">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  {index === 0 && <FileText className="w-6 h-6 text-primary" />}
                  {index === 1 && <EyeOff className="w-6 h-6 text-primary" />}
                  {index === 2 && <Clock className="w-6 h-6 text-primary" />}
                  {index === 3 && <Lock className="w-6 h-6 text-primary" />}
                  {index === 4 && <Shield className="w-6 h-6 text-primary" />}
                  {index === 5 && <Trash2 className="w-6 h-6 text-primary" />}
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
