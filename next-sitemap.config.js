// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.wildwindtattoo.com',
  generateRobotsTxt: false, // Do not generate robots.txt
  exclude: [], // Empty array to include all pages
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom transformation for each page entry
    return {
      loc: path, // Use the path as-is
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => {
    // You can add additional pages here if needed
    return []
  },
}