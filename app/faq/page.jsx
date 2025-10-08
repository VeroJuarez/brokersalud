import PreguntasFrecuentes from "@/components/PreguntasFrecuentes"
import Contact from "@/components/Contact"
import Head from "next/head"

export default function Faq() {
  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué es un broker de salud?","acceptedAnswer":{"@type":"Answer","text":"Un broker de salud es un asesor especializado que te ayuda a encontrar la mejor opción de cobertura médica según tus necesidades y presupuesto. Actúa como intermediario entre las personas y las empresas de medicina prepaga, ofreciendo asesoramiento personalizado y sin costo adicional para el cliente."}},{"@type":"Question","name":"¿Por qué me conviene contratar un broker de salud?","acceptedAnswer":{"@type":"Answer","text":"Contratar un broker de salud ofrece varias ventajas: ahorro de tiempo al comparar múltiples opciones, asesoramiento experto sobre planes y coberturas, servicio gratuito para el cliente final y acceso a promociones y descuentos exclusivos."}},{"@type":"Question","name":"¿Cómo funciona el proceso de contratación?","acceptedAnswer":{"@type":"Answer","text":"El proceso es simple: primero contactanos por teléfono, WhatsApp o formulario, luego contanos tus necesidades y preferencias, te mostramos las mejores opciones disponibles y te acompañamos durante todo el proceso de contratación."}},{"@type":"Question","name":"¿Puedo cotizar una Prepaga si ya tengo obra social?","acceptedAnswer":{"@type":"Answer","text":"Sí, cualquier usuario de obra social puede contratar un servicio de medicina prepaga. Contactanos para ver qué opciones se ajustan mejor a tus necesidades y presupuesto."}}]}`
        }}
      />
    </Head>

    <div className="min-h-[calc(100vh-64px)]"> 
      <PreguntasFrecuentes />
      <div className="">
        <Contact />
      </div>
    </div>
    </>
  )
}
