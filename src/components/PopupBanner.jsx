import React, { useState, useEffect, useRef } from 'react'
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
  const [popupTop, setPopupTop] = useState('8rem') // Default fallback
  const backdropRef = useRef(null)
  const modalRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    country: ''
  })

  // Calculate actual navbar height dynamically
  useEffect(() => {
    const calculatePopupPosition = () => {
      if (typeof window === 'undefined') return

      // Find the navbar element - try multiple selectors
      const navbar = document.querySelector('nav[class*="fixed"]') || 
                     document.querySelector('nav.fixed') ||
                     document.querySelector('nav')
      
      // Find topbar - try multiple selectors
      const topbar = document.querySelector('div[class*="topbar"]') ||
                     document.querySelector('div[class*="h-10"][class*="fixed"]') ||
                     document.querySelector('div[class*="z-[60]"][class*="fixed"]')
      
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect()
        const topbarRect = topbar ? topbar.getBoundingClientRect() : null
        const topbarHeight = topbarRect ? topbarRect.height : 40 // fallback to 40px
        const navbarBottom = navbarRect.bottom
        const totalHeight = navbarBottom
        // Add extra safety margin (48px = 3rem) to prevent any overlap at any zoom level
        const safeTop = totalHeight + 48 // 48px = 3rem safety margin
        
        setPopupTop(`${safeTop}px`)
      } else {
        // Fallback calculation
        const isMobile = window.innerWidth < 768
        const topbarHeight = 40 // 2.5rem
        const navbarHeight = isMobile ? 64 : 80 // h-16 or h-20
        const safeTop = topbarHeight + navbarHeight + 48 // 48px safety margin
        setPopupTop(`${safeTop}px`)
      }
    }

    // Calculate on mount and when window resizes or zooms
    calculatePopupPosition()
    
    // Use requestAnimationFrame for smooth updates
    let rafId = requestAnimationFrame(calculatePopupPosition)
    
    window.addEventListener('resize', calculatePopupPosition)
    window.addEventListener('orientationchange', calculatePopupPosition)
    
    // Recalculate on scroll (in case navbar changes)
    window.addEventListener('scroll', calculatePopupPosition, { passive: true })
    
    // Also recalculate after delays to catch any dynamic content
    const timeoutId1 = setTimeout(calculatePopupPosition, 100)
    const timeoutId2 = setTimeout(calculatePopupPosition, 500)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', calculatePopupPosition)
      window.removeEventListener('orientationchange', calculatePopupPosition)
      window.removeEventListener('scroll', calculatePopupPosition)
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
    }
  }, [isOpen])

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
      {/* Backdrop - starts below navbar (dynamically calculated) */}
      <div 
        ref={backdropRef}
        className="fixed left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-[50] transition-opacity duration-300"
        style={{ top: popupTop }}
        onClick={handleClose}
      ></div>

      {/* Popup Modal - appears above backdrop but below navbar */}
      <div 
        ref={modalRef}
        className="fixed left-0 right-0 bottom-0 z-[55] flex items-center justify-center p-4 pointer-events-none"
        style={{ top: popupTop }}
      >
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

