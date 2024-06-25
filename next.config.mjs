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
    }
};

export default nextConfig;
