/** @type {import('next').NextConfig} */
const nextConfig = {
  // ตั้งค่าให้ Next.js สร้าง output แบบ standalone สำหรับ Docker
  output: 'standalone',
  // Optional: Add other configurations if needed, e.g., image optimization domains
  // images: {
  //   domains: ['your-image-cdn.com', 'another-domain.com'],
  // },
  // Optional: Webpack configuration
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       net: false,
  //       tls: false,
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
