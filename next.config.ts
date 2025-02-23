import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  images: {
    unoptimized: true, // Désactive l'optimisation d'image
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },

};

export default nextConfig;
