/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lbeigggsatbjwtuapueg.supabase.co', 
                port: '',
            },
        ],
    },
};

export default nextConfig;
