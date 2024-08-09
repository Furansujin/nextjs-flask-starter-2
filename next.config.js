/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/platform/:path*',
        destination:
            process.env.NODE_ENV === 'development'
                ? 'http://127.0.0.1:5328/api/platform/:path*'
                : '/api/',
      },
    ]
  },
}

module.exports = nextConfig