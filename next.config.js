/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async redirects() {
    return [
      {
        source: '/services/rig-equipment',
        destination: '/inland-marine/spray_foam_rig_insurance',
        permanent: true,
      },
      {
        source: '/services/rig-equipment/',
        destination: '/inland-marine/spray_foam_rig_insurance/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
