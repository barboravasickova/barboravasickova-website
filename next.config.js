/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/product-design",
        destination: "/",
        permanent: true
      },
      {
        source: "/product-design/:path*",
        destination: "/:path*",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
