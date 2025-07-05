import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Prepaid from '../components/Prepaid';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Prepaid />
      <Contact />
    </main>
  );
}
