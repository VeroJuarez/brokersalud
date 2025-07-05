const Footer = () => {
    return (
      <footer className="bg-blue-50">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} BrokerSalud. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Sitio informativo. No vendemos planes directamente. Contactate para más info.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;