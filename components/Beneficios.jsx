import { CheckIcon } from 'lucide-react'

export default function Beneficios() {
  return (
    <section className='mx-2'>
      <div className='container text-lg bg-white max-w-6xl mx-auto my-16 grid lg:grid-cols-2 rounded-3xl drop-shadow-lg'>
        <div className='lg:order-1 order-2 lg:rounded-l-3xl rounded-b-3xl p-6 flex flex-col justify-center items-center gap-12'>
          <h2 className='text-lg font-medium text-gray-600 lg:px-24'>
            Trabajamos con las mejores prepagas, para que puedas acceder a la
            mejor atención médica y a los mejores beneficios
          </h2>
          <ul className='list-disc list-inside text-lg text-gray-600 flex flex-col gap-2'>
            <li className='flex items-center gap-2'>
              <CheckIcon size={16} className='text-blue-500' />
              Cobertura nacional
            </li>
            <li className='flex items-center gap-2'>
              <CheckIcon size={16} className='text-blue-500' />
              Descuentos en medicamentos
            </li>
            <li className='flex items-center gap-2'>
              <CheckIcon size={16} className='text-blue-500' />
              Amplias cartillas médicas
            </li>
            <li className='flex items-center gap-2'>
              <CheckIcon size={16} className='text-blue-500' />
              Centros de salud cerca tuyo
            </li>
            <li className='flex items-center gap-2'>
              <CheckIcon size={16} className='text-blue-500' />
              La mejor atención
            </li>
          </ul>
        </div>
        <div className='lg:order-2 order-1 w-full h-[500px] bg-[url("/family.jpg")] bg-cover bg-center rounded-t-3xl lg:rounded-r-3xl'></div>
      </div>
    </section>
  )
}
