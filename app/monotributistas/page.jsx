import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export default function monotributistas() {
    return(
        <div className='bg-[#FAFAFE]'>
            <section className='h-[calc(100vh-300px)] md:h-[calc(100vh-150px)] mt-[64px] lg:mt-[72px]'>
                <div className='grid lg:grid-cols-2 lg:grid-rows-1 h-full items-end justify-center bg-[url(/monotributo.jpeg)] bg-cover bg-[-300px_-100px] sm:bg-center'>
                <div className='grid container lg:grid-rows-2 h-full px-4 gap-4 bg-gradient-to-t from-white via-white/50 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-white/0'>
                        <div className='flex flex-col justify-end mb-12 gap-4 items-center'> 
                            <h1 className='text-xl font-bold mb-4 text-blue-600'>
                                ¿Sos monotributista? 
                            </h1>
                            <h1 className='text-xl mb-4 text-blue-600'>
                                Tu monotributo puede darte una prepaga de calidad y !Sin pagar de más¡
                            </h1>
                            <p className='text-blue-600 text-center text-xl'>
                                Sin tramites complicados. Sin letra chica
                            </p>
                            <Link
                                href="/#contacto"
                                className="animate-glow bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition text-shadow-none"
                            >
                                Contactanos
                            </Link>
                        </div>
                    </div>    
                </div>
            </section>
            <div className='py-16 px-4'>
                <div className='container text-lg bg-white max-w-6xl mx-auto grid lg:grid-cols-2 rounded-3xl drop-shadow-lg'>
                    <div className='lg:order-1 order-2 w-full h-[500px] bg-[url("/monotributista.jpeg")] bg-cover bg-center rounded-t-3xl lg:rounded-r-3xl'></div>
                    <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl p-6 flex flex-col justify-center gap-12'>
                        <h2 className='text-lg font-medium text-gray-600 lg:px-24'>
                            Accedé a una prepaga de calidad con tu monotributo
                        </h2>    
                        <ul className='list-disc list-inside text-lg text-gray-600 flex flex-col gap-4'>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Tenemos una gran variedad de planes de salud con diferentes coberturas
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Turnos rápidos en nuestros centros médicos
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Decuentos en farmacias y ópticas
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Tenemos prestadores en todo el país
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Y mucho más...
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
