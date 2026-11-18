import { MetadataRoute } from 'next';
import { projectsList } from '@/data/projectsData';
import { researchArticles } from '@/data/researchData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dpulseai.com';

  const staticRoutes = [
    '',
    '/enterprise-ai',
    '/physical-ai',
    '/agriculture',
    '/platform',
    '/platform/work-chips',
    '/research',
    '/research/literature',
    '/projects',
    '/partners',
    '/about',
    '/careers',
    '/contact',
    '/book-call',
    '/privacy',
    '/terms',
    '/applied-domains',
    '/industries',
    '/what-we-do',
    '/video',
    '/security',
    '/compliance',
    '/governance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/enterprise-ai') || route.startsWith('/physical-ai') || route.startsWith('/agriculture') ? 0.9 : 0.8,
  }));

  const dynamicProjectRoutes = projectsList.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const dynamicResearchRoutes = researchArticles.map((article) => ({
    url: `${baseUrl}/research/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicProjectRoutes, ...dynamicResearchRoutes];
}
