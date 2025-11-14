import React from 'react'
import { useNavigate } from 'react-router-dom'

const RequestDemoSection = () => {
  const navigate = useNavigate()

  const handleRequestDemo = () => {
    // Navigate to signup page
    navigate('/signup')
  }

  return (
    <section className="relative pt-4 md:pt-6 pb-8 md:pb-12 lg:pb-16 overflow-hidden bg-white">
      {/* Soft blurred background with subtle theme colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/3 via-deep-teal/3 to-accent-orange/3 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/2 via-transparent to-deep-teal/2"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
          Ready to Transform Your HR Operations?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
          Experience the power of DurkkasHR with a personalized demo tailored to your organization's needs.
        </p>
        <button
          onClick={handleRequestDemo}
          className="px-10 py-4 bg-accent-orange text-white font-semibold text-lg rounded-xl hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Request Demo
        </button>
      </div>
    </section>
  )
}

export default RequestDemoSection

