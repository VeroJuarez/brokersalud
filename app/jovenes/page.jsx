import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export default function Jovenes() {
    return (
        <div className='bg-[#FAFAFE]'>
            <section className='h-[calc(100vh-300px)] md:h-[calc(100vh-250px)] mt-[64px] lg:mt-[72px]'>
                <div className='grid  grid-rows-2 h-full place-items-center bg-[url(/jovenesportada.jpg)] bg-cover bg-center 2xl:bg-[center_-900px]'>
                    <div className='order-last lg:order-first container h-full px-4 flex flex-col'>
                        <div className='my-auto flex flex-col gap-8 items-center'> 
                            <h1 className='text-xl lg:text-2xl font-bold text-blue-600'>
                                ¿Sos profesional o trabajas freelance?
                            </h1>
                            <p className='text-lg md:text-xl text-blue-600 text-center font-medium mb-2'>Si no estas conforme con tu obra social, te ofrecemos opciones sin abonar diferencia</p>
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
            <div className='py-4 px-4'>
                <div className="container text-lg bg-white max-w-6xl mx-auto my-8 grid lg:grid-cols-2 rounded-3xl drop-shadow-lg">
                    <div className='lg:order-1 order-2 w-full h-[500px] bg-[url("/jovenes.jpeg")] bg-cover rounded-t-3xl lg:rounded-l-3xl'></div>
                    <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl flex flex-col justify-center lg:gap-6 lg:px-18 px-6'>
                        <span className="absolute top-0 mt-6 lg:mt-8 bg-purple-400 text-white px-2 py-1 rounded mr-auto text-md">Plan Joven</span>
                        <p className='text-xl font-bold text-gray-600 pt-8 pb-4 text-center'>
                            Accedé a lo que necesitás 100% digital, fácil y con un PRECIO INCREIBLE
                        </p>
                        <div className="grid grid-cols-1 gap-4 py-4 justify-center">
                            <div>
                                <ul className='list-disc list-inside text-lg text-gray-600 flex flex-col gap-4 pb-2'>
                                    <li className='flex items-center gap-2'>
                                        <CheckIcon size={16} className='text-blue-500 gap-2' />
                                        Turnos rápidos en nuestros centros médicos
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <CheckIcon size={16} className='text-blue-500 gap-2' />
                                        Centros odontológicos propios
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <CheckIcon size={16} className='text-blue-500 gap-2' />
                                        Médico online las 24 hs
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <CheckIcon size={16} className='text-blue-500 gap-2' />
                                        Decuentos en farmacias y ópticas
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <CheckIcon size={16} className='text-blue-500 gap-2' />
                                        Y mucho más...
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>  
            </div>
        </div>
    
    )
}