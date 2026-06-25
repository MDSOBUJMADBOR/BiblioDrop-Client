/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // ✅ specific domain
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ fallback image
      },
    ],
  },
};

export default nextConfig;