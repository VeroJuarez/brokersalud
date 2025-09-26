import PreguntasFrecuentes from "@/components/PreguntasFrecuentes"
import Contact from "@/components/Contact"

export default function Faq() {
  return (
    <div className="min-h-[calc(100vh-64px)]"> 
      <PreguntasFrecuentes />
      <div className="">
        <Contact />
      </div>
    </div>
  )
}
