/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "/api/authentication/login",
      },
      {
        source: "/api/callback",
        destination: "/api/authentication/login",
      },
    ];
  },
};

export default nextConfig;
