// module.exports = {
//   siteUrl: 'https://sumantyres.in',
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sumantyres.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.9,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',  // Applies to all crawlers
        allow: '/',      // Allow crawling of all pages
      },
    ],
    additionalSitemaps: [],
  },
  // Give the sitemap page and homepage top priority
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/sitemap-page': 1.0,
      '/tyres': 0.95,
      '/battery': 0.95,
      '/oil': 0.95,
      '/contact': 0.9,
      '/about': 0.85,
      '/gallery': 0.8,
      '/warrantyandGuarantee': 0.75,
    };
    return {
      loc: path,
      changefreq: path === '/' || path === '/sitemap-page' ? 'daily' : 'weekly',
      priority: priorityMap[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
