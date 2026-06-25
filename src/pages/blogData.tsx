import React from 'react';
import { Link } from 'react-router-dom';

export type BlogPost = {
  slug: string;
  tag: 'Product' | 'Design' | 'Platform' | 'Company' | string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readingTime: string;
  coverImage: string;
  content: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  ogImage?: string;
};

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-12 border-l border-white/20 pl-6 sm:pl-8">
    <p className="text-xl sm:text-2xl font-light tracking-tight text-white/80 leading-snug">{children}</p>
  </blockquote>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6 text-center">
    <p className="text-3xl sm:text-4xl font-light tracking-tight text-white">{value}</p>
    <p className="mt-2 text-[13px] text-white/40 font-light leading-relaxed">{label}</p>
  </div>
);

export const blogPosts: BlogPost[] = [
  {
    slug: 'clinicalos-launch-perkily-rebrand',
    tag: 'Company',
    title: 'Introducing ClinicalOS — practice medicine, not paperwork',
    excerpt:
      'Perkily Health Technologies is launching ClinicalOS: a single platform that runs your medical practice with ambient documentation, claims automation, and patient communication — all in one calm, clinician-first experience.',
    date: '2025-06-25',
    displayDate: 'Jun 2025',
    readingTime: '6 min',
    coverImage: '/favicon-32x32.png',
    metaTitle: 'ClinicalOS Launch & Perkily Rebrand | Perkily Health Technologies',
    metaDescription:
      'Perkily Health Technologies launches ClinicalOS — AI that runs your medical practice. Ambient documentation, claims automation, and a rebrand built around one idea: practice medicine, not paperwork.',
    keywords:
      'ClinicalOS launch, Perkily rebrand, medical practice AI, ambient clinical documentation, healthcare automation, Perkily Health Technologies',
    ogImage: '/favicon-32x32.png',
    content: (
      <>
        <p className="text-[17px] text-white/55 font-light leading-[1.8]">
          Today we are launching something we have been building toward since{' '}
          <strong className="font-normal text-white/75">2024</strong>: a single product, a clear identity, and a
          platform designed to give clinicians their time back. Perkily Health Technologies is now{' '}
          <strong className="font-normal text-white/75">ClinicalOS</strong> — AI that runs your medical practice.
        </p>

        <PullQuote>
          We are not building another dashboard. We are building the operating system for outpatient care.
        </PullQuote>

        <h2 className="mt-14 mb-5 text-2xl sm:text-3xl font-light tracking-tight text-white">
          Why we rebranded
        </h2>
        <p className="text-[16px] text-white/55 font-light leading-[1.8]">
          Healthcare software has a habit of multiplying. One tool for scheduling. Another for notes. A third for
          billing. Each with its own login, its own learning curve, its own pile of admin. Clinicians end up working
          for their software instead of the other way around.
        </p>
        <p className="mt-5 text-[16px] text-white/55 font-light leading-[1.8]">
          We stepped back and asked a simpler question: what if one system could handle the work that happens{' '}
          <em>after</em> the patient leaves the room? Documentation. Coding. Claims. Follow-up. The rebrand reflects
          that focus — one company, one product, one promise.
        </p>

        <h2 className="mt-14 mb-5 text-2xl sm:text-3xl font-light tracking-tight text-white">
          What ClinicalOS does
        </h2>
        <p className="text-[16px] text-white/55 font-light leading-[1.8]">
          ClinicalOS listens during the visit, drafts structured notes, prepares claim packets, and handles patient
          communication — quietly, in the background, with human review at every step.
        </p>

        <div className="my-10 grid sm:grid-cols-3 gap-4">
          <Stat value="Ambient" label="Documentation that drafts itself from the conversation" />
          <Stat value="Claims" label="Pre-validated packets ready before you leave" />
          <Stat value="Follow-up" label="Patient communication without the back-and-forth" />
        </div>

        <ul className="mt-6 space-y-4 text-[16px] text-white/55 font-light leading-[1.8]">
          <li className="flex gap-4">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
            <span>
              <strong className="font-normal text-white/70">Ambient documentation</strong> — capture the visit,
              receive a draft note in minutes, sign off same-day.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
            <span>
              <strong className="font-normal text-white/70">Claims automation</strong> — coding suggestions and
              pre-submission checks tied directly to the clinical record.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
            <span>
              <strong className="font-normal text-white/70">Practice operations</strong> — scheduling, patient
              messaging, and revenue cycle in one workflow.
            </span>
          </li>
        </ul>

        <h2 className="mt-14 mb-5 text-2xl sm:text-3xl font-light tracking-tight text-white">
          A new look, same standard
        </h2>
        <p className="text-[16px] text-white/55 font-light leading-[1.8]">
          The new site reflects how we think about the product: calm, precise, and built for people who do not have
          time for noise. Dark surfaces. Clear typography. One idea per screen. No clutter, no stock-photo heroics —
          just the product and the outcome.
        </p>
        <p className="mt-5 text-[16px] text-white/55 font-light leading-[1.8]">
          Under the hood, nothing changed about our commitment to security. ClinicalOS remains built on
          HIPAA-aligned infrastructure with audit trails, encryption, and human oversight at every step.
        </p>

        <h2 className="mt-14 mb-5 text-2xl sm:text-3xl font-light tracking-tight text-white">
          Built by clinicians, for clinicians
        </h2>
        <p className="text-[16px] text-white/55 font-light leading-[1.8]">
          Perkily Health Technologies was founded in 2024 with a single mission: eliminate the admin burden that
          keeps physicians from practicing at the top of their license. We are based in Johannesburg and building
          for outpatient practices everywhere.
        </p>
        <p className="mt-5 text-[16px] text-white/55 font-light leading-[1.8]">
          This launch is the beginning — not the finish line. We are onboarding practices now and expanding
          integrations across EHR platforms and specialties throughout 2025.
        </p>

        <div className="mt-14 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-4">Get started</p>
          <p className="text-xl sm:text-2xl font-light tracking-tight text-white mb-3">
            Ready to see ClinicalOS in your practice?
          </p>
          <p className="text-[15px] text-white/45 font-light mb-6 max-w-md mx-auto">
            Talk to our team about a demo. We will walk you through ambient documentation, claims, and onboarding —
            no commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </>
    ),
  },
];

export const getAllTags = (): string[] => {
  const set = new Set<string>();
  blogPosts.forEach((p) => set.add(p.tag));
  return ['All', ...Array.from(set)];
};
