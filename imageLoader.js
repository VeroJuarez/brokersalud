// Este loader personalizado maneja tanto imágenes locales como externas
export default function customLoader({ src, width, quality = 75 }) {
  // Si la imagen es de una URL externa, la devolvemos con parámetros de optimización
  if (src.startsWith('http')) {
    const url = new URL(src);
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'max');
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', quality.toString());
    return url.toString();
  }
  
  // Para imágenes locales en desarrollo, las servimos directamente
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // En producción, usamos la ruta directa (next-export-optimize-images se encargará)
  return src;
}
