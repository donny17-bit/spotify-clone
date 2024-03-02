/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       // Routes this applies to
  //       source: "/api/:path*",
  //       // Headers
  //       headers: [
  //         // Allow for specific domains to have access or * for all
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "http://127.0.0.1:3000/:path*",
  //         },
  //         // Allows for specific methods accepted
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET, POST, PUT, DELETE, OPTIONS",
  //         },
  //         // Allows for specific headers accepted (These are a few standard ones)
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value: "Content-Type, Authorization",
  //         },
  //       ],
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "/api/auth/login",
      },
      {
        source: "/api/callback",
        destination: "/api/auth/callback",
      },
      {
        source: "/api/refresh-token",
        destination: "/api/auth/refresh-token",
      },
    ];
  },
};

export default nextConfig;
