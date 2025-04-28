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
}

const SEO = ({
  title,
  description,
  canonical = 'https://perkily.io',
  keywords = 'healthcare, AI, medical technology, patient care, healthcare rewards, medical professionals',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  ogImage
}: SEOProps) => {
  const fullTitle = `${title} | Perkily Health Technologies`;
  
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
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Perkily Health Technologies" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@HelloPerkily" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Additional SEO Tags */}
      <meta name="application-name" content="Perkily" />
      <meta name="apple-mobile-web-app-title" content="Perkily" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
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
    </Helmet>
  );
};

export default SEO; 