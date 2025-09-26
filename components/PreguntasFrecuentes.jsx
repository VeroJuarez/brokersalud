"use client";
import Accordion from "./Accordeon";

export default function PreguntasFrecuentes() {
    return(
        <section className='mt-[64px] lg:mt-[72px] bg-gray-50 py-8'>
            <div className='max-w-4xl mx-auto p-8'>
                <h1 className='text-2xl font-bold mb-4 my-4 mb-18 text-blue-600 text-center'>
                    Preguntas Frecuentes
                </h1>

                <div className="bg-white shadow-lg rounded-lg">
                    <Accordion title="¿Qué es un broker de salud?">
                        <p>Un <b>broker de salud</b> es un asesor especializado que te ayuda a encontrar la mejor opción de cobertura médica según tus necesidades y presupuesto.</p>
                        <p>Actuamos como intermediarios entre las personas y las empresas de medicina prepaga, ofreciendo asesoramiento personalizado y sin costo adicional para ti.</p>
                    </Accordion>

                    <Accordion title="¿Por qué me conviene contratar un broker de salud?">
                        <p>Contratar un broker de salud te ofrece varias ventajas:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><b>Ahorro de tiempo:</b> Hacemos la búsqueda por ti, comparando múltiples opciones.</li>
                            <li><b>Asesoramiento experto:</b> Te explicamos las diferencias entre planes y coberturas.</li>
                            <li><b>Sin costo adicional:</b> Nuestros servicios son gratuitos para el cliente final.</li>
                            <li><b>Mejores condiciones:</b> Accedé a promociones y descuentos exclusivos.</li>
                        </ul>
                    </Accordion>

                    <Accordion title="¿Cómo funciona el proceso de contratación?">
                        <p>El proceso es simple y sin complicaciones:</p>
                        <ol className="list-decimal pl-5 space-y-2 mt-2">
                            <li>Contactanos por teléfono, WhatsApp o completando el formulario.</li>
                            <li>Contanos tus necesidades y preferencias.</li>
                            <li>Te mostramos las mejores opciones disponibles.</li>
                            <li>Te acompañamos en todo el proceso de contratación.</li>
                        </ol>
                    </Accordion>

                    <Accordion title="¿Puedo cotizar una Prepaga si ya tengo obra social?">
                        <p><b>¡Sí!</b> Cualquier usuario de obra social puede contratar un servicio de medicina prepaga.</p>
                        <p>Contactanos para ver qué opciones se ajustan a tus necesidades y presupuesto.</p>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

// ¿Tenes dudas?
//Tranquilo, nosotros te ayudamos a que el proceso de encontrar prepaga sea rápido, fácil y transparente

//¿Por qué deberías contratar un plan de medicina Prepaga?
//Los planes de medicina prepaga te permiten <b>acceder a los mejores centros médicos del país</b>
// Además, te ofrecen atención médica de calidad, sin largas esperas y con una amplia gama de servicios médicos disponibles

//¿Puedo cotizar una Prepaga si ya tengo obra social?
//<b>¡Si!</b> Cualquier usuario de obra social puede contratar un servicio de medicina prepaga
//Contactanos para ver qué opciones se ajustan a tus necesidades y presupuesto

//¿Qué centros médicos del país trabajamos?
//Tenemos en Capital Federela y Gran Buenos Aires
//Algunos son el Hospital Italiano, Hospital Alemán, CEMIC, Hospital Británico,Fundación Favaloro,
//FLENI, Hospital Austral, Sanatorio Finochieto, Clinica Bessone, Sanatorio Las Lomas, Sanatorio San Lucas,
//entre otros

//¿Tenes más dudas?
//No te preocupes, podemos ayudarte en la decisión de qué medicina prepaga elegir.
//Tan solo completá el formulario de contacto y te asesoramos sin compromiso.