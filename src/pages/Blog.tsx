import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { blogPosts as fallbackPosts, getAllTags } from './blogData';
import { ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
          // Fallback to static data on error
          setPosts(fallbackPosts as BlogPost[]);
          setTags(getAllTags());
          return;
        }

        if (data && data.length > 0) {
          // Transform Supabase data to match component expectations
          const transformedPosts: BlogPost[] = data.map((post: any) => ({
            slug: post.slug,
            tag: post.tag,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
            displayDate: post.display_date || new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            readingTime: post.reading_time || '5 min',
            coverImage: post.cover_image,
          }));
          setPosts(transformedPosts);
          
          // Get unique tags
          const uniqueTags = new Set(transformedPosts.map(p => p.tag));
          setTags(['All', ...Array.from(uniqueTags)]);
        } else {
          // No posts in database, use fallback
          setPosts(fallbackPosts as BlogPost[]);
          setTags(getAllTags());
        }
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
      <main className="min-h-screen bg-black text-white selection:bg-white/10">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-white/60" />
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO
        title="Perkily Journal"
        description="Thoughtful product updates, design notes, and platform thinking from the Perkily team."
        canonical="https://www.perkily.io/blog"
      />
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,0.35),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-10 sm:pt-32 sm:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              Perkily Journal
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ideas for better care</h1>
            <p className="mt-4 text-white/70">
              Product updates, design principles, and platform perspectives from the team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 sm:pb-16">
        <Tabs value={activeTag} onValueChange={setActiveTag}>
          <div className="flex items-center justify-between gap-4">
            <TabsList className="bg-white/5">
              {tags.map((tag) => (
                <TabsTrigger key={tag} value={tag}>
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
            <a href="/" className="hidden sm:inline-flex">
              <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                Back home
              </Button>
            </a>
          </div>

          <TabsContent value={activeTag} className="mt-8">
            {/* Featured + Grid */}
            {featured && (
              <a
                href={`/blog/${featured.slug}`}
                className="group relative isolate block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-10"
              >
                <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(50%_50%_at_100%_60%,rgba(139,92,246,0.12),transparent_60%)]" />
                <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs text-white/70">
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide">{featured.tag}</span>
                      <span className="text-white/50">{featured.displayDate}</span>
                      <span className="text-white/50">• {featured.readingTime}</span>
                    </div>
                    <h2 className="mt-3 text-pretty text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl group-hover:underline">
                      {featured.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-white/70">{featured.excerpt}</p>
                    <div className="mt-5 inline-flex items-center text-sm text-white/80">
                      Read post <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:h-full">
                      <img src={featured.coverImage} alt="" className="h-full w-full object-cover" />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_40%)]" />
                    </div>
                  </div>
                </div>
              </a>
            )}

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="relative h-full overflow-hidden border-white/10 bg-white/5">
                    <div className="relative h-40 w-full overflow-hidden border-b border-white/10 bg-white/5">
                      <img src={post.coverImage} alt="" className="h-full w-full object-cover" />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_40%)]" />
                    </div>
                    <CardHeader>
                      <div className="inline-flex items-center gap-2 text-xs text-white/70">
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide">{post.tag}</span>
                        <span className="text-white/50">{post.displayDate}</span>
                        <span className="text-white/50">• {post.readingTime}</span>
                      </div>
                      <CardTitle className="mt-2 group-hover:underline">{post.title}</CardTitle>
                      <CardDescription className="text-white/70">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-1 inline-flex items-center text-sm text-white/80">
                        Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;

