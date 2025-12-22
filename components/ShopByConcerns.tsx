'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ShopByConcerns = () => {
  const concerns = [
    {
      id: 1,
      title: 'Health Mix',
      imagePath: '/images/health-mix.png'
    },
    {
      id: 2,
      title: 'Personal Care',
      imagePath: '/images/personal-caree.png'
    },
    {
      id: 3,
      title: 'Women Care',
      imagePath: '/images/women-care.png'
    },
    {
      id: 4,
      title: 'Home Care',
      imagePath: '/images/home-caree.png'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title title-underline mb-4">
            SHOP BY CONCERNS
          </h2>
        
        </div>

        {/* Concerns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concerns.map((concern) => (
            <div
              key={concern.id}
              className="group relative overflow-hidden rounded-[26px] shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-[26px]">
                <Image
                  src={concern.imagePath}
                  alt={concern.title}
                  fill
                  className="object-cover"
                />

                {/* dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Bottom overlay pill */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
                    {concern.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default ShopByConcerns