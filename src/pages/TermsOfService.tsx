import React from 'react';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>Terms of Service</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mt-8 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]">
          Terms of Service
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/70 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-white/70">
              By accessing or using Perkily's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-white/70 mb-4">
              Permission is granted to temporarily access and use Perkily's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-white/70">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Terms</h2>
            <p className="text-white/70 mb-4">
              To access certain features of our service, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-white/70">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not share your account credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-white/70">
              Some aspects of the service may be provided for a fee. You agree to pay all fees in accordance with the pricing and payment terms presented to you for such services. You will provide us with valid payment information and authorize us to deduct all fees from your designated payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
            <p className="text-white/70">
              The materials and services on Perkily's website are provided on an 'as is' basis. Perkily makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitations</h2>
            <p className="text-white/70">
              In no event shall Perkily or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Perkily's materials and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-white/70">
              If you have any questions about these Terms of Service, please contact us at legal@perkily.io.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService; 