import Link from "next/link";

const links = [
  { name: "Inicio", href: "/" },
  // { name: "Sobre Nosotros", href: "/sobrenosotros" },
  { name: "Preguntas Frecuentes", href: "/faq" },
]

const Footer = () => {
    return (
      <footer className="bg-blue-100">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-5">
          <div className="flex items-center justify-center mb-8 lg:mb-0">
            <h1 className="text-2xl text-center font-bold">
                <span className="text-blue-500">Broker</span>
                <span className="text-blue-400">Salud</span>
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-evenly items-center col-span-3 lg:px-24">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={link.onClick} className="block py-2 text-gray-700 hover:text-blue-600">
                {link.name}
              </Link>
            ))}
          </div>
          <div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 my-2">
              © {new Date().getFullYear()} BrokerSalud. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;