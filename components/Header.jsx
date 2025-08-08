"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu , X} from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = ({onContactClick}) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Inicio", href: "/" },
        { name: "Jovenes", href: "/jovenes" },
        { name: "Adultos Mayores", href: "/mayores" },
        { name: "Monotributistas", href: "/monotributistas" },
        { name: "Transporte", href: "/transportistas" },
        { name: "Contacto", href: `${pathname === '/' ? '' : '/'}#contacto`, onClick: onContactClick }
    ]
    return (
        <header className="fixed w-full top-0 z-50 py-1 bg-white/40 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href='/'>
                    <h1 className="text-2xl font-bold">
                        <span className="text-blue-500">Broker</span>
                        <span className="text-blue-400">Salud</span>
                    </h1>
                </Link>

                {/* Menu Desktop */}
                <div className="hidden lg:flex space-x-6 items-center">
                    {links.map((link) => (
                        <Link key={link.name}
                            href={link.href}
                            onClick={link.onClick} 
                            className={link.name === 'Contacto' ? 'bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition' : 'text-gray-700 hover:text-blue-500 transition'}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                { /* Menu Mobile */}
                <button 
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu/>}
                </button>  
            </nav>

            {/* Menu desplegable */}
            {open && (
                <div className="lg:hidden px-4 pb-4">
                    {links.map((link) => (
                        <Link key={link.name}
                            href={link.href} 
                            onClick={(e) => {
                                setOpen(false),
                                link.onClick?.(e)
                            }}
                            className="block py-2 text-gray-700 hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar