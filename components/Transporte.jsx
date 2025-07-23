import Link from "next/link"

export default function Transporte() {
    return (
        <section className="mx-2">
            <div data-aos="fade-up" className="container text-lg bg-white max-w-6xl mx-auto my-16 grid lg:grid-cols-2 rounded-3xl drop-shadow-lg">
                <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl flex flex-col justify-center lg:gap-6 lg:px-18 px-6'>
                    <span className="absolute top-0  mt-16 bg-blue-400 text-white px-2 py-1 rounded mr-auto text-md">Para trabajadores de transporte</span>
                    <h2 className='text-xl font-bold text-gray-600 py-2 text-center'>
                        La mejor prepaga pensada para vos, que movés el país
                    </h2>
                    <div className="grid lg:grid-cols-1 grid-cols-2 py-2 px-2 justify-center">
                        <div>
                            <h3 className='text-gray-600 py-2 px-4'>
                                Te ayudamos a encontrar el mejor plan de salud para vos y tu familia
                            </h3>
                            <p className='text-gray-600 py-2 px-4'>
                                Si sos trabajador de <b>transporte</b>, tenemos el plan ideal para vos, sin pagar de más
                            </p>
                        </div>
                    </div>
                    <div className='absolute lg:bottom-0 lg:mb-14 flex self-end flex-end items-center gap-2'>
                        <Link href="/transportistas" className='text-gray-700 py-2 px-6 rounded-md hover:bg-blue-300 hover:text-white transition cursor-pointer'>
                        Conoce más
                        </Link>
                        <Link href="#contacto" className='bg-blue-400 text-white py-2 px-6 rounded-md hover:bg-blue-300 transition cursor-pointer'>Contactanos</Link>
                    </div>
                </div>
                <div className='lg:order-2 order-1 w-full h-[500px] bg-[url("/colectivero.png")] bg-cover bg-center rounded-t-3xl lg:rounded-r-3xl'></div>
            </div>
        </section>
    )
}