import React, { useState } from 'react'
import { X } from 'lucide-react'

const PopupBanner = () => {
  const [isOpen, setIsOpen] = useState(() => {
    // Check localStorage on initial render
    if (typeof window !== 'undefined') {
      const popupShown = localStorage.getItem('popupShown')
      return !popupShown // Show popup if it hasn't been shown before
    }
    return true
  })
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    country: ''
  })

  const handleClose = () => {
    setIsOpen(false)
    // Mark as shown in localStorage (persists across sessions)
    if (typeof window !== 'undefined') {
      localStorage.setItem('popupShown', 'true')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly to schedule your demo.')
    setIsOpen(false)
    // Mark as shown in localStorage after form submission
    if (typeof window !== 'undefined') {
      localStorage.setItem('popupShown', 'true')
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop - starts below navbar (topbar: 2.5rem + navbar: 4rem mobile / 5rem desktop) */}
      <div 
        className="fixed left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-[50] transition-opacity duration-300 md:top-[7.5rem] top-[6.5rem]"
        onClick={handleClose}
      ></div>

      {/* Popup Modal - appears above backdrop but below navbar */}
      <div className="fixed left-0 right-0 bottom-0 z-[55] flex items-center justify-center p-4 pointer-events-none md:top-[7.5rem] top-[6.5rem]">
        <div className="relative bg-navy-blue border-2 border-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden pointer-events-auto">
          {/* Decorative Triangles - More prominent and colorful */}
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className="absolute top-1 left-1 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-accent-orange"></div>
            <div className="absolute top-4 left-4 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-deep-teal"></div>
            <div className="absolute top-8 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-yellow-400"></div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24">
            <div className="absolute top-1 right-1 w-0 h-0 border-r-[20px] border-r-transparent border-b-[30px] border-b-yellow-400"></div>
            <div className="absolute top-4 right-4 w-0 h-0 border-r-[15px] border-r-transparent border-b-[25px] border-b-red-500"></div>
            <div className="absolute top-8 right-8 w-0 h-0 border-r-[12px] border-r-transparent border-b-[20px] border-b-deep-teal"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <div className="absolute bottom-1 left-1 w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-deep-teal"></div>
            <div className="absolute bottom-4 left-4 w-0 h-0 border-l-[15px] border-l-transparent border-t-[25px] border-t-accent-orange"></div>
            <div className="absolute bottom-8 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-red-500"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24">
            <div className="absolute bottom-1 right-1 w-0 h-0 border-r-[20px] border-r-transparent border-t-[30px] border-t-yellow-400"></div>
            <div className="absolute bottom-4 right-4 w-0 h-0 border-r-[15px] border-r-transparent border-t-[25px] border-t-red-500"></div>
            <div className="absolute bottom-8 right-8 w-0 h-0 border-r-[12px] border-r-transparent border-t-[20px] border-t-accent-orange"></div>
          </div>

          {/* Close Button - White circle with black X */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-charcoal transition-colors shadow-lg"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative p-6 md:p-8">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Wait!</h2>
              <p className="text-lg md:text-xl text-white">
                Book a <span className="text-deep-teal font-bold">FREE</span> Demo Now and Get Extra Discount
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name*"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone/WhatsApp*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Your Country*"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-yellow-400 text-charcoal font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wide"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupBanner

