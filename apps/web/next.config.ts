import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  rewrites() {
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: `${process.env.API_URL || "http://localhost:3001"}/api/:path*`,
        },
      ],
    };
  },
  experimental: {
    proxyClientMaxBodySize: "100mb",
    proxyTimeout: 120_000,
  },
};

export default nextConfig;
