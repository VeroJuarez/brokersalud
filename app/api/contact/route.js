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
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Tu correo
      subject: 'Nuevo mensaje del formulario de contacto',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <h3>Información de contacto:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        
        <h3 style="margin-top: 20px;">Información adicional:</h3>
        <p><strong>Provincia:</strong> ${provincia || 'No especificada'}</p>
        <p><strong>Edad:</strong> ${edad || 'No especificada'}</p>
        <p><strong>Ocupación:</strong> ${ocupacion || 'No especificada'}</p>
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