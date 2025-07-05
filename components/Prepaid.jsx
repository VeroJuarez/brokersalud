import Carousel from "./Carousel"

export default function Prepaid() {
    return (
        <section className="bg-white pb-16 lg:py-16">
            <div className="lg:hidden">
                <Carousel images={['/logosprepagas/galeno.png', '/logosprepagas/doctored.png', '/logosprepagas/avalian.png', '/logosprepagas/premedic.svg', '/logosprepagas/swissmedical.svg', '/logosprepagas/prevencionsalud.webp']} />
            </div>
            <div className="hidden lg:grid container mx-auto px-4 grid-cols-6 place-content-center place-items-center gap-2">
                <img src="/logosprepagas/doctored.png" alt="doctored" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/galeno.png" alt="galeno" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/avalian.png" alt="avalian" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/premedic.svg" alt="premedic" className="w-48 object-cover rounded-lg" />
                <img src="/logosprepagas/swissmedical.svg" alt="swissmedical" className="w-48 object-cover rounded-lg" />              
                <img src="/logosprepagas/prevencionsalud.webp" alt="prevencionsalud" className="w-48 object-cover rounded-lg" />
            </div>
        </section>
    )
}