/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/stdplan',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pd.msu.ac.th',
                port: '',
                pathname: '/staff/picture/**',
            },
        ],
    },
}

module.exports = nextConfig
