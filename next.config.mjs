/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "hotelnine.mn",
      "what3words.com",
      "maps.gstatic.com",
      "maps.googleapis.com",
      "www.google.com",
      "www.tripadvisor.com",
    ],
  },
};

export default nextConfig;
