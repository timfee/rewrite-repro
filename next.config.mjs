/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path([^company]*)*",
        destination: "/?path=:path*",
        missing: [
          {
            type: "query",
            key: "path",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
