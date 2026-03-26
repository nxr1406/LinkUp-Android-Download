import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions - LinkUp",
  description: "Read LinkUp's Terms and Conditions. Understand your rights and responsibilities when using our secure messaging app.",
  keywords: ["LinkUp", "Terms and Conditions", "Terms of Service", "User Agreement", "Chat App Terms"],
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#DBDBDB]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            href="/" 
            className="p-2 -ml-2 rounded-full hover:bg-[#F5F5F5] transition-colors"
            aria-label="Go back to home"
          >
            <ArrowLeft className="w-5 h-5 text-[#262626]" />
          </Link>
          <h1 className="text-lg font-semibold text-[#262626]">Terms and Conditions</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header Info */}
        <div className="mb-8 pb-8 border-b border-[#DBDBDB]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#262626] mb-4">
            LinkUp - Terms and Conditions
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-[#8E8E8E]">
            <span>Last Updated: March 2026</span>
            <span>Effective Date: March 2026</span>
            <span>Version: 1.0</span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">Introduction</h3>
          <div className="space-y-4 text-[#262626] leading-relaxed">
            <p>
              Welcome to LinkUp. These Terms and Conditions (&quot;Terms&quot;) govern your use of the LinkUp mobile application and any related services (collectively, the &quot;Service&quot;). By creating an account or using LinkUp, you agree to be legally bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully before using LinkUp. If you do not agree with any part of these Terms, you must not use our Service.
            </p>
            <p>
              These Terms apply to all users of LinkUp, including visitors, registered users, and administrators.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">1. Acceptance of Terms</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">1.1 Agreement</h4>
              <p className="text-[#262626] leading-relaxed mb-3">By accessing or using LinkUp, you confirm that:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>You have read and understood these Terms and Conditions</li>
                <li>You have read and understood our Privacy Policy</li>
                <li>You are at least 13 years of age</li>
                <li>You have the legal capacity to enter into a binding agreement</li>
                <li>You agree to comply with all applicable laws and regulations</li>
                <li>You agree to be bound by these Terms</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                If you are using LinkUp on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">1.2 Changes to Terms</h4>
              <p className="text-[#262626] leading-relaxed mb-3">We reserve the right to modify these Terms at any time. When we make changes:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>The updated version will be posted in the app</li>
                <li>You will be notified via in-app notification</li>
                <li>You will be notified via your registered email address</li>
                <li>The effective date will be clearly stated</li>
                <li>For major changes, 30 days advance notice will be given</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                Your continued use of LinkUp after any changes constitutes your acceptance of the revised Terms. If you disagree with any changes, you must stop using the Service and may delete your account.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">2. Eligibility and Account Registration</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">2.1 Age Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>You must be at least 13 years of age to use LinkUp</li>
                <li>Users between 13 and 18 years old must have parental or guardian consent</li>
                <li>If you are under 13 years of age, you are not permitted to use LinkUp</li>
                <li>We comply with COPPA (Children&apos;s Online Privacy Protection Act)</li>
                <li>If we discover a user is under 13, we will immediately delete their account</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                By using LinkUp, you confirm that you meet the age requirements above.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">2.2 Account Registration</h4>
              <p className="text-[#262626] leading-relaxed mb-3">To use LinkUp, you must create an account by providing:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li><strong>Full Name:</strong> Your legal or preferred name (minimum 2 characters)</li>
                <li><strong>Username:</strong> A unique identifier (lowercase letters, numbers, underscores only; minimum 3 characters)</li>
                <li><strong>Email Address:</strong> A valid, working email address you own</li>
                <li><strong>Password:</strong> Minimum 8 characters, kept confidential at all times</li>
                <li><strong>Profile Picture:</strong> Optional - but read Section 4 carefully before uploading</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                You agree that all information you provide during registration is accurate, complete, and truthful. Providing false or misleading information is a violation of these Terms and may result in immediate account termination.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">2.3 Account Responsibility</h4>
              <p className="text-[#262626] leading-relaxed mb-3">Your account is personal and non-transferable. You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Maintaining the confidentiality of your password</li>
                <li>All activity that occurs under your account</li>
                <li>Logging out from shared or public devices</li>
                <li>Notifying us immediately if you suspect unauthorized access</li>
                <li>Choosing a strong, unique password</li>
                <li>Not sharing your credentials with anyone</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                We are not liable for any loss or damage arising from unauthorized access to your account due to your failure to keep your credentials secure.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">2.4 One Account Per Person</h4>
              <p className="text-[#262626] leading-relaxed">
                Each person may maintain only one active LinkUp account. Creating multiple accounts to evade bans, abuse the platform, or mislead other users is strictly prohibited and may result in permanent suspension of all related accounts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">3. Use of the Service</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">3.1 Permitted Use</h4>
              <p className="text-[#262626] leading-relaxed mb-3">You may use LinkUp to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Send and receive text messages with other registered users</li>
                <li>Search for and connect with other users by username or full name</li>
                <li>View and update your profile information</li>
                <li>React to messages with emoji reactions</li>
                <li>Edit or delete your own messages</li>
                <li>Export your personal data</li>
                <li>Use the message translation feature (powered by third-party AI)</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                All use of the Service must be lawful, respectful, and in accordance with these Terms.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">3.2 Prohibited Conduct</h4>
              <p className="text-[#262626] leading-relaxed mb-3">You must NOT use LinkUp to:</p>
              
              <div className="space-y-4 mt-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h5 className="font-medium text-red-800 mb-2">Harmful Content</h5>
                  <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                    <li>Send, share, or promote content that is abusive, threatening, or harassing</li>
                    <li>Send hate speech, discriminatory content, or content that promotes violence</li>
                    <li>Bully, intimidate, or emotionally harm other users</li>
                    <li>Send unsolicited mass messages or spam</li>
                    <li>Impersonate any person or entity</li>
                    <li>Create fake identities to deceive other users</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h5 className="font-medium text-red-800 mb-2">Illegal Activities</h5>
                  <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                    <li>Violate any applicable local, national, or international law</li>
                    <li>Engage in fraud, scams, phishing, or deceptive practices</li>
                    <li>Transmit viruses, malware, or any harmful computer code</li>
                    <li>Attempt to gain unauthorized access to other accounts or our systems</li>
                    <li>Collect other users&apos; personal information without consent</li>
                    <li>Facilitate any illegal transactions or activities</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h5 className="font-medium text-red-800 mb-2">Platform Abuse</h5>
                  <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                    <li>Reverse engineer, decompile, or attempt to extract source code of the app</li>
                    <li>Interfere with or disrupt the integrity or performance of the Service</li>
                    <li>Attempt to bypass any security measures, rate limits, or restrictions</li>
                    <li>Create accounts using automated means (bots, scripts)</li>
                    <li>Scrape, crawl, or mine data from the platform</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h5 className="font-medium text-red-800 mb-2">Intellectual Property</h5>
                  <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                    <li>Post content that infringes any copyright, trademark, or other IP rights</li>
                    <li>Remove or alter any proprietary notices or labels</li>
                    <li>Use LinkUp&apos;s name, logo, or branding without written permission</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h5 className="font-medium text-red-800 mb-2">Minors</h5>
                  <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                    <li>Share or solicit any content that sexualizes or exploits minors</li>
                    <li>Engage in grooming behavior or inappropriate contact with minors</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#262626] leading-relaxed mt-4">
                Violation of any of the above may result in immediate account suspension or permanent termination without notice.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">3.3 Text-Only Messaging</h4>
              <p className="text-[#262626] leading-relaxed mb-3">LinkUp currently supports TEXT MESSAGES ONLY. You may not send:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Image files or photos</li>
                <li>Audio or voice messages</li>
                <li>Video files</li>
                <li>Documents or attachments of any kind</li>
                <li>Files of any format</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                Attempting to circumvent this limitation in any way is a violation of these Terms.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">3.4 Message Expiry</h4>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                <p className="text-amber-800 font-medium">All messages sent on LinkUp expire and are automatically deleted after 24 hours from the time they were sent.</p>
              </div>
              <p className="text-[#262626] leading-relaxed mb-3">By using the Service, you acknowledge and accept that:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Messages are not permanently stored on your behalf</li>
                <li>You should save or export important information before 24 hours elapse</li>
                <li>We are not responsible for any loss of data due to automatic expiry</li>
                <li>The expiry system is a core feature of the Service, not a bug</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">4. Profile Pictures and Catbox Service</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">4.1 Important Notice About Profile Pictures</h4>
              <p className="text-[#262626] leading-relaxed mb-4">
                When you upload a profile picture, it is processed using Catbox (catbox.moe) - a free, PUBLIC, third-party file hosting service. This is critically important for your privacy.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                <h5 className="font-bold text-red-800 mb-2">YOUR PROFILE PICTURE IS NOT PRIVATE</h5>
                <p className="text-red-700 mb-2">Once uploaded:</p>
                <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                  <li>The image is stored on Catbox&apos;s PUBLIC servers, not our private servers</li>
                  <li>Anyone with the image URL can view your picture</li>
                  <li>The image may be indexed by search engines (Google Images, Bing, etc.)</li>
                  <li>The image can be downloaded and saved by anyone</li>
                  <li>The image may remain on Catbox&apos;s servers indefinitely</li>
                  <li>We CANNOT delete your image from Catbox after it has been uploaded</li>
                  <li>We do NOT own or control Catbox&apos;s servers or policies</li>
                </ul>
              </div>

              <p className="text-[#262626] leading-relaxed">
                We store only the URL of your image in our Firebase database. We have no control over how Catbox stores, caches, or manages the actual image file.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">4.2 What You Must Not Upload</h4>
              <p className="text-[#262626] leading-relaxed mb-3">You must NOT upload as a profile picture:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Nude, partially nude, or sexually explicit images</li>
                <li>Images of official documents (passport, national ID, driver&apos;s license)</li>
                <li>Images containing passwords, PINs, or sensitive personal data</li>
                <li>Images that reveal the location of your home or workplace</li>
                <li>Images that include other people without their explicit consent</li>
                <li>Images that could be used for identity theft or fraud</li>
                <li>Images you would not want visible to the entire public internet</li>
                <li>Copyrighted images you do not own or have rights to use</li>
                <li>Images of minors (persons under 18 years of age)</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                Uploading any of the above is a violation of these Terms. We may remove your profile picture and/or suspend your account if violations are found.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">4.3 Your Responsibility</h4>
              <p className="text-[#262626] leading-relaxed mb-3">By uploading a profile picture, you confirm that:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>You own the image or have the legal right to use it</li>
                <li>You consent to the image being publicly visible on the internet</li>
                <li>You understand the image may not be deletable from Catbox</li>
                <li>You will not hold LinkUp responsible for any misuse of the image</li>
                <li>You have considered the privacy risks described in Section 4.1</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="text-amber-800">
                  Before uploading, ask yourself: &quot;Am I comfortable with anyone on the internet seeing this image permanently?&quot; If the answer is no, do NOT upload it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">5. Content Standards</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">5.1 Your Content</h4>
              <p className="text-[#262626] leading-relaxed">
                You are solely responsible for all content you create, send, or share on LinkUp, including your messages, profile information, and username.
              </p>
              <p className="text-[#262626] leading-relaxed mt-3">
                By using LinkUp, you grant us a limited, non-exclusive, royalty-free license to store and transmit your content solely for the purpose of operating and providing the Service to you. We do not claim ownership of your content.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">5.2 Content Moderation</h4>
              <p className="text-[#262626] leading-relaxed mb-3">We reserve the right (but not the obligation) to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Review content that is reported by other users</li>
                <li>Remove any content that violates these Terms</li>
                <li>Suspend or terminate accounts that repeatedly violate content standards</li>
                <li>Cooperate with law enforcement regarding illegal content</li>
                <li>Preserve content when legally required to do so</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                We do not proactively monitor or read private messages. Content moderation is primarily reactive, based on user reports.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">5.3 Reporting Violations</h4>
              <p className="text-[#262626] leading-relaxed mb-3">If you encounter content or behavior that violates these Terms:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Use the &quot;Report&quot; option available on messages (long-press a message)</li>
                <li>Contact us at chocqn2580@gmail.com</li>
                <li>We will investigate reports within 24 hours</li>
                <li>We maintain confidentiality of all reports</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                False or malicious reports submitted to harm other users are themselves a violation of these Terms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">6. Intellectual Property</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">6.1 Our Intellectual Property</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                LinkUp, its logo, design, code, features, and all associated branding are the exclusive intellectual property of LinkUp and its creators. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Copy, reproduce, or redistribute any part of the app without permission</li>
                <li>Use our name or logo for any commercial purpose</li>
                <li>Create derivative works based on our app</li>
                <li>Claim ownership of any part of the Service</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                All rights not explicitly granted in these Terms are reserved by LinkUp.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">6.2 Your Intellectual Property</h4>
              <p className="text-[#262626] leading-relaxed">
                You retain all rights to content you create and share on LinkUp. By using the Service, you give us only the limited license described in Section 5.1. We do not sell your content or use it for marketing purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">7. Third-Party Services</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">7.1 Firebase (Google)</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                Our core infrastructure runs on Google Firebase. By using LinkUp, you acknowledge that your data is processed by Google according to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Firebase Terms of Service: <a href="https://firebase.google.com/terms" className="text-[#0095F6] hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/terms</a></li>
                <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" className="text-[#0095F6] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                Google may share data with law enforcement when legally required.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">7.2 Catbox (Profile Picture Hosting)</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                Profile pictures are hosted on Catbox&apos;s public servers. By uploading a profile picture, you acknowledge and accept:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Catbox&apos;s Terms of Service: <a href="https://catbox.moe/terms" className="text-[#0095F6] hover:underline" target="_blank" rel="noopener noreferrer">https://catbox.moe/terms</a></li>
                <li>That Catbox is a public service outside our control</li>
                <li>All risks described in Section 4 of these Terms</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                We are not responsible for Catbox&apos;s actions, policies, or any consequences of your images being hosted on their platform.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">7.3 Translation Service (LibreTranslate)</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                The message translation feature uses LibreTranslate, a free, open-source translation API. When you use this feature:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>The text of the selected message is sent to LibreTranslate&apos;s servers</li>
                <li>No personal information is included with translation requests</li>
                <li>Translation accuracy is not guaranteed</li>
                <li>We are not responsible for translation errors or mistranslations</li>
                <li>The service may be unavailable at times</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                Use the translation feature as a convenience tool only. Do not rely on it for critical or legally important communications.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">7.4 Links to Third Parties</h4>
              <p className="text-[#262626] leading-relaxed">
                LinkUp may contain links to external websites or services. We are not responsible for the content, privacy practices, or terms of any third-party service. Accessing external links is at your own risk.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">8. Privacy</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">8.1 Privacy Policy</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>What personal data we collect</li>
                <li>How we use your data</li>
                <li>How we protect your data</li>
                <li>Your rights regarding your data</li>
                <li>How third-party services handle your data</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                By using LinkUp, you agree to our <Link href="/privacy" className="text-[#0095F6] hover:underline">Privacy Policy</Link>. Please review it carefully.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">8.2 Online Status and Presence</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                LinkUp displays your online/offline status to other users. By using LinkUp, you consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Your online status being visible to other registered users</li>
                <li>Your &quot;last seen&quot; timestamp being visible when you are offline</li>
                <li>This status updating automatically based on your app activity</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                You may be able to disable online status in Settings. However, some presence data may still be processed internally for system functionality.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">8.3 Data Export</h4>
              <p className="text-[#262626] leading-relaxed">
                You have the right to export all your personal data at any time through Account Settings. The export will include your profile information and all your messages in JSON format.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">9. Account Termination</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">9.1 Termination by You</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                You may delete your account at any time through Account Settings. Upon account deletion:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Your profile information is permanently deleted from our database</li>
                <li>All your messages are permanently deleted from Firestore</li>
                <li>All chat records associated with your account are removed</li>
                <li>Your Firebase Authentication account is permanently deleted</li>
                <li>A 30-day grace period applies before permanent deletion is executed</li>
                <li>Profile pictures on Catbox are NOT automatically deleted (see Section 4.3)</li>
                <li>Some data may remain in encrypted backups for up to 90 days</li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-3">
                <p className="text-red-800 font-medium">Account deletion is IRREVERSIBLE. We cannot recover deleted accounts.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">9.2 Termination by Us</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                We reserve the right to suspend or permanently terminate your account without prior notice if you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Violate any provision of these Terms</li>
                <li>Engage in harmful, abusive, or illegal behavior</li>
                <li>Provide false information during registration</li>
                <li>Attempt to compromise the security or integrity of the Service</li>
                <li>Create multiple accounts to evade a ban</li>
                <li>Engage in any behavior we determine to be harmful to the community</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                In cases of severe violations (e.g., child exploitation, credible threats of violence), we may immediately terminate your account and report you to appropriate law enforcement authorities.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">9.3 Effect of Termination</h4>
              <p className="text-[#262626] leading-relaxed mb-3">Upon termination (by you or by us):</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Your right to access and use the Service immediately ceases</li>
                <li>Your account and data are subject to the deletion process in Section 9.1</li>
                <li>Any violations committed remain subject to legal consequences</li>
                <li>These Terms survive termination to the extent necessary to enforce rights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">10. Disclaimers and Limitations of Liability</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">10.1 Service Provided &quot;As Is&quot;</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                LinkUp is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>The Service will be uninterrupted or error-free</li>
                <li>Messages will be delivered instantly or at all times</li>
                <li>The Service will be available 100% of the time</li>
                <li>All features will work on all devices or operating systems</li>
                <li>Translation results will be accurate or complete</li>
                <li>The Service will meet your specific requirements</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                We disclaim all warranties, express or implied, to the maximum extent permitted by applicable law.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">10.2 Limitation of Liability</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                To the maximum extent permitted by law, LinkUp and its creators shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Loss of messages due to the 24-hour auto-expiry system</li>
                <li>Loss of data due to account deletion or technical failure</li>
                <li>Unauthorized access to your account due to weak passwords or compromised devices</li>
                <li>Content sent to you by other users</li>
                <li>Consequences of profile pictures uploaded to Catbox&apos;s public servers</li>
                <li>Actions taken by third-party services (Firebase, Catbox, LibreTranslate)</li>
                <li>Any indirect, incidental, or consequential damages arising from your use of the Service</li>
                <li>Any harm caused by misuse of the Service by other users</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                In no event shall our total liability exceed the amount you paid (if any) for the Service in the past 12 months.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">10.3 User Disputes</h4>
              <p className="text-[#262626] leading-relaxed">
                Any disputes between you and another user are solely between those parties. We are not responsible for resolving disputes between users. We encourage users to resolve disputes respectfully. In cases of serious harm, contact law enforcement directly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">11. Indemnification</h3>
          <p className="text-[#262626] leading-relaxed mb-3">
            You agree to defend, indemnify, and hold harmless LinkUp, its creators, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or related to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
            <li>Your use or misuse of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Content you post, send, or share on LinkUp</li>
            <li>Your violation of any third party&apos;s rights</li>
            <li>Images you upload to Catbox via LinkUp</li>
            <li>Any harm you cause to other users</li>
          </ul>
          <p className="text-[#262626] leading-relaxed mt-3">
            This indemnification obligation will survive termination of your account and these Terms.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">12. Governing Law and Dispute Resolution</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">12.1 Governing Law</h4>
              <p className="text-[#262626] leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable law. Users in different jurisdictions are responsible for ensuring their use of LinkUp complies with local laws.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">12.2 Dispute Resolution</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                In the event of any dispute arising from these Terms or your use of LinkUp:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Contact us first at chocqn2580@gmail.com to resolve the matter informally</li>
                <li>We will attempt to resolve disputes within 30 days of contact</li>
                <li>If informal resolution fails, disputes may be submitted to binding arbitration in accordance with applicable arbitration rules</li>
                <li>You waive any right to participate in class-action lawsuits against LinkUp to the extent permitted by law</li>
              </ul>
              <p className="text-[#262626] leading-relaxed mt-3">
                Nothing in this section prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">13. Security and Responsible Disclosure</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">13.1 Your Security Responsibilities</h4>
              <p className="text-[#262626] leading-relaxed mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
                <li>Using a strong, unique password for your account</li>
                <li>Logging out from shared devices</li>
                <li>Not sharing your login credentials</li>
                <li>Keeping your device secure and updated</li>
                <li>Reporting suspicious activity to us immediately</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">13.2 Vulnerability Reporting</h4>
              <p className="text-[#262626] leading-relaxed mb-3">
                If you discover a security vulnerability in LinkUp, please report it responsibly to: <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">chocqn2580@gmail.com</a>
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
                <p className="font-medium text-red-800 mb-2">Do NOT:</p>
                <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                  <li>Exploit the vulnerability for any purpose</li>
                  <li>Disclose the vulnerability publicly before we have addressed it</li>
                  <li>Access other users&apos; data as part of testing</li>
                </ul>
              </div>
              <p className="text-[#262626] leading-relaxed">
                We will acknowledge security reports within 48 hours and work to address confirmed vulnerabilities promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">14. Miscellaneous</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#262626] mb-3">14.1 Entire Agreement</h4>
              <p className="text-[#262626] leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and LinkUp regarding your use of the Service. They supersede all prior agreements, communications, and understandings.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">14.2 Severability</h4>
              <p className="text-[#262626] leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it enforceable.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">14.3 Waiver</h4>
              <p className="text-[#262626] leading-relaxed">
                Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of LinkUp.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">14.4 Assignment</h4>
              <p className="text-[#262626] leading-relaxed">
                You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations under these Terms at any time without restriction.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#262626] mb-3">14.5 No Third-Party Beneficiaries</h4>
              <p className="text-[#262626] leading-relaxed">
                These Terms are for the sole benefit of you and LinkUp. Nothing herein shall create any rights in any other person or entity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 15 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">15. Compliance with Laws</h3>
          <p className="text-[#262626] leading-relaxed mb-3">
            These Terms and the Service are designed to comply with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#262626] ml-2">
            <li><strong>GDPR</strong> (General Data Protection Regulation) - European Union</li>
            <li><strong>CCPA</strong> (California Consumer Privacy Act) - California, USA</li>
            <li><strong>COPPA</strong> (Children&apos;s Online Privacy Protection Act) - USA</li>
            <li><strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act) - Canada</li>
            <li><strong>LGPD</strong> (Lei Geral de Proteção de Dados) - Brazil</li>
            <li>Firebase Terms of Service - Google&apos;s applicable policies</li>
            <li>Catbox Terms of Service - for profile picture hosting</li>
          </ul>
          <p className="text-[#262626] leading-relaxed mt-3">
            Users are responsible for ensuring their own use of the Service complies with the laws of their local jurisdiction.
          </p>
        </section>

        {/* Section 16 */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">16. Contact Us</h3>
          <p className="text-[#262626] leading-relaxed mb-4">
            For questions, concerns, or notices regarding these Terms:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#DBDBDB]">
              <h4 className="font-medium text-[#262626] mb-2">General Inquiries</h4>
              <p className="text-[#8E8E8E] text-sm">Email: <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">chocqn2580@gmail.com</a></p>
              <p className="text-[#8E8E8E] text-sm">Response Time: Within 48 hours</p>
            </div>

            <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#DBDBDB]">
              <h4 className="font-medium text-[#262626] mb-2">Legal Matters</h4>
              <p className="text-[#8E8E8E] text-sm">Email: <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">chocqn2580@gmail.com</a></p>
              <p className="text-[#8E8E8E] text-sm">Response Time: Within 30 days</p>
            </div>

            <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#DBDBDB]">
              <h4 className="font-medium text-[#262626] mb-2">Privacy Concerns</h4>
              <p className="text-[#8E8E8E] text-sm">Email: <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">chocqn2580@gmail.com</a></p>
              <p className="text-[#8E8E8E] text-sm">Response Time: Within 30 days</p>
            </div>

            <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#DBDBDB]">
              <h4 className="font-medium text-[#262626] mb-2">Abuse and Safety Reports</h4>
              <p className="text-[#8E8E8E] text-sm">Email: <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">chocqn2580@gmail.com</a></p>
              <p className="text-[#8E8E8E] text-sm">Response Time: Within 24 hours</p>
            </div>

            <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#DBDBDB] md:col-span-2">
              <h4 className="font-medium text-[#262626] mb-2">Security Vulnerabilities</h4>
              <p className="text-[#8E8E8E] text-sm">Email: <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">chocqn2580@gmail.com</a></p>
              <p className="text-[#8E8E8E] text-sm">Response Time: Within 48 hours</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#DBDBDB]">
          <div className="bg-[#FAFAFA] rounded-xl p-6 text-center">
            <p className="text-[#8E8E8E] text-sm mb-2">Last Updated: March 2026 | Version: 1.0</p>
            <p className="text-[#262626] leading-relaxed">
              By creating an account or using LinkUp, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.
            </p>
            <p className="text-[#262626] leading-relaxed mt-2">
              If you do not agree to these Terms, please do not use LinkUp.
            </p>
            <p className="text-[#8E8E8E] mt-4">
              Thank you for choosing LinkUp. We are committed to providing you with a safe, respectful, and enjoyable messaging experience.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
