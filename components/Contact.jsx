const Contact = () => {
    return (
      <section id="contacto" className="min-h-screen flex items-center justify-center bg-gradient-to-b bg-blue-50 py-16 px-4">
        <div data-aos="fade-up" className="max-w-6xl w-full flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow-lg p-6">
        
        {/* Formulario - Izquierda */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">¿Tenés dudas? Contactanos</h2>
            <p className="text-gray-600 mb-8">
              Completá el formulario y un asesor se comunicará con vos lo antes posible.
            </p>
            <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
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

          {/* Informacion de contacto - Derecha */}
          <div className="max-w-2xl mx-auto flex items-center bg-blue-100 rounded-xl shadow-md p-6">
            <img src="/contacto.png" alt="asesor" className="w-28 h-28 object-cover rounded-full mr-6" />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Datos de contacto</h3>
              <ul className="text-gray-900  space-y-2 text-sm">
                <li><strong>Nombre:</strong> Cristina Gatica</li>
                <li><strong>📞 Teléfono:</strong> (011) 11 ........</li>
                <li><strong>✉️ Email:</strong> brokersalud.cris@gmail.com</li>
                <li><strong>🕐 Horario:</strong> Lunes a Viernes, 9 a 18hs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  