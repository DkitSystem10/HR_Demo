import React from 'react'
import { useNavigate } from 'react-router-dom'
import hrImage from '../assets/HR-1.png'
import sideImage from '../assets/side_image.png'

const HeroSection = () => {
  const navigate = useNavigate()
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleGetStarted = () => {
    navigate('/signup')
  }

  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md -z-10 scale-110"
        style={{
          backgroundImage: `url(${hrImage})`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center relative z-20">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-3 lg:space-y-4 relative z-30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight relative z-30 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', marginTop: 0 }}>
              Empowering Smarter
              <br />
              <span className="text-accent-orange">HR Management</span>
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl mx-auto lg:mx-0 relative z-30 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
              DurkkasHR simplifies your HR journey with automation, analytics, and employee engagement — all in one place.
            </p>
            
            {/* Request Demo Label */}
            <p className="text-base md:text-lg text-accent-orange font-semibold relative z-30 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
              Request Demo
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 relative z-30">
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-accent-orange text-white font-semibold rounded-xl hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl relative z-30"
              >
                Get Started
              </button>
              <button 
                onClick={scrollToFeatures}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-deep-teal transition-all transform hover:scale-105 relative z-30 shadow-lg" 
                style={{ textShadow: 'none' }}
              >
                Explore Features
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-first lg:order-last z-20">
            <img 
              src={sideImage}
              alt="Hero illustration"
              className="w-full h-auto lg:h-[600px] object-contain"
              style={{ mixBlendMode: 'normal' }}
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-deep-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

export default HeroSection

