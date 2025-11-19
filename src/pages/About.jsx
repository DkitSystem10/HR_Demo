import React, { useState, useEffect, useRef } from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImg from '../assets/about.png'

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const frameworkSectionRef = useRef(null)
  const lettersContentRef = useRef(null)
  const descriptionTextRef = useRef(null)
  const nextSectionRef = useRef(null)
  const scrollLockRef = useRef(false)
  const scrollPositionRef = useRef(0)
  const isPositioningRef = useRef(false)

  const frameworkData = [
    {
      letter: 'D',
      title: 'Data',
      subtitle: 'The Base Layer of Durkkas HRMS',
      description: 'Everything begins with clean and organized data. Durkkas HRMS collects and stores information from every area of the company, including:',
      points: [
        'Employee profiles',
        'Recruitment and candidate details',
        'Payroll information',
        'Attendance and leave records',
        'Department-wise metrics',
        'Role-based access settings'
      ],
      footer: 'With all data in one place, the entire HR system becomes accurate, consistent, and efficient.',
      modules: 'Linked Modules: Recruitment, Employee Management, Attendance, Admin Settings.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      letter: 'U',
      title: 'Understand',
      subtitle: 'Converting Data Into Useful Insights',
      description: 'Once the data is stored, the HRMS studies and presents it through easy-to-read insights such as:',
      points: [
        'Recruitment performance',
        'Qualification and shortlisting trends',
        'Attendance and leave patterns',
        'Department productivity',
        'HR team workload'
      ],
      footer: 'These insights help leaders and HR teams understand what\'s working well and what needs improvement.',
      modules: 'Linked Modules: Reports, Analytics, Appraisals, Department Insights.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      letter: 'R',
      title: 'Recommend',
      subtitle: 'Helping HR Teams Make Better Decisions',
      description: 'Using AI and automation, Durkkas HRMS gives suggestion-based support:',
      points: [
        'Candidate recommendations',
        'Resume analysis',
        'Smart interview flow',
        'Guided onboarding steps',
        'Appraisal guidance'
      ],
      footer: 'This helps HR teams save time and reduce mistakes, especially in hiring and onboarding.',
      modules: 'Linked Modules: AI Filtering, Resume Screening, Offer Letter Automation.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      letter: 'K',
      title: 'Keep (Retention)',
      subtitle: 'Ensuring Employees Stay for the Long Term',
      description: 'Retention becomes easier when employees have a smooth experience from day one. Durkkas HRMS supports this through:',
      points: [
        'Clear onboarding process',
        'Probation tracking',
        'Goal-setting and appraisals',
        'Self-service portal',
        'Communication updates'
      ],
      footer: 'This builds trust, improves satisfaction, and reduces employee turnover.',
      modules: 'Linked Modules: Onboarding, Appraisal, ESS Portal.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      letter: 'K',
      title: 'KPI Tracking',
      subtitle: 'Tracking What Matters in Real Time',
      description: 'The HRMS dashboards show key performance indicators such as:',
      points: [
        'Recruitment funnel status',
        'Attendance patterns',
        'Department productivity',
        'Employee lifecycle updates',
        'Company-wide activities'
      ],
      footer: 'This helps the management team stay up to date and make informed decisions quickly.',
      modules: 'Linked Modules: Admin Dashboard, HR Dashboard, Manager Dashboard.',
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50'
    },
    {
      letter: 'A',
      title: 'Automate',
      subtitle: 'Reducing Manual Work Across the System',
      description: 'Durkkas HRMS automates repetitive tasks like:',
      points: [
        'Offer letters',
        'Employee codes',
        'Candidate status updates',
        'Permissions',
        'Onboarding steps',
        'Attendance calculations',
        'Report downloads'
      ],
      footer: 'Coming soon: Payslips, WhatsApp/SMS alerts, HR chat assistant.',
      modules: 'Linked Modules: Recruitment, Onboarding, Attendance, Payroll.',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    },
    {
      letter: 'S',
      title: 'Scale',
      subtitle: 'Growing With Every Company, Without Limits',
      description: 'The HRMS is built to support multiple companies of any size:',
      points: [
        'One Super Admin → Unlimited companies',
        'Custom workflows for each company',
        'Role-based access for all users',
        'Multi-branch and multi-department structure',
        'API integrations',
        'Cloud-ready system'
      ],
      footer: 'This makes Durkkas HRMS suitable for small teams, growing startups, and large enterprises.',
      modules: 'Linked Modules: Super Admin, Company Admin, Integrations.',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50'
    }
  ]

  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1)
  const [canAdvance, setCanAdvance] = useState(true)

  // Scroll lock and animation logic - manual scroll control
  useEffect(() => {
    const showNextLetter = () => {
      if (currentLetterIndex < frameworkData.length - 1 && canAdvance) {
        setCanAdvance(false)
        const nextIndex = currentLetterIndex + 1
        setCurrentLetterIndex(nextIndex)
        
        // Allow next scroll after animation completes
        setTimeout(() => {
          setCanAdvance(true)
          
          // If all letters shown, unlock scroll
          if (nextIndex >= frameworkData.length - 1) {
            setTimeout(() => {
              setIsAnimating(false)
              scrollLockRef.current = false
              setAnimationComplete(true)
            }, 300)
          }
        }, 600) // Animation duration
      }
    }

    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768

    const handleWheel = (e) => {
      if (isAnimating && !animationComplete && !isMobile) {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        
        // Only handle scroll down to advance animation
        if (e.deltaY > 0 && canAdvance) {
          showNextLetter()
        }
        
        return false
      }
    }

    const handleTouchMove = (e) => {
      if (isAnimating && !animationComplete && !isMobile) {
        e.preventDefault()
        return false
      }
    }

    // On mobile, use scroll position to advance letters instead of locking
    const handleMobileScroll = () => {
      if (isMobile && isAnimating && !animationComplete && currentLetterIndex >= 0) {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop
        const sectionTop = scrollPositionRef.current || 0
        const scrollProgress = scrollY - sectionTop
        
        // Advance letter based on scroll progress (each letter after ~300px scroll)
        const targetIndex = Math.min(
          Math.floor(scrollProgress / 300),
          frameworkData.length - 1
        )
        
        if (targetIndex > currentLetterIndex && canAdvance) {
          setCurrentLetterIndex(targetIndex)
          setCanAdvance(false)
          setTimeout(() => {
            setCanAdvance(true)
            if (targetIndex >= frameworkData.length - 1) {
              setIsAnimating(false)
              scrollLockRef.current = false
              setAnimationComplete(true)
            }
          }, 300)
        }
      }
    }

    const handleKeyDown = (e) => {
      if (isAnimating && !animationComplete) {
        if (['ArrowDown', 'PageDown', 'Space'].includes(e.key) && canAdvance) {
          e.preventDefault()
          e.stopPropagation()
          showNextLetter()
          return false
        } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
          e.preventDefault()
          return false
        }
      }
    }

    if (isAnimating && !animationComplete) {
      // Save scroll position when animation starts
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      if (scrollPositionRef.current === 0) {
        scrollPositionRef.current = currentScroll
      }
      
      if (!isMobile) {
        // Desktop: Lock scroll with fixed positioning
        window.addEventListener('wheel', handleWheel, { passive: false })
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('keydown', handleKeyDown, { passive: false })
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollPositionRef.current}px`
        document.body.style.width = '100%'
      } else {
        // Mobile: Allow scrolling and advance letters based on scroll position
        window.addEventListener('scroll', handleMobileScroll, { passive: true })
        window.addEventListener('keydown', handleKeyDown, { passive: false })
        // Don't lock scroll on mobile - allow natural scrolling
      }
      scrollLockRef.current = true
    } else if (animationComplete) {
      // Restore scroll position only after animation completes
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      const savedPosition = scrollPositionRef.current
      setTimeout(() => {
        window.scrollTo({
          top: savedPosition,
          behavior: 'smooth'
        })
      }, 50)
    }

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('scroll', handleMobileScroll)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isAnimating, animationComplete, canAdvance, currentLetterIndex])


  // Intersection Observer to trigger animation - watches letters content section (below description)
  useEffect(() => {
    if (animationComplete || isPositioningRef.current) return

    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger when the letters section starts to appear (top edge enters viewport)
          // This ensures normal scrolling works until this section appears
          if (entry.isIntersecting && entry.boundingClientRect.top <= window.innerHeight && entry.boundingClientRect.top > -100 && currentLetterIndex === -1 && !isAnimating && !isPositioningRef.current) {
            isPositioningRef.current = true
            
            if (isMobile) {
              // Mobile: Just start the animation, don't lock scroll
              setIsAnimating(true)
              scrollLockRef.current = true
              setCurrentLetterIndex(0)
              setCanAdvance(true)
              scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop
              isPositioningRef.current = false
            } else {
              // Desktop: Calculate perfect scroll position and lock
              const lettersSectionTop = entry.boundingClientRect.top + window.pageYOffset
              const viewportHeight = window.innerHeight
              const contextAbove = viewportHeight * 0.08 // 8% for description section above
              const targetScrollPosition = lettersSectionTop - contextAbove
              
              // Prevent scroll during positioning
              const preventScroll = (e) => {
                e.preventDefault()
                e.stopPropagation()
                return false
              }
              
              window.addEventListener('wheel', preventScroll, { passive: false })
              window.addEventListener('touchmove', preventScroll, { passive: false })
              
              // Smooth scroll to perfect position
              window.scrollTo({
                top: targetScrollPosition,
                behavior: 'smooth'
              })
              
              // Lock scroll after smooth scroll completes
              setTimeout(() => {
                // Remove temporary scroll prevention
                window.removeEventListener('wheel', preventScroll)
                window.removeEventListener('touchmove', preventScroll)
                
                // Lock scroll at perfect position
                setIsAnimating(true)
                scrollLockRef.current = true
                // Start with first letter
                setCurrentLetterIndex(0)
                setCanAdvance(true)
                // Save the final scroll position
                scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop
                isPositioningRef.current = false
              }, 700) // Wait for smooth scroll to complete
            }
          }
        })
      },
      { threshold: 0, rootMargin: '0px' }
    )

    const currentRef = lettersContentRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [currentLetterIndex, isAnimating, animationComplete])

  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 md:pt-36 lg:pt-40 pb-14 md:pb-18 lg:pb-20" style={{ background: 'linear-gradient(135deg, #007b83, #ff7b00)' }}>
        <div className="container-custom text-center relative">
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-white/20 rounded-full opacity-60"></div>
          <div className="absolute top-8 right-1/4 w-6 h-6 border-2 border-white/20 rounded-full opacity-40"></div>
          <div className="absolute bottom-2 left-1/3 w-4 h-4 border-2 border-white/20 rounded-full opacity-40"></div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative inline-block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About Us – DurkkasHR
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Empowering businesses to grow by putting their people first through innovative HR solutions.
          </p>
        </div>
      </header>

      <section className="relative bg-white pt-12 md:pt-16 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full">
              <img
                src={aboutImg}
                alt="About DurkkasHR"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                About Us – <span className="text-deep-teal">DurkkasHR</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DurkkasHR, powered by Durkkas Innovations, is a next-generation Human Resource Management Platform built to simplify and automate workforce operations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We bring every HR function — from onboarding and attendance to payroll, performance, and analytics — into one smart, connected system.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our goal is simple: help businesses of all sizes save time, reduce manual work, and make data-driven decisions through clarity and automation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With a modern interface, real-time insights, and human-centered design, DurkkasHR transforms HR from a process into an experience — empowering teams to work transparently, efficiently, and confidently.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-deep-teal to-[#005a61] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">Vision</h3>
                  <p className="text-white/95 leading-relaxed relative z-10">
                    Empower businesses to grow by putting their people first.
                  </p>
                </div>
                <div className="relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-accent-orange to-[#e66d00] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">Mission</h3>
                  <p className="text-white/95 leading-relaxed relative z-10">
                    Make HR simpler, smarter, and more human through innovation and design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="relative py-2 md:py-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="h-1 bg-gradient-to-r from-transparent via-deep-teal/30 via-accent-orange/30 to-transparent"></div>
          </div>
        </div>
        <div className="relative z-10 text-center">
          <div className="inline-block px-6 py-2 bg-white rounded-full border-2 border-deep-teal/30 shadow-lg">
            <span className="text-sm md:text-base font-semibold text-deep-teal">FRAMEWORK</span>
          </div>
        </div>
      </div>

      {/* DURKKAS Business Framework Section - Separate Topic */}
      <section className="relative pt-4 md:pt-6 lg:pt-8 pb-0 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-4 animate-heading-shadow">
              Durkkas Business Framework
            </h2>
            <p className="text-xl md:text-2xl text-deep-teal font-semibold mb-2">
              POWERING DURKKAS HRMS
            </p>
            <p ref={descriptionTextRef} className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mt-4">
              Durkkas HRMS is built on a clear and practical 7-stage business framework called the DURKKAS Model.
              This framework brings together data, automation, and smart workflows to help companies manage their people in a structured, scalable way.
            </p>
          </div>
        </div>
      </section>

      {/* Separate Section for Framework Letters Animation */}
      <section 
        ref={lettersContentRef} 
        className="relative pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Framework Letters Animation */}
          <div className="relative min-h-[600px] md:min-h-[700px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Sidebar - Timeline (Desktop Only) */}
              <div className="hidden lg:flex lg:col-span-2 flex-col items-start">
                <div className="relative flex flex-col items-start gap-4 lg:gap-6 py-4">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-white/20"></div>
                  
                  {frameworkData.map((item, index) => {
                    const letter = item.letter
                    const isActive = currentLetterIndex === index
                    const isPast = currentLetterIndex > index
                    
                    return (
                      <div key={index} className="relative flex items-center gap-6 z-10">
                        {/* Circle */}
                        <div className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'scale-125 bg-gradient-to-br from-deep-teal via-accent-orange to-deep-teal shadow-lg ring-4 ring-deep-teal/20' 
                            : isPast
                            ? 'bg-deep-teal/40 scale-100 ring-2 ring-deep-teal/30'
                            : 'bg-white/10 scale-100 ring-1 ring-white/20'
                        }`}>
                          <span className={`text-2xl font-bold ${
                            isActive ? 'text-white' : isPast ? 'text-white' : 'text-white/60'
                          }`}>
                            {letter}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Mobile: Letters Row at Top */}
              <div className="lg:hidden mb-6">
                <div className="flex justify-center items-center gap-1 sm:gap-1.5 md:gap-2">
                  {frameworkData.map((item, index) => {
                    const letter = item.letter
                    const isActive = currentLetterIndex === index
                    const isPast = currentLetterIndex > index
                    
                    return (
                      <div key={index} className="flex-shrink-0">
                        <div className={`relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'scale-110 bg-gradient-to-br from-deep-teal via-accent-orange to-deep-teal shadow-lg ring-2 ring-deep-teal/30' 
                            : isPast
                            ? 'bg-deep-teal/40 scale-100 ring-1 ring-deep-teal/20'
                            : 'bg-white/10 scale-100 ring-1 ring-white/20'
                        }`}>
                          <span className={`text-base sm:text-lg md:text-xl font-bold ${
                            isActive ? 'text-white' : isPast ? 'text-white/80' : 'text-white/40'
                          }`}>
                            {letter}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Center and Right - Main Content Area */}
              <div className="lg:col-span-10 w-full">
                {frameworkData.map((item, index) => {
                  const letter = item.letter
                  const isActive = currentLetterIndex === index
                  
                  if (!isActive) return null
                  
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-12 transition-all duration-700"
                    >
                      {/* Center - Large Letter Circle */}
                      <div className="flex-shrink-0 w-full lg:w-auto mb-4 lg:mb-0">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                          {/* Animated Background Circle */}
                          <div className="absolute inset-0 rounded-full animate-circle-gradient overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-deep-teal via-accent-orange to-deep-teal bg-[length:200%_200%] animate-gradient-move"></div>
                          </div>
                          {/* Letter */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[12rem] font-black text-white drop-shadow-2xl z-10">
                              {letter}
                            </span>
                          </div>
                        </div>
                        {/* Title below circle on mobile */}
                        <div className="lg:hidden mt-2 text-center">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 w-full text-left">
                        <div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 hidden lg:block">
                            {index + 1}. {item.letter} – {item.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-cyan-300 mb-3 sm:mb-4 text-left">
                            {item.subtitle}
                          </p>
                        </div>
                        
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed text-left">
                          {item.description}
                        </p>

                        <ul className="space-y-2 md:space-y-3 text-left">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 sm:gap-3">
                              <span className="text-accent-orange text-base sm:text-lg font-bold mt-0.5 sm:mt-1 flex-shrink-0">✔</span>
                              <span className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-medium pt-2 text-left">
                          {item.footer}
                        </p>

                        <div className="pt-2 text-left">
                          <p className="text-xs sm:text-sm md:text-base text-cyan-300 font-semibold">
                            {item.modules}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Framework Description Section */}
      <section ref={nextSectionRef} className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <p className="text-base md:text-lg text-black max-w-4xl mx-auto leading-relaxed">
              Every module inside the HRMS is connected to one stage of this framework, making the system easier to use, more reliable, and ready for future growth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

