import Carousel from "./Carousel"

export default function Prepaid() {
    return (
        <section className="bg-white pb-16 lg:py-16">
            <div data-aos="fade-in" className="lg:hidden">
                <Carousel images={['/logosprepagas/galeno.png', '/logosprepagas/doctored.png', '/logosprepagas/avalian.png', '/logosprepagas/premedic.svg', '/logosprepagas/swissmedical.svg', '/logosprepagas/prevencionsalud.webp']} />
            </div>
            <div data-aos="fade-in" className="hidden lg:grid container mx-auto px-4 grid-cols-6 place-content-center place-items-center gap-2">
                <img src="/logosprepagas/doctored.png" alt="doctored" data-aos="fade-up" data-aos-delay="200" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/galeno.png" alt="galeno" data-aos="fade-up" data-aos-delay="400" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/avalian.png" alt="avalian" data-aos="fade-up" data-aos-delay="600" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/premedic.svg" alt="premedic" data-aos="fade-up" data-aos-delay="800" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/swissmedical.svg" alt="swissmedical" data-aos="fade-up" data-aos-delay="1000" className="w-48 object-cover rounded-lg" />              
                <img src="/logosprepagas/prevencionsalud.webp" alt="prevencionsalud" data-aos="fade-up" data-aos-delay="1200" className="w-48 object-cover rounded-lg" />
            </div>
        </section>
    )
}