"use client"

import Image from 'next/image'

export default function WhatsAppBubble() {
    return (
        <div className="fixed bottom-0 right-0">
            <a
                href="https://wa.me/5491155931434"
                target="_blank"
                rel="noopener noreferrer"
                className=""
            >
                <div className="relative w-20 h-20 m-4">
                  <Image 
                    src="/whatsapp.png" 
                    alt="WhatsApp" 
                    fill
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    sizes="80px"
                    unoptimized={true}
                  />
                </div>
            </a>
        </div>
    )
}