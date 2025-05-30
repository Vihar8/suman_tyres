// module.exports = {
//   siteUrl: 'https://sumantyres.vercel.app',
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sumantyres.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',  // Applies to all crawlers
        allow: '/',      // Allow crawling of all pages
      },
    ],
    // If you want to add extra sitemaps manually, add URLs here
    additionalSitemaps: [
    ],
  },
};
