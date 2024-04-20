/** @type {import('next').NextConfig} */
const nextConfig = {
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
