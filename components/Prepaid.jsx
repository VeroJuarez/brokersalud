import Carousel from "./Carousel"
import Image from 'next/image'

export default function Prepaid() {
    return (
        <section className="bg-white pb-16 pt-12 lg:py-16">
            <div data-aos="fade-in" className="lg:hidden">
                <Carousel images={['/logosprepagas/galeno.png', '/logosprepagas/doctored.png', '/logosprepagas/avalian.png', '/logosprepagas/premedic.svg', '/logosprepagas/swissmedical.svg', '/logosprepagas/prevencionsalud.webp']} />
            </div>
            <div data-aos="fade-in" className="hidden lg:grid container mx-auto px-2 grid-cols-7 place-content-center place-items-center gap-2">
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="400">
                    <Image 
                      src="/logosprepagas/galeno.png" 
                      alt="Galeno" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="600">
                    <Image 
                      src="/logosprepagas/avalian.png" 
                      alt="Avalian" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="200">
                    <Image 
                      src="/logosprepagas/doctored.png" 
                      alt="Doctor Edgardo Stocki" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="800">
                    <Image 
                      src="/logosprepagas/premedic.svg" 
                      alt="Premedic" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="1000">
                    <Image 
                      src="/logosprepagas/swissmedical.svg" 
                      alt="Swiss Medical" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="1200">
                    <Image 
                      src="/logosprepagas/saludsancor.webp" 
                      alt="Sancor Salud" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
                <div className="relative w-48 h-24" data-aos="fade-up" data-aos-delay="600">
                    <Image 
                      src="/logosprepagas/osdepym.png" 
                      alt="OSDEPYM" 
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 150px"
                      unoptimized={true}
                    /></div>
            </div>
        </section>
    )
}