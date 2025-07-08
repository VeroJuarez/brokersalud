import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Prepaid from '../components/Prepaid';
import Beneficios from '../components/Beneficios';
import Transporte from '../components/Transporte';
import Mayores from '../components/Mayores';

export default function Home() {
  return (
    <main className="bg-[#FAFAFE] min-h-screen">
      <Hero />
      <Prepaid />
      <Beneficios />
      <hr className="border-gray-200" />
      <Mayores />
      <Transporte />
      <Contact />
    </main>
  );
}
