import Link from "next/link"

export default function Transporte() {
    return (
        <section>
            <div className="container text-lg bg-white max-w-6xl mx-auto my-16 grid lg:grid-cols-2 rounded-3xl drop-shadow-lg">
                <div className='rounded-l-3xl flex flex-col justify-center gap-6 px-18'>
                  <span className="absolute top-0  mt-16 bg-blue-400 text-white px-2 py-1 rounded mr-auto text-sm">Para trabajadores de transporte</span>
                  <h2 className='text-xl mb-4 font-bold text-gray-600'>
                      La mejor cobertura para vos, que moves el pais
                  </h2>
                  <h3 className='text-gray-600'>
                      te ayudamos a encontrar el mejor plan de salud para vos y tu familia
                  </h3>
                  <p className='text-gray-600'>
                      Si sos trabajador de <b>transporte</b>, tenemos el plan ideal para vos, sin pagar de más
                  </p>
                  <div className='absolute bottom-0 mb-14 flex gap-2 items-center mt-4 self-end flex-end'>
                    <button className='text-gray-700 py-2 px-6 rounded-md hover:bg-blue-300 hover:text-white transition cursor-pointer'>Conoce más</button>
                    <Link href="#contacto" className='bg-blue-400 text-white py-2 px-6 rounded-md hover:bg-blue-300 transition cursor-pointer'>Contactanos</Link>
                  </div>
                </div>
                <div className='w-full h-[500px] bg-[url("/transporte.jpg")] bg-cover bg-center rounded-r-3xl'></div>
            </div>
        </section>
    )
}