import Link from "next/link"

export default function Mayores() {
    return (
        <section className="mx-2">
            <div data-aos="fade-up" className="container text-lg bg-white max-w-6xl mx-auto my-16 grid lg:grid-cols-2 rounded-3xl drop-shadow-lg">
                <div className='w-full h-[500px] bg-[url("/mayores.jpg")] bg-cover bg-right rounded-t-3xl lg:rounded-l-3xl'></div>
                <div className='rounded-b-3xl lg:rounded-r-3xl flex flex-col justify-center gap-6 px-18'>
                    <span className="absolute top-0  mt-16 bg-purple-400 text-white px-2 py-1 rounded mr-auto text-sm">Para mayores de 60</span>
                    <h2 className='text-xl mb-4 font-bold text-gray-600'>
                      Salud y bienestar para una etapa vital
                    </h2>
                    <h3 className='text-gray-600'>
                      Si sos mayor de 60, no te quedes sin tu cobertura
                    </h3>
                    <p className='text-gray-600'>
                      Sin restricciones por edad, sin letra chica. Solo salud y contención real.
                    </p>
                    <div className='absolute bottom-0 mb-14 flex gap-2 items-center mt-4 self-end flex-end'>
                      <button className='text-gray-700 py-2 px-6 rounded-md hover:bg-purple-300 hover:text-white transition cursor-pointer'>Conoce más</button>
                      <Link href="#contacto" className='bg-purple-400 text-white py-2 px-6 rounded-md hover:bg-purple-300 transition cursor-pointer'>Contactanos</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}