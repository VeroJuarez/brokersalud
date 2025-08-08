import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export default function mayores() {
    return(
        <div className='bg-[#FAFAFE]'>
            <section className='h-[calc(100vh-300px)] md:h-[calc(100vh-150px)] mt-[64px] lg:mt-[72px]'>
                <div className='grid lg:grid-cols-2 lg:grid-rows-1 h-full items-end justify-center bg-[url(/abuelo.jpeg)] bg-cover bg-[-300px_-100px] sm:bg-center'>
                    <div className='grid container lg:grid-rows-2 h-full px-4 gap-4 bg-gradient-to-t from-white via-white/50 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-white/0'>
                        <div className='flex flex-col justify-end mb-12 gap-4 items-center'> 
                            <h1 className='text-xl font-bold mb-4 text-blue-600'>
                                ¿Sos mayor de 60 años?
                            </h1>
                            <h1 className='text-xl font-bold mb-4 text-blue-600'>
                                Tenemos la prepaga para vos ¡Comunicate con nosotros!
                            </h1>
                            <p className='text-blue-600 text-center text-xl'>
                                Las mejores prestaciones médicas y los mejores sanatorios
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
                    <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl p-6 flex flex-col justify-center gap-12'>
                        <h2 className='text-lg font-medium text-gray-600 lg:px-24'>
                            Salud y bienestar para una etapa de tu vida
                        </h2>    
                        <ul className='list-disc list-inside text-lg text-gray-600 flex flex-col gap-4'>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Tenemos prepagas sin límite de edad
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Podes tener cobertura sin restricciones por la edad, sin letra chica, solo salud
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Gestión simple con asesoramiento personalizado
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                La mejor relación costo-beneficio
                            </li>
                            <li className='flex items-center gap-2'>
                                <CheckIcon size={16} className='text-blue-500' />
                                Y mucho más...
                            </li>
                        </ul>
                        <h2>Si querés saber más, contactanos y te asesoramos sin compromiso</h2>
                    </div>
                    <div className='lg:order-2 order-1 w-full h-[500px] bg-[url("/abuelos.jpeg")] bg-cover bg-center rounded-t-3xl lg:rounded-r-3xl'></div>
                </div>
            </div>
        </div>
    )
}