import React from 'react';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>Privacy Policy</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mt-8 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/70 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-white/70">
              Welcome to Perkily. We are committed to protecting your personal information and your right to privacy. This privacy policy describes how we collect, use, and protect your personal information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-white/70 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-white/70">
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials</li>
              <li>Profile information</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-white/70 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-white/70">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you important updates and notifications</li>
              <li>Improve our services and develop new features</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-white/70">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-white/70 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-white/70">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Object to certain processing of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-white/70">
              If you have any questions about this Privacy Policy or our practices, please contact us at privacy@perkily.io.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 