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
        destination: "/api/authentication/callback",
      },
      {
        source: "/api/refresh-token",
        destination: "/api/authentication/refresh-token",
      },
    ];
  },
};

export default nextConfig;
