/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://sticker-slime-web.vercel.app',
    generateRobotsTxt: true,
};
