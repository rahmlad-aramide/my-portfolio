/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dh4rm7b7b/image/upload/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
