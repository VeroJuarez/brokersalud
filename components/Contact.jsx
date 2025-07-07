const Contact = () => {
    return (
      <section id="contacto" className="bg-blue-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-blue-700 mb-4">¿Tenés dudas? Contactanos</h2>
          <p data-aos="fade-up" className="text-gray-600 mb-8">
            Completá el formulario y un asesor se comunicará con vos lo antes posible.
          </p>
  
          <form data-aos="fade-up" className="bg-white shadow-md rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Telefono</label>
              <input
                type="numero"
                placeholder="112345678"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                rows="4"
                placeholder="¿En qué podemos ayudarte?"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  