"use client";

import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    provincia: '',
    edad: '',
    ocupacion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step < 2) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        nextStep(); // Ir al paso de agradecimiento
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="flex items-center justify-center bg-gradient-to-b bg-blue-50 py-16 px-4">
      <div data-aos="fade-up" className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 text-center">¿Tenés dudas? Te asesoramos gratis y sin compromiso</h2>
        <div data-aos="fade-up" className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 bg-white rounded-xl">          
          {/* Formulario - Izquierda */}
          <div className="text-center max-w-2xl mx-auto p-8 w-full">
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    {i}
                  </div>
                  <span className="text-xs mt-1 text-gray-600">
                    {i === 1 ? 'Datos Básicos' : i === 2 ? 'Información Adicional' : 'Listo'}
                  </span>
                </div>
              ))}
            </div>

            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-xl space-y-4">
              {step === 1 && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Datos de contacto</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre *</label>
                    <input
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Teléfono *</label>
                    <input
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="112345678"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="4"
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Información adicional (opcional)</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Provincia</label>
                    <input
                      name="provincia"
                      type="text"
                      value={formData.provincia}
                      onChange={handleChange}
                      placeholder="Tu provincia"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Edad</label>
                    <input
                      name="edad"
                      type="number"
                      min="18"
                      max="120"
                      value={formData.edad}
                      onChange={handleChange}
                      placeholder="Tu edad"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ocupación</label>
                    <input
                      name="ocupacion"
                      type="text"
                      value={formData.ocupacion}
                      onChange={handleChange}
                      placeholder="Tu ocupación o profesión"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      disabled={isSubmitting}
                    />
                  </div>
                </>
              )}

              {step === 3 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias por tu mensaje!</h3>
                  <p className="text-gray-600 mb-6">En breve nos pondremos en contacto para encontrar juntos el plan ideal para vos.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        mensaje: '',
                        provincia: '',
                        edad: '',
                        ocupacion: ''
                      });
                    }}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <div className="flex justify-between pt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    >
                      Atrás
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`ml-auto px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    disabled={isSubmitting}
                  >
                    {step === 2 
                      ? isSubmitting ? 'Enviando...' : 'Enviar mensaje'
                      : 'Siguiente'}
                  </button>
                </div>
              )}
              </form>
            </div>

            {/* Informacion de contacto - Derecha */}
            <div className="text-center max-w-2xl mx-auto p-8">
              <p className="text-gray-600 mb-8 text-center md:text-left">
                Si preferís, podés contactarte directamente con nuestros asesores:
              </p>
              <div className="max-w-2xl mx-auto grid lg:flex items-center bg-blue-100 rounded-xl shadow-md p-6 m-6">
                <div className="flex justify-center">
                  <div className="relative w-28 h-28 lg:mr-6">
                    <Image 
                      src="/cristina.png" 
                      alt="asesor" 
                      fill
                      className="object-cover rounded-full"
                      sizes="112px"
                      unoptimized={true}
                    />
                  </div>
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
                  <div className="relative w-28 h-28 lg:mr-6">
                    <Image 
                      src="/jorge.png" 
                      alt="asesor" 
                      fill
                      className="object-cover rounded-full"
                      sizes="112px"
                      unoptimized={true}
                    />
                  </div>
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
  