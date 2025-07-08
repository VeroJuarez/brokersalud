const Contact = () => {
    return (
      <section id="contacto" className="min-h-screen flex items-center justify-center bg-gradient-to-b bg-blue-50 pt-16 px-4">
        <div data-aos="fade-up" className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">¿Tenés dudas? Te asesoramos gratis y sin compromiso</h2>
          <div data-aos="fade-up" className=" max-w-6xl w-full grid lg:grid-cols-2 gap-10 bg-white rounded-xl">          
          {/* Formulario - Izquierda */}
            <div className="text-center max-w-2xl mx-auto p-8">
              <p className="text-gray-600 mb-8 text-left">
                Completá el formulario y un asesor se contactará con vos lo antes posible.
              </p>
              <form className="bg-white rounded-xl space-y-4">
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
                  Quiero que me asesoren
                </button>
              </form>
            </div>

            {/* Informacion de contacto - Derecha */}
            <div className="text-center max-w-2xl mx-auto p-8">
              <p className="text-gray-600 mb-8 text-left">
                Si preferís, podés contactarte directamente con nuestros asesores:
              </p>
              <div className="max-w-2xl mx-auto grid lg:flex items-center bg-blue-100 rounded-xl shadow-md p-6 m-6">
                <div className="flex justify-center">
                  <img src="/cristina.png" alt="asesor" className="w-28 h-28 object-cover rounded-full lg:mr-6 pb-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Cristina Gatica</h3>
                  <ul className="text-gray-900 space-y-2 text-m">
                    <li><strong>📞 Teléfono:</strong> 11 5593 1434</li>
                    <li><strong>✉️ Email:</strong> brokersalud.cris@gmail.com</li>
                    <li><strong>🕐 Horario:</strong> Lunes a Viernes, 9 a 18hs</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-2xl mx-auto grid lg:flex items-center bg-blue-100 rounded-xl shadow-md p-6 m-6">
                <div className="flex justify-center">
                  <img src="/jorge.png" alt="asesor" className="w-28 h-28 object-cover rounded-full lg:mr-6 pb-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Jorge Kreiman</h3>
                  <ul className="text-gray-900  space-y-2 text-m">
                    <li><strong>📞 Teléfono:</strong> 11 54625974</li>
                    <li><strong>✉️ Email:</strong> j.kreiman2012@hotmail.com</li>
                    <li><strong>🕐 Horario:</strong> Lunes a Viernes, 9 a 18hs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  