/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
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
