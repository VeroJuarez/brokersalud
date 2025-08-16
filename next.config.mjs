import withExportImages from 'next-export-optimize-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para la exportación estática
  output: 'export',
  trailingSlash: true,
  // Optimizaciones adicionales
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

// Aplicar withExportImages en producción
export default process.env.NODE_ENV === 'production' 
  ? withExportImages(nextConfig) 
  : nextConfig;
