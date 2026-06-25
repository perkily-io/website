import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { blogPosts as fallbackPosts, getAllTags } from './blogData';
import { ArrowRight, Loader2 } from 'lucide-react';
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
};

const Blog: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState<string[]>(['All']);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .order('date', { ascending: false });

        if (error) {
          console.error('Error fetching posts:', error);
        }

        const fallbackSlugs = new Set(fallbackPosts.map((p) => p.slug));
        const fromDb: BlogPost[] = (data || [])
          .filter((post: Record<string, string>) => fallbackSlugs.has(post.slug))
          .map((post: Record<string, string>) => ({
          slug: post.slug,
          tag: post.tag,
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          displayDate:
            post.display_date ||
            new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          readingTime: post.reading_time || '5 min',
          coverImage: post.cover_image,
        }));
        const dbSlugs = new Set(fromDb.map((p) => p.slug));
        const fromFallback = fallbackPosts.filter((p) => !dbSlugs.has(p.slug)) as BlogPost[];
        const merged = [...fromDb, ...fromFallback].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(merged);
        const uniqueTags = new Set(merged.map((p) => p.tag));
        setTags(['All', ...Array.from(uniqueTags)]);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts(fallbackPosts as BlogPost[]);
        setTags(getAllTags());
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = React.useMemo(
    () => (activeTag === 'All' ? posts : posts.filter((p) => p.tag === activeTag)),
    [activeTag, posts]
  );

  const [featured, ...rest] = filteredPosts;

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-7 w-7 animate-spin text-white/40" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="Blog | ClinicalOS by Perkily"
        description="Product updates, clinical workflow insights, and implementation guides from the Perkily team."
        canonical="https://www.perkily.io/blog"
        keywords="healthcare AI blog, clinical documentation, medical practice automation, Perkily"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-[800px] mx-auto text-center">
          <RevealOnView>
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-6">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Launch notes
            </h1>
            <p className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-[520px] mx-auto">
              Updates from Perkily Health Technologies as we build ClinicalOS.
            </p>
          </RevealOnView>
        </div>
      </section>

      {/* Filters + posts */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <RevealOnView>
            {tags.length > 2 && (
              <div className="flex flex-wrap items-center gap-2 mb-10 sm:mb-14">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    className={cn(
                      'px-4 py-2 rounded-full text-[13px] font-light transition-all',
                      activeTag === tag
                        ? 'bg-white text-black'
                        : 'border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </RevealOnView>

          {filteredPosts.length === 0 ? (
            <RevealOnView>
              <div className="rounded-[2rem] border border-white/10 bg-surface p-12 text-center">
                <p className="text-white/45 font-light">No posts in this category yet.</p>
              </div>
            </RevealOnView>
          ) : (
            <>
              {featured && (
                <RevealOnView>
                  <Link
                    to={`/blog/${featured.slug}`}
                    className="group block rounded-[2rem] border border-white/10 bg-surface overflow-hidden mb-6 sm:mb-8 hover:border-white/15 transition-colors"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="font-mono text-[10px] tracking-[0.15em] text-white/30 uppercase">
                            {featured.tag}
                          </span>
                          <span className="text-[12px] text-white/25">
                            {featured.displayDate} · {featured.readingTime}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-snug group-hover:text-white/90 transition-colors">
                          {featured.title}
                        </h2>
                        <p className="mt-3 text-[15px] text-white/45 font-light leading-relaxed line-clamp-3">
                          {featured.excerpt}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-white/60 group-hover:text-white transition-colors">
                          Read post
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                      <div
                        className={cn(
                          'relative min-h-[220px] md:min-h-0 border-t md:border-t-0 md:border-l border-white/10',
                          featured.coverImage?.includes('logo-white') || isLogoCover(featured.coverImage)
                            ? 'flex items-center justify-center bg-white/[0.02] p-10'
                            : 'bg-white/[0.02]'
                        )}
                      >
                        <img
                          src={featured.coverImage}
                          alt=""
                          className={
                            isLogoCover(featured.coverImage)
                              ? 'h-16 w-auto object-contain opacity-80'
                              : 'absolute inset-0 h-full w-full object-cover opacity-80'
                          }
                        />
                      </div>
                    </div>
                  </Link>
                </RevealOnView>
              )}

              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {rest.map((post, i) => (
                    <RevealOnView key={post.slug} delay={i * 0.05}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group flex flex-col h-full rounded-[1.5rem] border border-white/10 bg-surface overflow-hidden hover:border-white/15 transition-colors"
                      >
                        <div
                          className={cn(
                            'relative h-44 border-b border-white/10 bg-white/[0.02]',
                            post.coverImage?.includes('logo-white') || isLogoCover(post.coverImage)
                              ? 'flex items-center justify-center p-6'
                              : ''
                          )}
                        >
                          <img
                            src={post.coverImage}
                            alt=""
                            className={
                              isLogoCover(post.coverImage)
                                ? 'h-12 w-auto object-contain opacity-70'
                                : 'h-full w-full object-cover opacity-80'
                            }
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="font-mono text-[10px] tracking-[0.15em] text-white/30 uppercase">
                              {post.tag}
                            </span>
                            <span className="text-[11px] text-white/25">
                              {post.displayDate} · {post.readingTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-light text-white leading-snug group-hover:text-white/90 transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-[14px] text-white/40 font-light leading-relaxed line-clamp-2 flex-1">
                            {post.excerpt}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-white/50 group-hover:text-white/70 transition-colors">
                            Read more
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </Link>
                    </RevealOnView>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
