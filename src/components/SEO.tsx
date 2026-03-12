import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  // Article-specific fields
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
}

const DEFAULT_OG_IMAGE = 'https://www.perkily.io/OGimage.jpeg';

const SEO = ({
  title,
  description,
  canonical = 'https://perkily.io',
  keywords = 'healthcare, AI, medical technology, patient care, healthcare rewards, medical professionals',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor = 'Perkily Team',
  articleSection,
  articleTags = [],
  faqItems = []
}: SEOProps) => {
  const fullTitle = `${title} | Perkily Health Technologies`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https://www.perkily.io${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;
  
  return (
    <Helmet>
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="1kGcpv1KSg7mvUA2ACPcy8_na1rW6h6292aGyOcjHvI" />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Perkily Health Technologies" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@HelloPerkily" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO Tags */}
      <meta name="application-name" content="Perkily" />
      <meta name="apple-mobile-web-app-title" content="Perkily" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
      {ogType === 'article' ? (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "image": imageUrl,
            "datePublished": articlePublishedTime,
            "dateModified": articleModifiedTime || articlePublishedTime,
            "author": {
              "@type": "Organization",
              "name": articleAuthor
            },
            "publisher": {
              "@type": "Organization",
              "name": "Perkily Health Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://perkily.io/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonical
            },
            ...(articleSection && { "articleSection": articleSection }),
            ...(articleTags.length > 0 && { "keywords": articleTags.join(", ") })
          })}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Perkily Health Technologies",
            "url": "https://perkily.io",
            "logo": "https://perkily.io/logo.png",
            "sameAs": [
              "https://twitter.com/HelloPerkily",
              "https://www.linkedin.com/company/perkily-io",
              "https://www.instagram.com/perkily.io"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+27-12-345-6789",
              "contactType": "customer service",
              "email": "hello@perkily.io",
              "areaServed": "ZA",
              "availableLanguage": "English"
            }
          })}
        </script>
      )}
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && articlePublishedTime && (
        <>
          <meta property="article:published_time" content={articlePublishedTime} />
          {articleModifiedTime && (
            <meta property="article:modified_time" content={articleModifiedTime} />
          )}
          {articleAuthor && (
            <meta property="article:author" content={articleAuthor} />
          )}
          {articleSection && (
            <meta property="article:section" content={articleSection} />
          )}
          {articleTags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 