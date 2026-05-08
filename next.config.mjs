/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "upprustningensc.nu",
          },
        ],
        destination: "https://zenithkampsport.se/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;