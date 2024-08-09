/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/platform/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/platform/:path*'
            : '/api/platform/',
      }
    ]
  },
}

module.exports = nextConfig
