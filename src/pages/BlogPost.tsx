import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { blogPosts as fallbackPosts } from './blogData';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { RevealOnView } from '@/components/home/RevealOnView';
import { cn } from '@/lib/utils';

const isLogoCover = (url?: string) =>
  Boolean(url && (url.includes('logo-white') || url.includes('favicon')));

type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readingTime: string;
  coverImage: string;
  content: string | React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  ogImage?: string;
};

const BlogPostPage: React.FC = () => {
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
              content:
                typeof fallbackPost.content === 'string'
                  ? fallbackPost.content
                  : fallbackPost.content,
              metaTitle: fallbackPost.metaTitle,
              metaDescription: fallbackPost.metaDescription,
              keywords: fallbackPost.keywords,
              ogImage: fallbackPost.ogImage,
            });
          } else {
            setNotFound(true);
          }
          return;
        }

        setPost({
          slug: data.slug,
          tag: data.tag,
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          displayDate:
            data.display_date ||
            new Date(data.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
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
            content:
              typeof fallbackPost.content === 'string'
                ? fallbackPost.content
                : fallbackPost.content,
            metaTitle: fallbackPost.metaTitle,
            metaDescription: fallbackPost.metaDescription,
            keywords: fallbackPost.keywords,
            ogImage: fallbackPost.ogImage,
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
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-7 w-7 animate-spin text-white/40" />
        </div>
      </Layout>
    );
  }

  if (notFound || !post) {
    return (
      <Layout>
        <section className="px-4 sm:px-6 py-32 text-center">
          <h1 className="text-3xl font-light text-white mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[14px]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        canonical={`https://www.perkily.io/blog/${post.slug}`}
        ogType="article"
        ogImage={post.ogImage || post.coverImage}
        articlePublishedTime={post.date}
        articleSection={post.tag}
        articleTags={[post.tag]}
        keywords={
          post.keywords ||
          `${post.tag.toLowerCase()}, healthcare, AI, medical technology, Perkily, ${post.title}`
        }
      />

      <article className="px-4 sm:px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-[720px] mx-auto">
          <RevealOnView>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All posts
            </Link>

            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-mono text-[10px] tracking-[0.15em] text-white/30 uppercase">
                  {post.tag}
                </span>
                <span className="text-[12px] text-white/25">
                  {post.displayDate} · {post.readingTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
                {post.title}
              </h1>
              <p className="mt-5 text-lg text-white/45 font-light leading-relaxed">{post.excerpt}</p>
            </header>
          </RevealOnView>

          <RevealOnView delay={0.08}>
            <div
              className={cn(
                'overflow-hidden rounded-[1.5rem] border border-white/10 mb-10',
                post.coverImage?.includes('logo-white') || isLogoCover(post.coverImage)
                  ? 'flex items-center justify-center bg-surface p-10 md:p-14'
                  : 'bg-surface'
              )}
            >
              <img
                src={post.coverImage}
                alt=""
                className={
                  isLogoCover(post.coverImage)
                    ? 'h-24 w-auto object-contain opacity-80 md:h-28'
                    : 'w-full h-64 sm:h-80 object-cover opacity-90'
                }
              />
            </div>
          </RevealOnView>

          <RevealOnView delay={0.12}>
            <section className="prose prose-invert max-w-none prose-headings:font-light prose-headings:tracking-tight prose-p:text-white/55 prose-p:font-light prose-p:leading-relaxed prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-strong:text-white/80">
              {typeof post.content === 'string' ? (
                <div className="text-[16px] text-white/55 whitespace-pre-wrap leading-[1.8] font-light">
                  {post.content}
                </div>
              ) : (
                <div className="text-[16px] text-white/55 leading-[1.8] font-light">{post.content}</div>
              )}
            </section>
          </RevealOnView>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
