/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // GitHub serves project pages beneath /vinayak29iyer.
  basePath: process.env.GITHUB_ACTIONS ? '/vinayak29iyer' : '',
};

export default nextConfig;
