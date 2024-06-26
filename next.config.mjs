/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org',
                port: "",
            },
            {
                protocol: 'https',
                hostname: 'cdn.fakercloud.com',
                port: "",
            },
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com',
                port: "",
            }
        ]
    },
    reactStrictMode: true,
    swcMinify: true, // Enables SWC minification for faster builds
    webpack(config, { isServer }) {
        // Customize the Webpack configuration here
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    // Adding next-on-netlify plugin for Netlify
    async redirects() {
        return [
            {
                source: '/old-path',
                destination: '/new-path',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.example.com/:path*',
            },
        ]
    },
};

export default nextConfig;
