import React from 'react';

export type BlogPost = {
  slug: string;
  tag: 'Product' | 'Design' | 'Platform' | string;
  title: string;
  excerpt: string;
  date: string; // ISO or human string
  displayDate: string; // Friendly display
  readingTime: string;
  coverImage: string;
  content: React.ReactNode;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'meet-fleming-guidance-that-earns-your-trust',
    tag: 'Product',
    title: 'Meet Fleming — guidance that earns your trust',
    excerpt:
      'Why we built Fleming the way we did: careful by default, grounded in safety checks, and woven into the care journey.',
    date: '2024-09-10',
    displayDate: 'Sep 2024',
    readingTime: '6 min',
    coverImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2400&auto=format&fit=crop',
    content: (
      <>
        <p>
          Fleming is designed to help people ask better questions, understand safe next steps, and feel confident when
          navigating care. We built it to be careful by default, grounded in safety checks, and woven into the broader
          Perkily experience — booking, rewards, and follow‑up.
        </p>
        <p>
          The core principles are simple: structured intake to reduce back‑and‑forth, clear escalation paths when
          red‑flags are present, and explainable outputs that clinicians can trust. It is not a replacement for clinical
          judgment — it’s a companion that helps everyone get to clarity faster.
        </p>
        <p>
          In this post, we share how we think about trust, safety, and the product decisions that brought Fleming to
          life.
        </p>
      </>
    ),
  },
  {
    slug: 'designing-for-calm-in-healthcare-software',
    tag: 'Design',
    title: 'Designing for calm in healthcare software',
    excerpt:
      'Interfaces that reduce cognitive load help everyone — patients, clinicians, students. Here’s how we think about it.',
    date: '2024-08-15',
    displayDate: 'Aug 2024',
    readingTime: '5 min',
    coverImage:
      'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2400&auto=format&fit=crop',
    content: (
      <>
        <p>
          Calm software is respectful software. We prioritise clarity, generous spacing, and predictable motion so that
          the interface gets out of the way and the work can happen.
        </p>
        <p>
          This approach shows up across Perkily — from booking flows to Fleming — and it’s especially important in
          healthcare where context‑switching is constant.
        </p>
      </>
    ),
  },
  {
    slug: 'rewards-that-change-behaviour-without-noise',
    tag: 'Platform',
    title: 'Rewards that change behaviour (without noise)',
    excerpt:
      'Building a rewards system that’s fair, transparent, and genuinely useful — not just another points program.',
    date: '2024-07-12',
    displayDate: 'Jul 2024',
    readingTime: '7 min',
    coverImage:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2400&auto=format&fit=crop',
    content: (
      <>
        <p>
          Perkily Rewards focus on meaningful actions and partners people love. The aim is to nudge healthier habits
          without the noise and dark‑patterns of traditional programs.
        </p>
        <p>
          We’re transparent about how rewards are earned and redeemed, and we design the system to be fair across
          different kinds of users.
        </p>
      </>
    ),
  },
];

export const getAllTags = (): string[] => {
  const set = new Set<string>();
  blogPosts.forEach((p) => set.add(p.tag));
  return ['All', ...Array.from(set)];
};

