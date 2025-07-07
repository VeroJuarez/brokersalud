import Link from 'next/link'

export default function Hero() {
    return (
        <section className="h-[calc(100vh-300px)] mt-[64px] lg:mt-[72px]">
            <div data-aos="fade-in" className="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 h-full place-items-center bg-[url(/herobg.png)] bg-cover bg-[-300px_-100px] sm:bg-center xl:bg-[center_-150px]">
                <div className="order-last lg:order-first container h-full px-4 flex flex-col gap-4 bg-gradient-to-t from-white via-slate-100 via-slate-200 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-white/0">
                    <div data-aos="fade-up" className="my-auto flex flex-col gap-4 items-center md:ml-32">
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            <span className="text-blue-500">Broker</span>
                            <span className="text-blue-400">Salud</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-500 font-medium mb-2">
                            Tu guía para elegir el mejor plan de salud
                        </p>
                        <Link
                            href="#contacto"
                            className="animate-glow bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition text-shadow-none"
                        >
                            Contactanos
                        </Link>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}
