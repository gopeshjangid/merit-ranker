import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - eSIM Myanmar",
  description:
    "Read the Terms of Service for using eSIM Myanmar services. By using our service, you agree to these terms.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-background text-foreground">
        <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem-4rem)]">
          <article className="prose dark:prose-invert max-w-3xl mx-auto">
            {" "}
            {/* Using article and prose classes */}
            <h1 className="gradient-text !mb-2">Terms of Service</h1> {/* Custom gradient for main title */}
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the
              https://esim.com.mm website (the "Service") operated by eSIM Myanmar ("us", "we", or "our"). Your use of
              our Service is also governed by our Privacy Policy and is subject to GSMA guidelines where applicable.
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
              the terms then you may not access the Service.
            </p>
            <h2>eSIM Services</h2>
            <p>
              Our Service provides a platform for purchasing and managing eSIM profiles from various telecommunication
              providers in Myanmar. The availability, quality, and specific terms of the eSIM services (data allowances,
              validity, coverage, etc.) are determined by the respective telecom providers. We facilitate the delivery
              of the eSIM profile (e.g., via QR code) and provide support for the activation process on compatible
              devices. You are responsible for ensuring your device is eSIM compatible and network unlocked before
              purchase. Compatibility information is provided on our website but should be verified with your device
              manufacturer.
            </p>
            <h2>Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and
              current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account on our Service. You are responsible for safeguarding the password that you use
              to access the Service and for any activities or actions under your password.
            </p>
            <h2>Purchases and Payments</h2>
            <p>
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be
              asked to supply certain information relevant to your Purchase including, without limitation, your payment
              information. All payments are processed through secure third-party payment gateways (e.g., MyanmarPay). We
              do not store your full payment card details. Prices for our products are subject to change without notice.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content (excluding content provided by users or third-party telecom
              providers), features, and functionality are and will remain the exclusive property of eSIM Myanmar and its
              licensors. The Service is protected by copyright, trademark, and other laws of both Myanmar and foreign
              countries. Our trademarks and trade dress may not be used in connection with any product or service
              without the prior written consent of eSIM Myanmar.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall eSIM Myanmar, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service; (ii.e.) any conduct or content of any third
              party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or
              alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of the possibility of such
              damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
            {/* ... Add all other necessary sections for a complete terms of service ... */}
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the Union of Myanmar, without
              regard to its conflict of law provisions.
            </p>
            <h2>Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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
