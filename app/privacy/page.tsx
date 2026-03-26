import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - LinkUp",
  description: "LinkUp Privacy Policy. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#DBDBDB] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#262626] transition-colors hover:text-[#0095F6]"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <h1 className="text-lg font-semibold text-[#262626]">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <div className="mb-8 border-b border-[#DBDBDB] pb-8">
          <h2 className="mb-2 text-2xl font-bold text-[#262626] md:text-3xl">LinkUp Privacy Policy</h2>
          <p className="text-sm text-[#8E8E8E]">Last Updated: March 2026</p>
          <p className="text-sm text-[#8E8E8E]">Effective Date: March 2026</p>
        </div>

        <p className="mb-8 text-[#262626]">
          Welcome to LinkUp. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you use our application and website.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">1. Information We Collect</h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.1 Account Registration Information</h4>
            <p className="mb-3 text-[#262626]">
              When you create an account on LinkUp, we collect the following information directly from you:
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>
                <strong>Full Name:</strong> Your legal or preferred name
              </li>
              <li>
                <strong>Email Address:</strong> Used for account login and recovery
              </li>
              <li>
                <strong>Username:</strong> Your unique identifier on the platform
              </li>
              <li>
                <strong>Password:</strong> Encrypted and securely stored
              </li>
              <li>
                <strong>Account Creation Date:</strong> Timestamp of when you joined
              </li>
              <li>
                <strong>Last Seen Timestamp:</strong> When you were last active
              </li>
            </ul>
            <p className="text-[#8E8E8E]">
              All of this information is stored securely in Firebase Firestore database. We use industry-standard
              encryption and Firebase&apos;s built-in security measures to protect your data.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.2 Communication Data</h4>
            <p className="mb-3 text-[#262626]">When you use our messaging features, we collect:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>
                <strong>Message Content:</strong> The text, links, and information you send
              </li>
              <li>
                <strong>Message Timestamps:</strong> Date and time of each message
              </li>
              <li>
                <strong>Message Editing History:</strong> Records of edits you make to messages
              </li>
              <li>
                <strong>Message Deletion Records:</strong> Logs of messages you delete
              </li>
              <li>
                <strong>Chat Participant Information:</strong> Who you are messaging with
              </li>
              <li>
                <strong>Conversation Metadata:</strong> Information about your chats
              </li>
              <li>
                <strong>Chat Status:</strong> Whether chats are archived or active
              </li>
            </ul>
            <p className="text-[#8E8E8E]">
              All messages are stored in Firebase Firestore. They are encrypted during transmission and storage is
              handled by Google&apos;s secure infrastructure.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.3 Real-Time Activity Data</h4>
            <p className="mb-3 text-[#262626]">We track your activity to provide real-time features:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>
                <strong>Online/Offline Status:</strong> Whether you are currently using the app
              </li>
              <li>
                <strong>Last Active Time:</strong> When you were last seen
              </li>
              <li>
                <strong>Device Information:</strong> Type of device you&apos;re using
              </li>
              <li>
                <strong>Browser/App Version:</strong> Which version of our app you&apos;re running
              </li>
              <li>
                <strong>IP Address:</strong> Your internet connection identifier
              </li>
              <li>
                <strong>Platform Information:</strong> iOS, Android, or Web
              </li>
              <li>
                <strong>Connection Status:</strong> Whether you&apos;re connected or disconnected
              </li>
            </ul>
            <p className="text-[#8E8E8E]">
              This data is stored in Firebase and used only to display your presence status to other users and to
              improve our services.
            </p>
          </div>

          <div className="mb-6 rounded-xl border-2 border-amber-400 bg-amber-50 p-4">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.4 Profile Picture Upload - IMPORTANT</h4>
            <p className="mb-3 text-[#262626]">
              Your profile picture is uploaded using Catbox&apos;s public API service. This is important to understand:
            </p>
            <div className="mb-3">
              <p className="mb-2 font-semibold text-[#262626]">WHAT IS CATBOX?</p>
              <p className="text-[#262626]">
                Catbox (catbox.moe) is a free, public file upload service. It is NOT our private server.
              </p>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-semibold text-[#262626]">VISIBILITY:</p>
              <ul className="list-inside list-disc space-y-1 text-[#262626]">
                <li>Your profile picture URL is stored in our Firebase database</li>
                <li>The actual image file is stored on Catbox&apos;s public servers</li>
                <li>Catbox may cache images globally</li>
                <li>Images can be accessed by anyone who has the URL</li>
                <li>Catbox does not require authentication to access files</li>
              </ul>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-semibold text-[#262626]">WHAT THIS MEANS FOR YOU:</p>
              <ul className="list-inside list-disc space-y-1 text-[#262626]">
                <li>Your profile picture is NOT private</li>
                <li>Anyone with the image URL can view your picture</li>
                <li>The image may be indexed by search engines</li>
                <li>The image may remain on Catbox servers even after deletion</li>
              </ul>
            </div>
            <div className="rounded-lg bg-amber-100 p-3">
              <p className="mb-2 font-semibold text-amber-800">OUR RECOMMENDATION:</p>
              <p className="text-amber-800">
                Please upload only pictures that you are comfortable being public. Do NOT upload private or sensitive
                images, images that reveal personal information, or images you want to keep private.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.5 Search and Discovery Data</h4>
            <p className="mb-3 text-[#262626]">When you search for other users or browse the app:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>
                <strong>Search Queries:</strong> What you search for
              </li>
              <li>
                <strong>Search Results Clicked:</strong> Which users you click on
              </li>
              <li>
                <strong>User Profile Views:</strong> Whose profiles you visit
              </li>
              <li>
                <strong>User Interaction Patterns:</strong> How you interact with other users
              </li>
              <li>
                <strong>Discovery Preferences:</strong> Your preferences for finding people
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.6 Notification Data</h4>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Notification Preferences</li>
              <li>Push Notification Tokens</li>
              <li>Notification Delivery Status</li>
              <li>Notification Click Records</li>
              <li>Device Notification Settings</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.7 Technical Data</h4>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Device Model and Operating System</li>
              <li>App Version</li>
              <li>Crash Reports</li>
              <li>Performance Metrics</li>
              <li>Error Logs</li>
              <li>Analytics Events</li>
              <li>Session Information</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">1.8 AI Features Data</h4>
            <p className="mb-3 text-[#262626]">When you use our AI-powered features:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Text Inputs for AI Processing</li>
              <li>Translation Requests</li>
              <li>Translation Results</li>
              <li>Feature Usage Patterns</li>
              <li>Google Gemini API Logs</li>
            </ul>
            <p className="text-[#8E8E8E]">
              This data is processed by Google Gemini AI according to Google&apos;s terms of service.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">2. How We Use Your Information</h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">2.1 Service Provision</h4>
            <p className="mb-3 text-[#262626]">We use the information we collect to:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Provide real-time messaging services to you</li>
              <li>Maintain and manage your user account</li>
              <li>Enable you to communicate with other users</li>
              <li>Display active user lists so you can see who&apos;s online</li>
              <li>Process your AI translation requests</li>
              <li>Deliver notifications about messages and activity</li>
              <li>Store and retrieve your chat history</li>
              <li>Display your online/offline status to other users</li>
              <li>Create and maintain your user profile</li>
              <li>Authenticate you when you log in</li>
              <li>Recover your account if you forget your password</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">2.2 Service Improvement</h4>
            <p className="mb-3 text-[#262626]">We analyze your usage to improve our services:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Analyze usage patterns to understand how users interact with the app</li>
              <li>Identify which features are most popular</li>
              <li>Improve overall app performance and speed</li>
              <li>Optimize the user experience and interface</li>
              <li>Fix bugs and technical issues</li>
              <li>Develop new features based on user needs</li>
            </ul>
            <p className="text-[#8E8E8E]">
              All analysis is done in a way that respects your privacy. We use aggregated data whenever possible.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">2.3 Security and Safety</h4>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Detect and prevent fraud and abuse</li>
              <li>Prevent unauthorized access to accounts</li>
              <li>Combat harassment and inappropriate behavior</li>
              <li>Enforce our Terms of Service and policies</li>
              <li>Protect intellectual property rights</li>
              <li>Monitor for suspicious or malicious activities</li>
              <li>Comply with legal obligations and law enforcement requests</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">2.4 Communication</h4>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Send you account notifications (new messages, friend requests)</li>
              <li>Respond to your customer support inquiries</li>
              <li>Send you service updates and announcements</li>
              <li>Notify you of changes to our policies</li>
              <li>Alert you to account security events</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">3. Data Storage and Firebase Security</h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">3.1 Where Your Data Is Stored</h4>
            <p className="mb-3 text-[#262626]">
              All of your chat messages, email, password, and account information is stored in Google Firebase Firestore
              database. Firebase is Google&apos;s enterprise-grade database service used by millions of applications
              worldwide.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">3.2 How Firebase Protects Your Data</h4>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-semibold text-[#262626]">ENCRYPTION:</p>
                <ul className="list-inside list-disc space-y-1 text-[#262626]">
                  <li>All data is encrypted in transit using HTTPS/TLS</li>
                  <li>All data is encrypted at rest on Firebase servers</li>
                  <li>Password hashing is done using industry-standard algorithms</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[#262626]">AUTHENTICATION:</p>
                <ul className="list-inside list-disc space-y-1 text-[#262626]">
                  <li>Firebase Authentication provides secure login</li>
                  <li>Password recovery is protected</li>
                  <li>Two-factor authentication is available</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[#262626]">COMPLIANCE:</p>
                <ul className="list-inside list-disc space-y-1 text-[#262626]">
                  <li>GDPR compliant</li>
                  <li>SOC 2 Type II certified</li>
                  <li>ISO/IEC 27001 certified</li>
                  <li>Regular security assessments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">4. Profile Picture Upload - Catbox Service</h3>

          <div className="mb-6 rounded-xl border border-[#DBDBDB] bg-gray-50 p-4">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">4.1 What Is Catbox?</h4>
            <p className="mb-3 text-[#262626]">
              Catbox (catbox.moe) is a free, public file upload service. It is NOT our service.
            </p>
            <ul className="list-inside list-disc space-y-1 text-[#262626]">
              <li>Catbox is a third-party service operated independently</li>
              <li>We do not own or control Catbox</li>
              <li>Catbox is a PUBLIC service, not a private storage service</li>
              <li>Images uploaded to Catbox are publicly accessible</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">4.2 How Profile Pictures Are Handled</h4>
            <p className="mb-3 text-[#262626]">When you upload a profile picture:</p>
            <ol className="mb-3 list-inside list-decimal space-y-1 text-[#262626]">
              <li>You select a picture from your device</li>
              <li>The app sends the picture to Catbox&apos;s servers (not our Firebase)</li>
              <li>Catbox generates a public URL for your image</li>
              <li>The URL is stored in our Firebase database</li>
              <li>The actual image file remains on Catbox&apos;s servers</li>
            </ol>
          </div>

          <div className="mb-6 rounded-xl border-2 border-red-300 bg-red-50 p-4">
            <h4 className="mb-3 text-lg font-semibold text-red-800">4.4 Risks of Using Catbox for Profile Pictures</h4>
            <div className="space-y-3">
              <div>
                <p className="mb-2 font-semibold text-red-800">PRIVACY RISKS:</p>
                <ul className="list-inside list-disc space-y-1 text-red-700">
                  <li>Your picture is publicly visible to anyone</li>
                  <li>The image can be downloaded and saved by anyone</li>
                  <li>The image may be indexed by search engines</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-red-800">PERMANENCE RISKS:</p>
                <ul className="list-inside list-disc space-y-1 text-red-700">
                  <li>Your image may remain on Catbox indefinitely</li>
                  <li>Even if you delete your account, the image may remain</li>
                  <li>You cannot control how long Catbox keeps images</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">4.5 What You Should NOT Upload</h4>
            <ul className="list-inside list-disc space-y-1 text-[#262626]">
              <li>Sensitive or private images</li>
              <li>Images that reveal your location</li>
              <li>Images that contain personal information</li>
              <li>Images of documents (passport, ID, etc.)</li>
              <li>Images you would not want on the public internet</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">5. Firebase Messages and Emails Are Safe</h3>

          <div className="mb-6 rounded-xl border border-green-300 bg-green-50 p-4">
            <h4 className="mb-3 text-lg font-semibold text-green-800">5.1 Message Security</h4>
            <p className="mb-3 font-semibold text-green-800">MESSAGES ARE SAFE BECAUSE:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-green-700">
              <li>Stored in Firebase Firestore with encryption</li>
              <li>Only visible to chat participants</li>
              <li>Encrypted in transit using HTTPS/TLS</li>
              <li>Encrypted at rest on Google&apos;s servers</li>
              <li>Protected by Firebase Security Rules</li>
            </ul>
            <p className="mb-3 font-semibold text-green-800">YOUR MESSAGES ARE PRIVATE:</p>
            <ul className="list-inside list-disc space-y-1 text-green-700">
              <li>We do not read your messages</li>
              <li>We do not share messages with advertisers</li>
              <li>We do not sell message data</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">5.3 Password Security</h4>
            <p className="mb-3 font-semibold text-[#262626]">PASSWORDS ARE STORED SECURELY:</p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Never stored in plain text</li>
              <li>Hashed using bcrypt algorithm</li>
              <li>Salted for extra security</li>
              <li>We cannot see your password</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">6. Third-Party Services</h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">6.1 Firebase (Google)</h4>
            <p className="mb-3 text-[#262626]">We use Google Firebase for database, authentication, and analytics.</p>
            <p className="text-sm text-[#8E8E8E]">
              Firebase Terms:{" "}
              <a
                href="https://firebase.google.com/terms"
                className="text-[#0095F6] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://firebase.google.com/terms
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">6.2 Catbox (File Upload Service)</h4>
            <p className="mb-3 text-[#262626]">We use Catbox for profile picture uploads.</p>
            <p className="text-sm text-[#8E8E8E]">
              Catbox Terms:{" "}
              <a
                href="https://catbox.moe/terms"
                className="text-[#0095F6] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://catbox.moe/terms
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">6.3 Google Gemini AI</h4>
            <p className="mb-3 text-[#262626]">
              When you use translation features, text is processed by Google Gemini AI.
            </p>
            <p className="text-sm text-[#8E8E8E]">
              Google Gemini Terms:{" "}
              <a
                href="https://deepmind.google/terms"
                className="text-[#0095F6] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://deepmind.google/terms
              </a>
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">7. Data Retention and Deletion</h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">7.1 How Long We Keep Your Data</h4>
            <ul className="mb-3 list-inside list-disc space-y-1 text-[#262626]">
              <li>Messages stored indefinitely in Firebase</li>
              <li>You can delete messages anytime</li>
              <li>Deleted messages removed within 48 hours</li>
              <li>Backup copies deleted within 90 days</li>
              <li>Account data kept while account is active</li>
              <li>After deletion: 30-day grace period</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#262626]">7.2 How to Delete Your Data</h4>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-semibold text-[#262626]">Individual Messages:</p>
                <ol className="list-inside list-decimal space-y-1 text-[#262626]">
                  <li>Open the message</li>
                  <li>Tap and hold (or right-click)</li>
                  <li>Select &quot;Delete&quot;</li>
                </ol>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[#262626]">Your Account:</p>
                <ol className="list-inside list-decimal space-y-1 text-[#262626]">
                  <li>Go to Account Settings</li>
                  <li>Click &quot;Delete Account&quot;</li>
                  <li>Confirm deletion</li>
                  <li>Your account deleted in 30 days</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">8. Your Privacy Rights</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[#DBDBDB] p-4">
              <h4 className="mb-2 font-semibold text-[#262626]">Access Your Data</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-[#8E8E8E]">
                <li>See all your personal information</li>
                <li>Download your messages</li>
                <li>Export your chat history</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#DBDBDB] p-4">
              <h4 className="mb-2 font-semibold text-[#262626]">Correct Your Data</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-[#8E8E8E]">
                <li>Update your full name</li>
                <li>Change your email address</li>
                <li>Update your username</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#DBDBDB] p-4">
              <h4 className="mb-2 font-semibold text-[#262626]">Delete Your Data</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-[#8E8E8E]">
                <li>Delete individual messages</li>
                <li>Clear chat history</li>
                <li>Delete your entire account</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#DBDBDB] p-4">
              <h4 className="mb-2 font-semibold text-[#262626]">Opt-Out Options</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-[#8E8E8E]">
                <li>Disable push notifications</li>
                <li>Turn off online status</li>
                <li>Enable privacy mode</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">9. Changes to This Policy</h3>
          <p className="mb-3 text-[#262626]">We may update this Privacy Policy at any time. When we do:</p>
          <ul className="list-inside list-disc space-y-1 text-[#262626]">
            <li>Updated version posted on our website</li>
            <li>In-app notification sent to all users</li>
            <li>Email sent to your registered email address</li>
            <li>30 days notice for major changes</li>
          </ul>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">10. Contact Us</h3>
          <div className="rounded-xl border border-[#DBDBDB] bg-gray-50 p-6">
            <p className="mb-4 text-[#262626]">If you have questions about this Privacy Policy:</p>
            <div className="space-y-2">
              <p className="text-[#262626]">
                <strong>Email:</strong>{" "}
                <a href="mailto:chocqn2580@gmail.com" className="text-[#0095F6] hover:underline">
                  chocqn2580@gmail.com
                </a>
              </p>
              <p className="text-[#8E8E8E]">Response Time: Within 30 days</p>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-[#262626]">11. Legal Compliance</h3>
          <p className="mb-3 text-[#262626]">This Privacy Policy complies with:</p>
          <ul className="list-inside list-disc space-y-1 text-[#262626]">
            <li>GDPR (General Data Protection Regulation)</li>
            <li>CCPA (California Consumer Privacy Act)</li>
            <li>LGPD (Brazilian Data Protection Law)</li>
            <li>PIPEDA (Canadian Privacy Law)</li>
            <li>COPPA (Children&apos;s Online Privacy Act)</li>
            <li>Firebase Privacy and Security Standards</li>
            <li>Google Cloud Privacy Terms</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#DBDBDB] pt-8">
          <div className="text-center">
            <p className="mb-2 text-sm text-[#8E8E8E]">Last Updated: March 2026 | Version: 1.0</p>
            <p className="text-sm text-[#262626]">
              By using LinkUp, you acknowledge that you have read and understood this Privacy Policy and agree to its
              terms.
            </p>
            <p className="mt-4 text-sm text-[#8E8E8E]">
              If you do not agree with this Privacy Policy, please do not use LinkUp.
            </p>
            <p className="mt-4 text-sm text-[#262626]">
              Thank you for trusting us with your data. Your privacy and security are important to us.
            </p>
          </div>
        </footer>
      </article>
    </main>
  )
}
