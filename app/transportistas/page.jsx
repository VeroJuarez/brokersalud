import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export default function transportistas() {
    return (
        <div className='bg-[#FAFAFE]'>
            <section className='h-[calc(100vh-500px)] md:h-[calc(100vh-300px)] mt-[64px] lg:mt-[72px]'>
                <div className='grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 h-full place-items-center bg-[url(/trenelectrico.jpg)] bg-cover bg-[-300px_-100px] sm:bg-center xl:bg-[center_-150px]'>
                    <div className='order-last lg:order-first container h-full px-4 flex flex-col gap-4 bg-gradient-to-t from-white via-slate-100 via-slate-200 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-white/0'>
                        <div className="my-auto flex flex-col gap-4 items-center md:ml-32">
                            <h1 className='text-xl lg:text-2xl font-bold text-blue-600'>
                                <span>¿Sos trabajador de ferrocarril o de colectivo?</span>
                            </h1>
                            <div className="text-lg md:text-xl text-blue-600 text-center font-medium mb-2">
                                <h2>Podes acceder con tu aporte por aporte, solo con tu recibo de sueldo te podés asociar</h2>
                                <h2><b>SIN PAGAR CUOTA MENSUAL</b></h2>
                            </div>
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
            <div className='py-16'>
                <div className='container text-lg bg-white max-w-6xl mx-auto grid lg:grid-cols-2 rounded-3xl drop-shadow-lg'>
                    <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl p-6 flex flex-col justify-center items-center gap-12'>
                        <h2 className='text-lg font-medium text-gray-600 lg:px-24'>
                            Podes acceder a un plan de medicina privada con
                        </h2>    
                        <ul className='list-disc list-inside text-lg text-gray-600 flex flex-col gap-2'>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Planes sin costo adicional para vos y tu grupo familiar
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Atención médica en más de 100 Clínicas y Sanatorios de primer nivel
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Gestión simple con asesoramiento personalizado
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Plan <b>SIN</b> bonos ni coseguros
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Y mucho más...
                            </li>
                        </ul>
                        <h2>Si querés saber más, contactanos y te asesoramos sin compromiso</h2>
                    </div>
                    <div className='lg:order-2 order-1 w-full h-[500px] bg-[url("/maquinista.jpg")] bg-cover bg-center rounded-t-3xl lg:rounded-r-3xl'></div>
                </div>
            </div>  
        </div>
    )
}
