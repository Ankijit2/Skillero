/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"d13cncrcqfgi8k.cloudfront.net",
                pathname:"**",

            }
        ],
      },
};

export default nextConfig;
