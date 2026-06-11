import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard crawlers + search engines
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
      {
        // OpenAI GPTBot — ALLOW for AI Overview / ChatGPT citations
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
      {
        // Anthropic ClaudeBot — ALLOW for Claude citations
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
      {
        // Perplexity AI — ALLOW for Perplexity citations
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
      {
        // Google Gemini / AI Overviews — ALLOW for SGE/AI Overview inclusion
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
      {
        // Meta AI crawler
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
      {
        // Common Crawl (training data corpus — beneficial for AI model awareness)
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/dashboard/', '/sign-in/', '/sign-up/'],
      },
    ],
    sitemap: 'https://sprayfoaminsurance.com/sitemap.xml',
  };
}
