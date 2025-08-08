import Link from "next/link"

export default function Mayores() {
    return (
        <section className="mx-4">
            <div data-aos="fade-up" className="container text-lg bg-white max-w-6xl mx-auto my-16 grid lg:grid-cols-2 rounded-3xl drop-shadow-lg">
              <div className='lg:order-1 order-2 w-full h-[500px] bg-[url("/mayores.jpg")] bg-cover bg-right rounded-t-3xl lg:rounded-l-3xl'></div>
              <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl flex flex-col justify-center lg:gap-6 lg:px-18 px-6'>
                <span className="absolute top-0 mt-8 bg-purple-400 text-white px-2 py-1 rounded mr-auto text-md">Para mayores de 60 años</span>
                <h2 className='text-xl font-bold text-gray-600 p-4 text-center'>
                  Salud y bienestar para una etapa vital
                </h2>
                <div className="grid py-2 px-2 justify-center">
                  <div>
                    <h3 className='text-gray-600 py-2'>
                      Si sos mayor de 60, no te quedes sin tu cobertura
                    </h3>
                    <p className='text-gray-600 py-2'>
                      Tene una prepaga sin límites de edad, sin letra chica. Solo salud y contención real
                    </p>
                  </div>
                </div>
                <div className='flex justify-center bottom-0 text-center my-4 gap-2'>
                  <Link href="/mayores" className="text-gray-700 py-2 px-6 rounded-md hover:bg-purple-300 hover:text-white transition cursor-pointer">
                    Conoce más
                  </Link>
                  <Link href="#contacto" className='bg-purple-400 text-white py-2 px-6 rounded-md hover:bg-purple-300 transition cursor-pointer'>Contactanos</Link>
                </div>
              </div>
            </div>
        </section>
    )
}