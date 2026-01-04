import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Save, Eye, Image as ImageIcon, FileText, Search, Lock } from 'lucide-react';

const ADMIN_PASSWORD = 'PerkilyBlog2026#';

const AdminBlog = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Check if already authenticated in session
  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminBlogAuth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError(false);
      sessionStorage.setItem('adminBlogAuth', 'authenticated');
    } else {
      setPasswordError(true);
      setPassword('');
    }
  };

  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    tag: 'Product',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    displayDate: '',
    readingTime: '5 min',
    coverImage: '',
    // SEO fields
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    ogImage: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from title
    if (field === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
    
    // Auto-generate meta title from title if empty
    if (field === 'title' && !formData.metaTitle) {
      setFormData(prev => ({ ...prev, metaTitle: value }));
    }
    
    // Auto-generate meta description from excerpt if empty
    if (field === 'excerpt' && !formData.metaDescription) {
      setFormData(prev => ({ ...prev, metaDescription: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blog post data:', formData);
    // Here you would save to your backend/database
    alert('Blog post saved! (This is a demo - integrate with your backend)');
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <Layout>
        <SEO 
          title="Admin Blog — Create & Edit Posts"
          description="Admin interface for creating and managing blog posts"
          canonical="https://www.perkily.io/admin/blog"
          noindex={true}
        />
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-24">
          <Card className="max-w-md w-full border-white/10 bg-white/[0.02]">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white/70" />
              </div>
              <CardTitle className="text-white text-center">Admin Access Required</CardTitle>
              <CardDescription className="text-white/60 text-center">
                Please enter the password to access the blog admin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="adminPassword" className="text-white/90">Password</Label>
                  <Input
                    id="adminPassword"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(false);
                    }}
                    placeholder="Enter password"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    autoFocus
                  />
                  {passwordError && (
                    <p className="text-sm text-red-400">Incorrect password. Please try again.</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                >
                  Access Admin
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Admin Blog — Create & Edit Posts"
        description="Admin interface for creating and managing blog posts"
        canonical="https://www.perkily.io/admin/blog"
        noindex={true}
      />

      <div className="min-h-screen bg-black text-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
              Blog Admin
            </h1>
            <p className="text-lg text-white/60 font-light">
              Create and manage blog posts with SEO optimization
            </p>
          </div>

          <Tabs defaultValue="create" className="space-y-8">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="create" className="data-[state=active]:bg-white/10">
                <FileText className="h-4 w-4 mr-2" />
                Create Post
              </TabsTrigger>
              <TabsTrigger value="seo" className="data-[state=active]:bg-white/10">
                <Search className="h-4 w-4 mr-2" />
                SEO Settings
              </TabsTrigger>
              <TabsTrigger value="preview" className="data-[state=active]:bg-white/10">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <TabsContent value="create" className="space-y-6 mt-6">
                <Card className="border-white/10 bg-white/[0.02]">
                  <CardHeader>
                    <CardTitle className="text-white">Post Content</CardTitle>
                    <CardDescription className="text-white/60">
                      Basic information about your blog post
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white/90">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                        placeholder="Enter blog post title"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        required
                      />
                      <p className="text-xs text-white/50">
                        This will auto-generate the slug and meta title if left empty
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="slug" className="text-white/90">Slug *</Label>
                        <div className="flex gap-2">
                          <Input
                            id="slug"
                            value={formData.slug}
                            onChange={(e) => handleChange('slug', e.target.value)}
                            placeholder="url-friendly-slug"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={generateSlug}
                            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                          >
                            Generate
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tag" className="text-white/90">Category *</Label>
                        <Select value={formData.tag} onValueChange={(value) => handleChange('tag', value)}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-white/10">
                            <SelectItem value="Product">Product</SelectItem>
                            <SelectItem value="Design">Design</SelectItem>
                            <SelectItem value="Platform">Platform</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt" className="text-white/90">Excerpt *</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => handleChange('excerpt', e.target.value)}
                        placeholder="A brief summary of the post (used in previews and meta description)"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
                        required
                      />
                      <p className="text-xs text-white/50">
                        {formData.excerpt.length} characters (recommended: 150-160 for SEO)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content" className="text-white/90">Content *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => handleChange('content', e.target.value)}
                        placeholder="Write your blog post content here..."
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[400px] font-mono text-sm"
                        required
                      />
                      <p className="text-xs text-white/50">
                        Supports markdown formatting
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-white/90">Publish Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          className="bg-white/5 border-white/10 text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="displayDate" className="text-white/90">Display Date</Label>
                        <Input
                          id="displayDate"
                          value={formData.displayDate}
                          onChange={(e) => handleChange('displayDate', e.target.value)}
                          placeholder="Sep 2024"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="readingTime" className="text-white/90">Reading Time</Label>
                        <Input
                          id="readingTime"
                          value={formData.readingTime}
                          onChange={(e) => handleChange('readingTime', e.target.value)}
                          placeholder="5 min"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverImage" className="text-white/90">Cover Image URL *</Label>
                      <div className="flex gap-2">
                        <Input
                          id="coverImage"
                          value={formData.coverImage}
                          onChange={(e) => handleChange('coverImage', e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                          onClick={() => window.open('https://unsplash.com', '_blank')}
                        >
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Find Image
                        </Button>
                      </div>
                      {formData.coverImage && (
                        <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
                          <img 
                            src={formData.coverImage} 
                            alt="Cover preview" 
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo" className="space-y-6 mt-6">
                <Card className="border-white/10 bg-white/[0.02]">
                  <CardHeader>
                    <CardTitle className="text-white">SEO Optimization</CardTitle>
                    <CardDescription className="text-white/60">
                      Configure search engine optimization settings for better discoverability
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="metaTitle" className="text-white/90">Meta Title</Label>
                      <Input
                        id="metaTitle"
                        value={formData.metaTitle}
                        onChange={(e) => handleChange('metaTitle', e.target.value)}
                        placeholder={formData.title || "Post title | Perkily Journal"}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                      <p className="text-xs text-white/50">
                        {formData.metaTitle.length || formData.title.length} / 60 characters (recommended: 50-60)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="metaDescription" className="text-white/90">Meta Description</Label>
                      <Textarea
                        id="metaDescription"
                        value={formData.metaDescription}
                        onChange={(e) => handleChange('metaDescription', e.target.value)}
                        placeholder={formData.excerpt || "Enter a compelling description for search results"}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
                      />
                      <p className="text-xs text-white/50">
                        {formData.metaDescription.length || formData.excerpt.length} / 160 characters (recommended: 150-160)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="keywords" className="text-white/90">Keywords</Label>
                      <Input
                        id="keywords"
                        value={formData.keywords}
                        onChange={(e) => handleChange('keywords', e.target.value)}
                        placeholder="healthcare, AI, medical technology, clinical"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                      <p className="text-xs text-white/50">
                        Comma-separated keywords for SEO
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogImage" className="text-white/90">Open Graph Image URL</Label>
                      <Input
                        id="ogImage"
                        value={formData.ogImage}
                        onChange={(e) => handleChange('ogImage', e.target.value)}
                        placeholder={formData.coverImage || "https://images.unsplash.com/..."}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                      <p className="text-xs text-white/50">
                        Recommended: 1200x630px. Defaults to cover image if not provided.
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 space-y-2">
                      <h4 className="text-sm font-medium text-white">SEO Checklist</h4>
                      <ul className="text-xs text-white/60 space-y-1">
                        <li className={formData.title ? 'text-emerald-400' : ''}>
                          ✓ Title is set
                        </li>
                        <li className={formData.excerpt.length >= 150 ? 'text-emerald-400' : ''}>
                          ✓ Excerpt is 150+ characters
                        </li>
                        <li className={formData.coverImage ? 'text-emerald-400' : ''}>
                          ✓ Cover image is set
                        </li>
                        <li className={formData.keywords ? 'text-emerald-400' : ''}>
                          ✓ Keywords are defined
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preview" className="space-y-6 mt-6">
                <Card className="border-white/10 bg-white/[0.02]">
                  <CardHeader>
                    <CardTitle className="text-white">Preview</CardTitle>
                    <CardDescription className="text-white/60">
                      How your blog post will appear
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {formData.coverImage && (
                        <div className="rounded-lg overflow-hidden border border-white/10">
                          <img 
                            src={formData.coverImage} 
                            alt="Cover" 
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="inline-flex items-center gap-2 text-xs text-white/70 mb-4">
                          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">
                            {formData.tag}
                          </span>
                          <span className="text-white/50">
                            {formData.displayDate || new Date(formData.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </span>
                          <span className="text-white/50">• {formData.readingTime}</span>
                        </div>
                        <h2 className="text-3xl font-semibold text-white mb-4">
                          {formData.title || 'Untitled Post'}
                        </h2>
                        <p className="text-white/70 text-lg mb-6">
                          {formData.excerpt || 'No excerpt provided'}
                        </p>
                        <div className="prose prose-invert max-w-none">
                          <div className="text-white/80 whitespace-pre-wrap">
                            {formData.content || 'Content will appear here...'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <Button
                  type="button"
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/blog'}
                >
                  Cancel
                </Button>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    Save as Draft
                  </Button>
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-6"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Publish Post
                  </Button>
                </div>
              </div>
            </form>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminBlog;




