import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

const LAST_UPDATED = 'March 12, 2026';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Perkily privacy policy for ClinicalOS, Fleming, AskFleming, The Interface wearable, and related web products."
        canonical="https://www.perkily.io/privacy-policy"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-24 pb-16 text-white">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>Privacy Policy</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Privacy Policy
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Your data, handled responsibly.</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            This Privacy Policy explains how Perkily Health Technologies (&quot;Perkily,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;) collects, uses, shares, and protects personal information across our products and services.
          </p>
          <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/65">
            <p><span className="text-white/85">Effective date:</span> {LAST_UPDATED}</p>
            <p className="mt-1"><span className="text-white/85">Contact:</span> privacy@perkily.io</p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Products Covered</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>Perkily website and marketing pages</li>
              <li>ClinicalOS practice management tools</li>
              <li>Fleming and AskFleming experiences (including beta access)</li>
              <li>The Interface wearable and related workflows</li>
              <li>Documentation, Help Center, contact forms, and support channels</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Quick Summary</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>We collect data needed to provide, secure, and improve our products.</li>
              <li>We do not sell personal information.</li>
              <li>We use safeguards such as encryption and access controls.</li>
              <li>You can request access, correction, or deletion of your personal data.</li>
              <li>Clinical and AI outputs support users but do not replace professional judgement.</li>
            </ul>
          </div>
        </section>

        <div className="mt-10 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The categories of information we collect depend on how you use our products and whether you use us as a patient, student, clinician, practice staff member, or site visitor.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li><span className="text-white/90">Identity and account data:</span> name, email, phone number, organization, role, and login credentials.</li>
              <li><span className="text-white/90">Profile and usage data:</span> preferences, settings, product interactions, and support history.</li>
              <li><span className="text-white/90">Clinical and workflow data:</span> encounter information, notes, coding and claim context, and operational records entered into ClinicalOS or Fleming workflows.</li>
              <li><span className="text-white/90">Device and technical data:</span> IP address, browser type, device identifiers, logs, and diagnostics.</li>
              <li><span className="text-white/90">Payment and billing data:</span> subscription and transaction metadata (processed via payment providers).</li>
              <li><span className="text-white/90">Communications:</span> messages sent to support, sales, or partnerships channels.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">2. How We Collect Data</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Directly from you when you create accounts, submit forms, request demos, or use product features.</li>
              <li>From your organization (for example, practice administrators managing seats and permissions).</li>
              <li>Automatically through logs, cookies, analytics, and security monitoring tools.</li>
              <li>From integrations and service providers you or your organization authorize.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">3. Why We Use Personal Information</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Deliver and operate ClinicalOS, Fleming, AskFleming, The Interface, and related services.</li>
              <li>Authenticate users, enforce permissions, and protect account security.</li>
              <li>Enable workflows such as scheduling, documentation, coding, and claim support.</li>
              <li>Provide customer support, onboarding, and product communications.</li>
              <li>Monitor reliability, improve performance, and develop product features.</li>
              <li>Comply with legal obligations and enforce agreements.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">4. Legal Bases for Processing</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Where required by applicable law, we process personal information based on one or more legal grounds, including consent, performance of a contract, legitimate interests, and legal obligations.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">5. AI and Clinical Safety Context</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Some products provide AI-assisted outputs (for example summaries, educational support, coding suggestions, or evidence-linked responses). These features are designed to support workflow completion and learning. They are not a substitute for licensed clinical judgement, emergency response, or professional oversight.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">6. Cookies and Similar Technologies</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We use cookies and similar technologies for core functionality, security, analytics, and performance measurement. You can manage cookie preferences through your browser settings, though some product features may not function correctly if essential cookies are disabled.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">7. Sharing of Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We share personal information only when needed to operate our services and meet legal or contractual obligations.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>With trusted service providers (hosting, analytics, customer support, security, payments).</li>
              <li>With your organization or administrator where accounts are organization-managed.</li>
              <li>With integration partners when authorized by you or your organization.</li>
              <li>For legal reasons (lawful requests, dispute resolution, fraud prevention, safety).</li>
              <li>As part of corporate transactions such as merger, acquisition, or asset sale.</li>
            </ul>
            <p className="mt-4 text-sm text-white/70">
              We do not sell personal information.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">8. International Data Transfers</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We may process data in jurisdictions other than your own. Where required, we use appropriate contractual and operational safeguards for cross-border transfers.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">9. Data Retention</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We retain personal information only as long as reasonably necessary for service delivery, security, legal compliance, and dispute handling. Retention periods vary by data type, product context, and legal requirements.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">10. Security Measures</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Encryption in transit and at rest where appropriate.</li>
              <li>Role-based access controls and least-privilege principles.</li>
              <li>Logging, monitoring, and incident response procedures.</li>
              <li>Periodic review of technical and organizational safeguards.</li>
            </ul>
            <p className="mt-4 text-sm text-white/70">
              No security system is guaranteed to be perfect. If you suspect unauthorized activity, contact us immediately at privacy@perkily.io.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">11. Your Rights and Choices</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Depending on your jurisdiction, you may have rights to access, correct, delete, port, restrict, or object to processing of your personal information, and to withdraw consent where consent is the legal basis.
            </p>
            <p className="mt-3 text-sm text-white/70">
              To exercise your rights, email privacy@perkily.io. We may verify your identity before fulfilling a request.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">12. Children&apos;s Privacy</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Our services are not directed to children under the age required by applicable law to consent to data processing. If you believe a child provided personal information unlawfully, contact us and we will investigate and take appropriate action.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">13. Third-Party Links and Services</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Our sites and products may link to third-party websites, platforms, and services. Their privacy practices are governed by their own policies, and we are not responsible for their content or handling of personal information.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">14. Policy Changes</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date. Continued use of our services after updates indicates acceptance of the revised policy where permitted by law.
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Privacy and data protection requests: <a className="underline hover:text-white" href="mailto:privacy@perkily.io">privacy@perkily.io</a>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            General support: <a className="underline hover:text-white" href="mailto:hello@perkily.io">hello@perkily.io</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;