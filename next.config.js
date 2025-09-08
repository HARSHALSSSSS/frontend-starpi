/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "127.0.0.1",
            "localhost",
            "backend-strapi-4-lu9j.onrender.com", // Your actual Render domain
        ],
    },
};

module.exports = nextConfig;
