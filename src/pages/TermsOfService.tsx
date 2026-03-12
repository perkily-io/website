import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

const LAST_UPDATED = 'March 12, 2026';

const TermsOfService = () => {
  return (
    <Layout>
      <SEO
        title="Terms and Conditions"
        description="Perkily terms covering ClinicalOS, Fleming, AskFleming, The Interface wearable, and related web products."
        canonical="https://www.perkily.io/terms-of-service"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-24 pb-16 text-white">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>Terms and Conditions</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Terms and Conditions
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Terms for all Perkily products.</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of Perkily Health Technologies products and services.
          </p>
          <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/65">
            <p><span className="text-white/85">Effective date:</span> {LAST_UPDATED}</p>
            <p className="mt-1"><span className="text-white/85">Legal contact:</span> legal@perkily.io</p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Services Covered</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>Perkily website and marketing properties</li>
              <li>ClinicalOS and related practice operations tooling</li>
              <li>Fleming and AskFleming experiences, including beta features</li>
              <li>The Interface wearable and connected experiences</li>
              <li>Documentation, Help Center, API/integration surfaces, and support services</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Key Points</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>Use of the services means you accept these Terms.</li>
              <li>You are responsible for lawful use and account security.</li>
              <li>AI outputs assist workflows but do not replace professional judgement.</li>
              <li>Fees, if applicable, are governed by your selected plan and order terms.</li>
              <li>Violation of Terms can lead to suspension or termination.</li>
            </ul>
          </div>
        </section>

        <div className="mt-10 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              By accessing or using our services, you agree to these Terms and any additional policies referenced in them, including our Privacy Policy. If you do not agree, do not use the services.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">2. Eligibility and Accounts</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>You must have legal capacity to enter into these Terms.</li>
              <li>You must provide accurate registration information and keep it current.</li>
              <li>You are responsible for account activity and credential security.</li>
              <li>You must notify us promptly of unauthorized access or security incidents.</li>
              <li>Organization administrators are responsible for user management under their tenant.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">3. Acceptable Use</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              You agree not to misuse the services. Prohibited actions include unauthorized access, reverse engineering except where law allows, abuse of rate limits, security testing without permission, unlawful data processing, or use that could harm users, patients, or service integrity.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">4. Product and AI-Specific Terms</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li><span className="text-white/90">ClinicalOS:</span> supports operational and documentation workflows; final clinical and billing decisions remain your responsibility.</li>
              <li><span className="text-white/90">Fleming / AskFleming:</span> provides assistive and evidence-linked outputs that may be incomplete or unsuitable without professional review.</li>
              <li><span className="text-white/90">The Interface wearable:</span> must be used according to instructions and applicable clinical standards; device output is assistive.</li>
              <li><span className="text-white/90">Beta features:</span> may change, be limited, or be discontinued without notice and may not carry full production support commitments.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">5. Clinical Responsibility Disclaimer</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Perkily products may support healthcare workflows, education, and operational decisions, but they do not provide medical diagnosis or treatment as a replacement for licensed professionals. Emergency and urgent decisions must follow appropriate clinical protocols and local emergency pathways.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">6. Fees, Billing, and Subscriptions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Paid features require valid billing information and timely payment.</li>
              <li>Fees are billed under your selected plan, order form, or contract terms.</li>
              <li>Unless otherwise stated, fees are non-refundable.</li>
              <li>We may change pricing for future billing periods with reasonable notice.</li>
              <li>Failure to pay may result in service suspension or downgrade.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">7. Intellectual Property</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We retain all rights in our services, software, and branding. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the services for lawful internal or personal use (as applicable to your plan). You retain rights in your own submitted content, and you grant us the rights needed to operate the services.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">8. Confidentiality and Data Protection</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We apply safeguards for data security and confidentiality as described in our Privacy Policy and contractual terms. You are responsible for ensuring your own use complies with applicable data protection and healthcare regulations.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">9. Third-Party Services and Integrations</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Services may interoperate with third-party tools, data providers, and links. We are not responsible for third-party products or policies, and your use of them is governed by their own terms.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">10. Service Availability and Changes</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We may update, modify, suspend, or discontinue service features from time to time. We do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">11. Termination</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              You may stop using the services at any time. We may suspend or terminate access for breach of these Terms, security risks, legal requirements, non-payment, or misuse. Provisions that by nature should survive termination remain in effect.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">12. Disclaimers</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Except as explicitly stated in a written agreement, services are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, whether express, implied, statutory, or otherwise.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">13. Limitation of Liability</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              To the maximum extent permitted by law, Perkily and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenues, data, or goodwill arising from use of the services.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">14. Indemnification</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              You agree to defend, indemnify, and hold harmless Perkily, its affiliates, and personnel from claims, damages, and expenses arising from your misuse of the services, violation of law, or breach of these Terms.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">15. Governing Law</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              These Terms are governed by applicable laws of the jurisdiction specified in your executed agreement with Perkily or, where no separate agreement exists, by the laws applicable to Perkily&apos;s principal place of business, without regard to conflict of law principles.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">16. Changes to These Terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We may revise these Terms periodically. Updated versions will be posted with a revised effective date. Continued use after the effective date constitutes acceptance where permitted by law.
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Legal inquiries: <a className="underline hover:text-white" href="mailto:legal@perkily.io">legal@perkily.io</a>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            General support: <a className="underline hover:text-white" href="mailto:hello@perkily.io">hello@perkily.io</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default TermsOfService;