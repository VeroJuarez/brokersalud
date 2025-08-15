"use client"
import { usePathname } from 'next/navigation';

export default function StructuredData() {
  const pathname = usePathname();
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BrokerSalud - Planes de Salud",
    "description": "Planes de salud para monotributistas y mayores de 60 años con cobertura nacional",
    "url": `https://brokersalud.com.ar${pathname}`,
    "provider": {
      "@type": "Organization",
      "name": "BrokerSalud",
      "sameAs": [
        "https://www.facebook.com/brokersalud",
        "https://www.instagram.com/brokersalud"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
