import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogPosts } from './blogData';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type Props = {
  slug?: string;
};

const BlogPost: React.FC<Props> = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-white/10">
        <Navbar />
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-semibold">Post not found</h1>
          <a href="/blog" className="mt-6 inline-flex items-center gap-2 text-white/80 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </a>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO
        title={`${post.title} — Perkily Journal`}
        description={post.excerpt}
        canonical={`https://www.perkily.io/blog/${post.slug}`}
      />
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-24">
        <a href="/blog" className="mb-8 inline-flex items-center gap-2 text-white/70 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </a>

        <header>
          <div className="inline-flex items-center gap-2 text-xs text-white/70">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide">{post.tag}</span>
            <span className="text-white/50">{post.displayDate}</span>
            <span className="text-white/50">• {post.readingTime}</span>
          </div>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-white/70">{post.excerpt}</p>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <img src={post.coverImage} alt="" className="h-80 w-full object-cover" />
        </div>

        <section className="prose prose-invert prose-headings:scroll-mt-24 prose-a:text-white/90 prose-a:no-underline hover:prose-a:underline prose-strong:text-white/90 mt-10 max-w-none">
          {post.content}
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;

