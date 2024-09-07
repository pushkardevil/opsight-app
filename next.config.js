/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "images.unsplash.com",
      "www.manageengine.com",
      "cdn.dribbble.com",
    ],
      unoptimized: true
  },
};

module.exports = nextConfig;
