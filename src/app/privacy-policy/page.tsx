import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - eSIM Myanmar",
  description: "Read the Privacy Policy for eSIM Myanmar services. Your data privacy is important to us.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-background text-foreground">
        <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem-4rem)]">
          <article className="prose dark:prose-invert max-w-3xl mx-auto">
            {" "}
            {/* Using article and prose classes */}
            <h1 className="gradient-text !mb-2">Privacy Policy</h1> {/* Custom gradient for main title */}
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              eSIM Myanmar ("us", "we", or "our") operates the https://esim.com.mm website (the "Service"). This page
              informs you of our policies regarding the collection, use, and disclosure of personal data when you use
              our Service and the choices you have associated with that data. We are committed to protecting your
              privacy in compliance with applicable laws and GSMA guidelines.
            </p>
            <h2>Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service
              to you. All data collection is done with transparency and for legitimate operational needs.
            </p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may
              include, but is not limited to:
            </p>
            <ul>
              <li>Email address (for account creation, communication, and eSIM delivery)</li>
              <li>First name and last name (for personalization and account identification)</li>
              <li>Phone number (for customer support and optional two-factor authentication)</li>
              <li>
                Device information (e.g., EID, IMEI, device model for eSIM compatibility check and provisioning, only
                when explicitly provided by you for these purposes)
              </li>
              <li>
                Payment information (processed securely by our payment partners, we do not store full card details)
              </li>
              <li>Address, State, Province, ZIP/Postal code, City (for billing and regional service offerings)</li>
              <li>Cookies and Usage Data (for service improvement and analytics)</li>
            </ul>
            <h4>Usage Data</h4>
            <p>
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data
              may include information such as your computer's Internet Protocol address (e.g. IP address), browser type,
              browser version, the pages of our Service that you visit, the time and date of your visit, the time spent
              on those pages, unique device identifiers and other diagnostic data.
            </p>
            <h3>Use of Data</h3>
            <p>eSIM Myanmar uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service, including eSIM provisioning and activation.</li>
              <li>To notify you about changes to our Service or your eSIM profiles.</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
              <li>To provide customer support and resolve issues.</li>
              <li>
                To gather analysis or valuable information so that we can improve our Service and user experience.
              </li>
              <li>To monitor the usage of our Service and detect/prevent fraud or security incidents.</li>
              <li>To detect, prevent and address technical issues.</li>
              <li>To comply with legal obligations and GSMA system requirements.</li>
            </ul>
            <h3>Data Retention</h3>
            <p>
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this
              Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal
              obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <h3>Data Security</h3>
            <p>
              The security of your data is important to us. We strive to use commercially acceptable means to protect
              your Personal Data, including encryption, access controls, and secure infrastructure hosted on Vercel.
              However, remember that no method of transmission over the Internet, or method of electronic storage is
              100% secure.
            </p>
            {/* ... Add all other necessary sections for a complete privacy policy ... */}
            <h2>Your Data Protection Rights</h2>
            <p>
              You have certain data protection rights. eSIM Myanmar aims to take reasonable steps to allow you to
              correct, amend, delete, or limit the use of your Personal Data. These include:
            </p>
            <ul>
              <li>The right to access, update or delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>
                By email: <a href="mailto:info@esim.com.mm">info@esim.com.mm</a>
              </li>
              <li>
                By phone number: <a href="tel:+959650000172">09 6500 00172</a>
              </li>
              <li>
                Through our website: <Link href="/contact">Contact Page</Link>
              </li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
