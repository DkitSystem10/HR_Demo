import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const featuresRef = useRef(null)
  useEffect(() => {
    if (!isFeaturesOpen) return

    const handleClickOutside = (event) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setIsFeaturesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isFeaturesOpen])

  const routeActive = useMemo(() => {
    const path = location.pathname
    const hash = location.hash
    if (path === '/') {
      if (hash === '#about') return 'About Us'
      return 'Home'
    }
    if (path.startsWith('/feature')) return 'Features'
    if (path.startsWith('/blog')) return 'Blog'
    if (path.startsWith('/pricing')) return 'Pricing'
    if (path.startsWith('/contact')) return 'Contact Us'
    return 'Home'
  }, [location.pathname, location.hash])

  const menuItems = ['Home', 'Features', 'Pricing', 'Blog', 'About Us', 'Contact Us']
  const featuresMenuItems = [
    { label: 'Employee Management', path: '/feature/employee-management' },
    { label: 'Data Master', path: '/feature/data-master' },
    { label: 'Payroll Management', path: '/feature/payroll-management' },
    { label: 'Attendance Management', path: '/feature/attendance-management' },
    { label: 'Reports', path: '/feature/reports' }
  ]

  return (
    <nav className="bg-white shadow-md fixed left-0 right-0 z-[60]" style={{ marginBottom: 0, paddingBottom: 0, top: '2.5rem' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="DurkkasHR Logo" 
              className="h-14 w-auto md:h-20"
            />
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-deep-teal">Durkkas</span><span className="text-accent-orange">HR</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => {
              if (item === 'Features') {
                return (
                  <div key={item} className="relative" ref={featuresRef}>
                    <button
                      type="button"
                      onClick={() => setIsFeaturesOpen((prev) => !prev)}
                      className={`relative font-medium transition-colors flex items-center gap-1 ${
                        routeActive === 'Features' || isFeaturesOpen ? 'text-accent-orange' : 'text-charcoal'
                      }`}
                    >
                      {item}
                      <svg
                        className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isFeaturesOpen && (
                      <div className="absolute left-0 mt-3 w-56 rounded-xl border border-gray-100 bg-white shadow-xl py-2">
                        {featuresMenuItems.map((feature) => (
                          <button
                            key={feature.path}
                            onClick={() => {
                              setIsFeaturesOpen(false)
                              navigate(feature.path)
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-light-gray transition-colors"
                          >
                            {feature.label}
                          </button>
                        ))}
                      </div>
                    )}
                    {routeActive === 'Features' && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-orange rounded-full"></span>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => {
                    setActiveMenu(item)
                    e.preventDefault()
                    if (item === 'Home') {
                      navigate('/')
                    } else if (item === 'Blog') {
                      navigate('/blog')
                    } else if (item === 'Pricing') {
                      navigate('/pricing')
                    } else if (item === 'About Us') {
                      if (location.pathname !== '/') {
                        navigate('/')
                        setTimeout(() => {
                          const aboutSection = document.getElementById('about')
                          if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            try { window.location.hash = 'about' } catch {}
                          }
                        }, 150)
                      } else {
                        const aboutSection = document.getElementById('about')
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          try { window.location.hash = 'about' } catch {}
                        }
                      }
                    } else if (item === 'Contact Us') {
                      navigate('/contact')
                    }
                  }}
                  className={`relative font-medium transition-colors ${
                    routeActive === item ? 'text-accent-orange' : 'text-charcoal'
                  }`}
                >
                  {item}
                  {routeActive === item && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-orange rounded-full"></span>
                  )}
                </a>
              )
            })}
            </div>
            
            {/* Desktop Action Buttons */}
            <div className="flex items-center gap-3 ml-4">
              <button
                onClick={() => {
                  // Handle login navigation
                  console.log('Login clicked')
                }}
                className="px-6 py-2.5 bg-accent-orange text-white font-semibold rounded-lg shadow-[0_4px_0_0_#cc6200,0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_#cc6200,0_4px_8px_rgba(0,0,0,0.15)] hover:translate-y-0.5 transition-all duration-150 active:shadow-[0_1px_0_0_#cc6200,0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-1"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-6 py-2.5 bg-accent-orange text-white font-semibold rounded-lg shadow-[0_4px_0_0_#cc6200,0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_#cc6200,0_4px_8px_rgba(0,0,0,0.15)] hover:translate-y-0.5 transition-all duration-150 active:shadow-[0_1px_0_0_#cc6200,0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-1"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => {
              if (item === 'Features') {
                return (
                  <div key={item} className="border border-gray-100 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setIsMobileFeaturesOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between py-2.5 px-4 text-left font-medium text-charcoal"
                    >
                      <span className={routeActive === 'Features' ? 'text-accent-orange' : ''}>{item}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isMobileFeaturesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileFeaturesOpen && (
                      <div className="border-t border-gray-100 bg-light-gray/60">
                        {featuresMenuItems.map((feature) => (
                          <button
                            key={feature.path}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsMobileFeaturesOpen(false)
                              setActiveMenu('Features')
                              navigate(feature.path)
                            }}
                            className="w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-white transition-colors"
                          >
                            {feature.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => {
                    setActiveMenu(item)
                    setIsMobileMenuOpen(false)
                    e.preventDefault()
                    if (item === 'Home') {
                      navigate('/')
                    } else if (item === 'Blog') {
                      navigate('/blog')
                    } else if (item === 'Pricing') {
                      navigate('/pricing')
                    } else if (item === 'About Us') {
                      if (location.pathname !== '/') {
                        navigate('/')
                        setTimeout(() => {
                          const aboutSection = document.getElementById('about')
                          if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            try { window.location.hash = 'about' } catch {}
                          }
                        }, 150)
                      } else {
                        const aboutSection = document.getElementById('about')
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          try { window.location.hash = 'about' } catch {}
                        }
                      }
                    } else if (item === 'Contact Us') {
                      navigate('/contact')
                    }
                  }}
                  className={`block py-2.5 px-4 rounded-lg transition-colors ${
                    routeActive === item ? 'text-accent-orange bg-accent-orange/10' : 'text-charcoal'
                  }`}
                >
                  {item}
                </a>
              )
            })}
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 mt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  // Handle login navigation
                  console.log('Login clicked')
                }}
                className="w-full px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg shadow-[0_4px_0_0_#cc6200,0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_#cc6200,0_4px_8px_rgba(0,0,0,0.15)] hover:translate-y-0.5 transition-all duration-150 active:shadow-[0_1px_0_0_#cc6200,0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-1 text-center"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  navigate('/signup')
                }}
                className="w-full px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg shadow-[0_4px_0_0_#cc6200,0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_#cc6200,0_4px_8px_rgba(0,0,0,0.15)] hover:translate-y-0.5 transition-all duration-150 active:shadow-[0_1px_0_0_#cc6200,0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-1 text-center"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

