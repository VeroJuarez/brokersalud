import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { nombre, email, telefono, mensaje, provincia, edad, ocupacion } = await request.json();

  // Configura el transportador
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Envía el correo
    await transporter.sendMail({
      from: `"BrokerSalud - Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: [process.env.EMAIL_TO, process.env.EMAIL_TO_2, process.env.EMAIL_TO_ADMIN].filter(Boolean),
      subject: 'Nuevo mensaje del formulario de contacto',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo mensaje de contacto</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #1e40af; /* blue-800 */
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #60a5fa; /* blue-400 */
              color: white;
              padding: 15px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .header h1 {
              font-size: 1.5rem;
              margin: 0;
            }
            .content {
              padding: 20px;
              border: 1px solid #dbeafe; /* blue-100 */
              border-top: none;
              border-radius: 0 0 5px 5px;
              background-color: #eff6ff; /* blue-50 */
            }
            .info-box {
              background-color: white;
              border: 1px solid #dbeafe; /* blue-100 */
              border-radius: 5px;
              padding: 20px;
              margin-bottom: 20px;
            }
            .info-item {
              margin-bottom: 12px;
              padding-bottom: 12px;
              border-bottom: 1px solid #dbeafe; /* blue-100 */
            }
            .info-item:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label {
              font-weight: bold;
              color: #1e40af; /* blue-800 */
              display: block;
              margin-bottom: 4px;
            }
            .value {
              color: #1e3a8a; /* blue-900 */
            }
            .message-box {
              background-color: white;
              border: 1px solid #dbeafe; /* blue-100 */
              border-radius: 5px;
              padding: 20px;
              margin: 20px 0;
              font-size: 1.2em;
              line-height: 1.7;
            }
            .message-box h3 {
              margin-top: 0;
              color: #1e40af; /* blue-800 */
              border-bottom: 1px solid #dbeafe; /* blue-100 */
              padding-bottom: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 12px;
              color: #64748b; /* slate-500 */
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nuevo mensaje de contacto</h1>
          </div>
          
          <div class="content">
            <div class="info-box">
              <h2 style="margin-top: 0; color: #1e40af;">Información del contacto</h2>
              
              <div class="info-item">
                <span class="label">Nombre completo</span>
                <span class="value">${nombre}</span>
              </div>
              <div class="info-item">
                <span class="label">Email</span>
                <span class="value">${email}</span>
              </div>
              <div class="info-item">
                <span class="label">Teléfono</span>
                <span class="value">${telefono || 'No especificado'}</span>
              </div>
              <div class="info-item">
                <span class="label">Provincia</span>
                <span class="value">${provincia || 'No especificada'}</span>
              </div>
              <div class="info-item">
                <span class="label">Edad</span>
                <span class="value">${edad || 'No especificada'}</span>
              </div>
              <div class="info-item">
                <span class="label">Ocupación</span>
                <span class="value">${ocupacion || 'No especificada'}</span>
              </div>
            </div>

            <div class="message-box">
              <h3>Mensaje:</h3>
              <p>${mensaje || 'No se ha proporcionado mensaje.'}</p>
            </div>

            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de BrokerSalud</p>
              <p>${new Date().toLocaleString('es-AR', { dateStyle: 'full', timeStyle: 'medium' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}