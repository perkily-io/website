import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogPosts as fallbackPosts } from './blogData';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
// Note: Install react-markdown for full markdown support: npm install react-markdown
// For now, rendering as plain text with whitespace preservation

type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readingTime: string;
  coverImage: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  ogImage?: string;
};

const BlogPost: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'published')
          .single();

        if (error || !data) {
          // Try fallback data
          const fallbackPost = fallbackPosts.find((p) => p.slug === slug);
          if (fallbackPost) {
            setPost({
              slug: fallbackPost.slug,
              tag: fallbackPost.tag,
              title: fallbackPost.title,
              excerpt: fallbackPost.excerpt,
              date: fallbackPost.date,
              displayDate: fallbackPost.displayDate,
              readingTime: fallbackPost.readingTime,
              coverImage: fallbackPost.coverImage,
              content: typeof fallbackPost.content === 'string' ? fallbackPost.content : '',
            });
          } else {
            setNotFound(true);
          }
          return;
        }

        // Transform Supabase data
        setPost({
          slug: data.slug,
          tag: data.tag,
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          displayDate: data.display_date || new Date(data.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          readingTime: data.reading_time || '5 min',
          coverImage: data.cover_image,
          content: data.content,
          metaTitle: data.meta_title,
          metaDescription: data.meta_description,
          keywords: data.keywords,
          ogImage: data.og_image,
        });
      } catch (error) {
        console.error('Error fetching post:', error);
        // Try fallback data
        const fallbackPost = fallbackPosts.find((p) => p.slug === slug);
        if (fallbackPost) {
          setPost({
            slug: fallbackPost.slug,
            tag: fallbackPost.tag,
            title: fallbackPost.title,
            excerpt: fallbackPost.excerpt,
            date: fallbackPost.date,
            displayDate: fallbackPost.displayDate,
            readingTime: fallbackPost.readingTime,
            coverImage: fallbackPost.coverImage,
            content: typeof fallbackPost.content === 'string' ? fallbackPost.content : '',
          });
        } else {
          setNotFound(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-white/10">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-white/60" />
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !post) {
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
        title={post.metaTitle || `${post.title} — Perkily Journal`}
        description={post.metaDescription || post.excerpt}
        canonical={`https://www.perkily.io/blog/${post.slug}`}
        ogType="article"
        ogImage={post.ogImage || post.coverImage}
        articlePublishedTime={post.date}
        articleSection={post.tag}
        articleTags={[post.tag]}
        keywords={post.keywords || `${post.tag.toLowerCase()}, healthcare, AI, medical technology, ${post.title}`}
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
          <div className="text-white/80 whitespace-pre-wrap leading-relaxed">{post.content}</div>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;

