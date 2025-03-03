const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    devIndicators: false,
    experimental: {
        mdxRs: true,
    },
}

module.exports = withContentlayer(nextConfig)