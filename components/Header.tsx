'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const categories = [
    'Personal Care',
    'Health Care', 
    'Home Care',
    'Hair Care',
    'Skin Care',
    'Wellness Products'
  ]

  return (
    <header className="w-full">
      {/* Top Green Strip - Marquee */}
      <div className="bg-primary text-black text-base py-4 overflow-hidden font-roboto font-medium leading-none tracking-normal">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-8">★ Free Shipping above Rs. 600 Order ★</span>
          <span className="mx-8">★ We Deliver across all Over India ★</span>
          <span className="mx-8">★ Free Shipping above Rs. 600 Order ★</span>
          <span className="mx-8">★ We Deliver across all Over India ★</span>
          <span className="mx-8">★ Free Shipping above Rs. 600 Order ★</span>
          <span className="mx-8">★ We Deliver across all Over India ★</span>
          <span className="mx-8">★ Free Shipping above Rs. 600 Order ★</span>
          <span className="mx-8">★ We Deliver across all Over India ★</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Kavi's Naturals Logo" 
                className="h-14 w-auto"
                onError={(e) => {
                  // Fallback logo if image fails to load
                  e.currentTarget.style.display = 'none'
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="bg-primary text-white px-4 py-3 rounded-lg font-bold text-xl flex items-center">
                        <span class="text-white mr-1">🌿</span>
                        KaVi's
                        <span class="text-xs ml-1 bg-white text-primary px-1 rounded">NATURALS</span>
                      </div>
                    `
                  }
                }}
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-6 py-3 border-2 border-gray-300 border-r-0 rounded-l-lg text-base font-roboto focus:outline-none focus:border-primary bg-white"
                />
                <button className="bg-primary text-white px-5 py-3 rounded-r-lg hover:bg-primary-dark transition-colors flex items-center justify-center">
                  <Search size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-6">
              <button className="flex flex-col items-center text-black hover:text-primary transition-colors">
                <User size={28} strokeWidth={1.5} />
              </button>
              <button className="flex flex-col items-center text-black hover:text-primary transition-colors relative">
                <Heart size={28} strokeWidth={1.5} />
              </button>
              <button className="flex flex-col items-center text-black hover:text-primary transition-colors relative">
                <ShoppingCart size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {/* Browse All Category Button with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-primary text-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-primary-dark transition-colors font-roboto font-medium text-2xl leading-none tracking-normal"
              >
                <Menu size={20} />
                <span>Browse All Category</span>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[200px]">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-black transition-colors border-b border-gray-100 last:border-b-0 font-roboto font-medium text-lg leading-none tracking-normal"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8">
              <a href="#" className="text-black hover:text-primary font-roboto font-[500] text-2xl leading-none tracking-normal transition-colors">
                Home
              </a>
              <a href="#" className="text-black hover:text-primary font-roboto font-[500] text-2xl leading-none tracking-normal transition-colors">
                Shop
              </a>
              <a href="#" className="text-black hover:text-primary font-roboto font-[500] text-2xl leading-none tracking-normal transition-colors">
                Track Order
              </a>
              <a href="#" className="text-black hover:text-primary font-roboto font-[500] text-2xl leading-none tracking-normal transition-colors">
                Return
              </a>
              <a href="#" className="text-black hover:text-primary font-roboto font-[500] text-2xl leading-none tracking-normal transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header