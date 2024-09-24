/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "plus.unsplash.com" }],
  },
  serverRuntimeConfig: {
    host: "10.0.0.110",
    port: 5174,
  }
};

export default nextConfig;
