"use client"

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';

export default function Carousel({images}) {
    const [ref] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    return (
        <div ref={ref} className="keen-slider rounded-xl overflow-hidden">
            {images.map((image, index) => (
                <div key={index} className="keen-slider__slide flex justify-center items-center w-full">
                    <div className="relative max-h-[90px] w-full h-48 md:h-64 lg:h-80">
                      <Image 
                        src={image} 
                        alt="Imagen de prepaga" 
                        fill
                        className="object-contain rounded-lg p-4"
                        unoptimized={true}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                </div>
            ))    
            }
        </div>
    )
}