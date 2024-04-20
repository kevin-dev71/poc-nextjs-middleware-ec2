/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dfstudio-d420.kxcdn.com",
      },
    ],
  }
};

export default nextConfig;
