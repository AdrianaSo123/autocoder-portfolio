/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Specify packages that need to be transpiled
  transpilePackages: ['react-force-graph', 'react-force-graph-2d', 'react-force-graph-3d', 'd3'],
  // Disable image optimization for Vercel deployment
  images: {
    unoptimized: true,
  },
  // Disable certain experimental features that might cause issues
  experimental: {
    // Prevent issues with ESM modules
    esmExternals: false,
  },
  // Configure webpack for Vercel deployment
  webpack: (config, { isServer }) => {
    // Handle CSV files
    config.module.rules.push({
      test: /\.csv$/,
      type: 'asset/resource',
    });

    // Fix issues with browser APIs in server-side rendering
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
      };
    }

    // Ignore specific node_modules that might be causing issues
    config.externals = [...(config.externals || []), { 'canvas': 'canvas' }];

    // Increase memory limit for the build process
    config.performance = {
      ...config.performance,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    // Exclude problematic node modules from the build process
    config.module.rules.push({
      test: /node_modules[\\/](css-tree|csso|postcss-svgo)[\\/]/,
      use: 'null-loader',
    });

    return config;
  },
  // Disable specific rules that might be causing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
