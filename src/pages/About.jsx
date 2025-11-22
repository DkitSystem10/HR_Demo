import React, { useState, useEffect, useRef, useCallback } from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImg from '../assets/about.png'

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const frameworkSectionRef = useRef(null)
  const lettersContentRef = useRef(null)
  const carouselContentGridRef = useRef(null)
  const descriptionTextRef = useRef(null)
  const scrollLockRef = useRef(false)
  const scrollPositionRef = useRef(0)
  const isPositioningRef = useRef(false)
  const mobileCarouselRef = useRef(null)
  const autoSlideIntervalRef = useRef(null)
  const isAutoSlidingRef = useRef(false)
  const isGoingToFooterRef = useRef(false)
  const touchStartXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const touchEndXRef = useRef(0)
  const touchEndYRef = useRef(0)

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
  const [isAtHeroSection, setIsAtHeroSection] = useState(false)
  const [isSContentFullyVisible, setIsSContentFullyVisible] = useState(false)
  const carouselInitializedRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  // Track window size for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768)
    }
    
    // Check on mount
    checkMobile()
    
    // Check on resize
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Handle letter click
  const handleLetterClick = useCallback((index) => {
    // Allow clicking when inside the D U R K K A S section
    if (isAnimating && !animationComplete) {
      // Set the clicked letter as active to display its content
      setCurrentLetterIndex(index)
      setCanAdvance(false)
      
      // If clicking on S (last letter), mark it as fully visible after animation
      if (index === frameworkData.length - 1) {
        setTimeout(() => {
          setIsSContentFullyVisible(true)
          setCanAdvance(true)
        }, 600)
      } else {
        // Reset S visibility flag when clicking other letters
        setIsSContentFullyVisible(false)
        // Re-enable after animation
        setTimeout(() => {
          setCanAdvance(true)
        }, 600)
      }
    }
  }, [isAnimating, animationComplete])

  // Scroll lock and animation logic - manual scroll control
  useEffect(() => {
    const showNextLetter = () => {
      if (currentLetterIndex < frameworkData.length - 1 && canAdvance) {
        setCanAdvance(false)
        const nextIndex = currentLetterIndex + 1
        setCurrentLetterIndex(nextIndex)
        
        // If reached S (last letter), mark it as fully visible after animation
        if (nextIndex === frameworkData.length - 1) {
          setTimeout(() => {
            setIsSContentFullyVisible(true)
            setCanAdvance(true)
          }, 600) // Animation duration - S content is now fully visible
        } else {
          // Allow next scroll after animation completes
          setTimeout(() => {
            setCanAdvance(true)
          }, 600) // Animation duration
        }
      }
    }

    const showPreviousLetter = () => {
      if (currentLetterIndex > 0) {
        // Allow scroll up even if canAdvance is false (for first scroll up)
        setCanAdvance(false)
        const prevIndex = currentLetterIndex - 1
        setCurrentLetterIndex(prevIndex)
        
        // Reset S content visibility flag when leaving S
        if (currentLetterIndex === frameworkData.length - 1) {
          setIsSContentFullyVisible(false)
        }
        
        // Allow next scroll after animation completes
        setTimeout(() => {
          setCanAdvance(true)
        }, 600) // Animation duration
      }
    }

    const handleWheel = (e) => {
      if (isAnimating && !animationComplete && !isMobile) {
        // If on last letter (S) and scrolling down, unlock scroll to allow page to scroll down to footer
        // Only allow if S content is fully visible
        if (currentLetterIndex === frameworkData.length - 1 && e.deltaY > 0 && canAdvance && isSContentFullyVisible) {
          // Set flag to prevent scroll position restoration
          isGoingToFooterRef.current = true
          
          // Unlock scroll and restore normal scrolling
          setIsAnimating(false)
          scrollLockRef.current = false
          setAnimationComplete(true)
          setIsSContentFullyVisible(false) // Reset flag
          
          // Restore body styles first
          document.body.style.overflow = ''
          document.body.style.position = ''
          document.body.style.top = ''
          document.body.style.width = ''
          
          // Get current scroll position and scroll down to footer
          const currentScrollTop = scrollPositionRef.current || (window.pageYOffset || document.documentElement.scrollTop)
          
          // Restore scroll position first, then allow natural scroll to continue to footer
          requestAnimationFrame(() => {
            window.scrollTo({
              top: currentScrollTop,
              behavior: 'auto'
            })
            
            // Reset flag after a delay to allow scroll to footer
            setTimeout(() => {
              isGoingToFooterRef.current = false
            }, 1000)
          })
          
          // Allow normal scroll to continue down to footer
          return true
        }
        
        // If on S but content not fully visible yet, prevent scroll down
        if (currentLetterIndex === frameworkData.length - 1 && e.deltaY > 0 && !isSContentFullyVisible) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          return false
        }
        
        // If on first letter (D) and scrolling up, go directly to hero section
        if (currentLetterIndex === 0 && e.deltaY < 0) {
          // Set flag first to prevent scroll restoration
          setIsAtHeroSection(true)
          
          // Unlock scroll and restore normal scrolling
          setIsAnimating(false)
          scrollLockRef.current = false
          
          // Restore body styles first
          document.body.style.overflow = ''
          document.body.style.position = ''
          document.body.style.top = ''
          document.body.style.width = ''
          
          // Get hero section position before setting animationComplete
          const heroSectionTop = frameworkSectionRef.current?.offsetTop || 0
          
          // Set animationComplete after restoring styles to prevent scroll restoration
          setAnimationComplete(true)
          
          // Scroll to the Durkkas Business Framework hero section immediately
          // Account for navbar/topbar height (typically ~100-120px) to ensure heading is clearly visible
          requestAnimationFrame(() => {
            const navbarHeight = 120 // Approximate navbar + topbar height
            window.scrollTo({
              top: heroSectionTop - navbarHeight, // Offset to ensure heading is clearly visible
              behavior: 'smooth'
            })
          })
          
          // Allow normal scroll to continue
          return true
        }
        
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        
        // Handle scroll down to advance animation (within section)
        if (e.deltaY > 0 && canAdvance) {
          showNextLetter()
        }
        // Handle scroll up to go to previous letter (within section, except from D)
        else if (e.deltaY < 0 && currentLetterIndex > 0) {
          showPreviousLetter()
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

    // Mobile swipe handlers for carousel
    const handleMobileTouchStart = (e) => {
      if (isMobile && isAnimating && !animationComplete && currentLetterIndex >= 0) {
        touchStartXRef.current = e.touches[0].clientX
        touchStartYRef.current = e.touches[0].clientY
        touchEndXRef.current = touchStartXRef.current
        touchEndYRef.current = touchStartYRef.current
      }
    }

    const handleMobileTouchMove = (e) => {
      if (isMobile && isAnimating && !animationComplete && currentLetterIndex >= 0) {
        touchEndXRef.current = e.touches[0].clientX
        touchEndYRef.current = e.touches[0].clientY
        
        const horizontalDistance = Math.abs(touchStartXRef.current - touchEndXRef.current)
        const verticalDistance = Math.abs(touchStartYRef.current - touchEndYRef.current)
        
        // Only prevent default if it's a horizontal swipe (for carousel navigation)
        // Allow vertical scrolling to work normally
        if (horizontalDistance > 10 && horizontalDistance > verticalDistance * 1.5) {
          e.preventDefault()
          e.stopPropagation()
        }
        // Otherwise, allow normal vertical scrolling
      }
    }

    const handleMobileTouchEnd = (e) => {
      if (isMobile && isAnimating && !animationComplete && currentLetterIndex >= 0) {
        const swipeDistance = touchStartXRef.current - touchEndXRef.current
        const verticalDistance = touchStartYRef.current - touchEndYRef.current
        
        // Reset touch positions after processing
        const resetTouch = () => {
          touchStartXRef.current = 0
          touchStartYRef.current = 0
          touchEndXRef.current = 0
          touchEndYRef.current = 0
        }
        
        // If on S and swiping down vertically, allow scrolling to footer
        if (currentLetterIndex === frameworkData.length - 1 && isSContentFullyVisible && verticalDistance < -50 && Math.abs(verticalDistance) > Math.abs(swipeDistance)) {
          // Unlock scroll and allow scrolling to footer
          isGoingToFooterRef.current = true
          setIsAnimating(false)
          scrollLockRef.current = false
          setAnimationComplete(true)
          setIsSContentFullyVisible(false)
          
          // Restore body styles
          document.body.style.overflow = ''
          document.body.style.position = ''
          document.body.style.top = ''
          document.body.style.width = ''
          
          // Restore scroll position and allow natural scroll to footer
          const currentScrollTop = scrollPositionRef.current || (window.pageYOffset || document.documentElement.scrollTop)
          requestAnimationFrame(() => {
            window.scrollTo({
              top: currentScrollTop,
              behavior: 'auto'
            })
            setTimeout(() => {
              isGoingToFooterRef.current = false
            }, 1000)
          })
          resetTouch()
          return
        }
        
        // Determine primary swipe direction
        const absHorizontal = Math.abs(swipeDistance)
        const absVertical = Math.abs(verticalDistance)
        const isVerticalSwipe = absVertical > absHorizontal
        const isHorizontalSwipe = absHorizontal > absVertical
        
        // Process vertical swipes for carousel navigation (lowered threshold for better responsiveness)
        if (absVertical > 30 && isVerticalSwipe) {
          // Swipe up - go to previous letter
          if (verticalDistance > 0 && canAdvance) {
            setCurrentLetterIndex((prevIndex) => {
              if (prevIndex > 0) {
                return prevIndex - 1
              }
              return prevIndex
            })
            setIsSContentFullyVisible(false) // Reset S visibility when going back
            setCanAdvance(false)
            setTimeout(() => {
              setCanAdvance(true)
            }, 600)
            resetTouch()
            return // Prevent horizontal handler from processing
          }
          // Swipe down - go to next letter (only if not on last letter)
          else if (verticalDistance < 0 && canAdvance) {
            setCurrentLetterIndex((prevIndex) => {
              if (prevIndex < frameworkData.length - 1) {
                const nextIdx = prevIndex + 1
                setCanAdvance(false)
                // Check if we'll reach S
                if (nextIdx === frameworkData.length - 1) {
                  setTimeout(() => {
                    setIsSContentFullyVisible(true)
                    setCanAdvance(true)
                  }, 600)
                } else {
                  setTimeout(() => {
                    setCanAdvance(true)
                  }, 600)
                }
                return nextIdx
              }
              return prevIndex
            })
            resetTouch()
            return // Prevent horizontal handler from processing
          }
        }
        
        // Process horizontal swipes for carousel navigation (only if not already processed vertical)
        if (absHorizontal > 30 && isHorizontalSwipe) {
          // Swipe left - go to next letter
          if (swipeDistance > 0 && canAdvance) {
            setCurrentLetterIndex((prevIndex) => {
              if (prevIndex < frameworkData.length - 1) {
                const nextIdx = prevIndex + 1
                setCanAdvance(false)
                // Check if we'll reach S
                if (nextIdx === frameworkData.length - 1) {
                  setTimeout(() => {
                    setIsSContentFullyVisible(true)
                    setCanAdvance(true)
                  }, 600)
                } else {
                  setTimeout(() => {
                    setCanAdvance(true)
                  }, 600)
                }
                return nextIdx
              }
              return prevIndex
            })
            resetTouch()
            return
          }
          // Swipe right - go to previous letter
          else if (swipeDistance < 0 && canAdvance) {
            setCurrentLetterIndex((prevIndex) => {
              if (prevIndex > 0) {
                return prevIndex - 1
              }
              return prevIndex
            })
            setIsSContentFullyVisible(false) // Reset S visibility when going back
            setCanAdvance(false)
            setTimeout(() => {
              setCanAdvance(true)
            }, 600)
            resetTouch()
            return
          }
        }
        
        // Reset touch if no swipe was detected
        resetTouch()
      }
    }

    const handleKeyDown = (e) => {
      if (isAnimating && !animationComplete) {
        if (['ArrowDown', 'PageDown', 'Space'].includes(e.key) && canAdvance) {
          // If on last letter (S) and pressing down, unlock scroll to allow page to scroll down to footer
          // Only allow if S content is fully visible
          if (currentLetterIndex === frameworkData.length - 1 && isSContentFullyVisible) {
            // Set flag to prevent scroll position restoration
            isGoingToFooterRef.current = true
            
            // Unlock scroll and restore normal scrolling
            setIsAnimating(false)
            scrollLockRef.current = false
            setAnimationComplete(true)
            setIsSContentFullyVisible(false) // Reset flag
            
            // Restore body styles first
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            
            // Get current scroll position
            const currentScrollTop = scrollPositionRef.current || (window.pageYOffset || document.documentElement.scrollTop)
            
            // Restore scroll position first, then allow natural scroll to continue to footer
            requestAnimationFrame(() => {
              window.scrollTo({
                top: currentScrollTop,
                behavior: 'auto'
              })
              
              // Reset flag after a delay to allow scroll to footer
              setTimeout(() => {
                isGoingToFooterRef.current = false
              }, 1000)
            })
            
            return true
          }
          // If on S but content not fully visible yet, prevent scroll down
          if (currentLetterIndex === frameworkData.length - 1 && !isSContentFullyVisible) {
            e.preventDefault()
            e.stopPropagation()
            return false
          }
          // Within section - advance to next letter
          e.preventDefault()
          e.stopPropagation()
          showNextLetter()
          return false
        } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
          // If on first letter (D) and pressing up, go directly to hero section
          if (currentLetterIndex === 0) {
            // Set flag first to prevent scroll restoration
            setIsAtHeroSection(true)
            
            // Unlock scroll and restore normal scrolling
            setIsAnimating(false)
            scrollLockRef.current = false
            
            // Restore body styles first
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            
            // Get hero section position before setting animationComplete
            const heroSectionTop = frameworkSectionRef.current?.offsetTop || 0
            
            // Set animationComplete after restoring styles to prevent scroll restoration
            setAnimationComplete(true)
            
            // Scroll to the Durkkas Business Framework hero section immediately
            // Account for navbar/topbar height (typically ~100-120px) to ensure heading is clearly visible
            requestAnimationFrame(() => {
              const navbarHeight = 120 // Approximate navbar + topbar height
              window.scrollTo({
                top: heroSectionTop - navbarHeight, // Offset to ensure heading is clearly visible
                behavior: 'smooth'
              })
            })
            
            return true
          }
          // From any other letter, go to previous letter
          e.preventDefault()
          e.stopPropagation()
          showPreviousLetter()
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
        // Mobile: Allow normal scrolling, but enable swipe carousel
        const contentArea = lettersContentRef.current
        const carouselGrid = carouselContentGridRef.current
        const mainContentArea = mobileCarouselRef.current
        
        // Attach to multiple elements to ensure swipe detection works
        if (contentArea) {
          contentArea.addEventListener('touchstart', handleMobileTouchStart, { passive: true })
          contentArea.addEventListener('touchmove', handleMobileTouchMove, { passive: false })
          contentArea.addEventListener('touchend', handleMobileTouchEnd, { passive: true })
        }
        // Also attach to carousel grid for better swipe detection
        if (carouselGrid) {
          carouselGrid.addEventListener('touchstart', handleMobileTouchStart, { passive: true })
          carouselGrid.addEventListener('touchmove', handleMobileTouchMove, { passive: false })
          carouselGrid.addEventListener('touchend', handleMobileTouchEnd, { passive: true })
        }
        // Attach to main content area as well
        if (mainContentArea) {
          mainContentArea.addEventListener('touchstart', handleMobileTouchStart, { passive: true })
          mainContentArea.addEventListener('touchmove', handleMobileTouchMove, { passive: false })
          mainContentArea.addEventListener('touchend', handleMobileTouchEnd, { passive: true })
        }
        window.addEventListener('keydown', handleKeyDown, { passive: false })
        // Don't lock scroll on mobile - allow normal scrolling
      }
      scrollLockRef.current = true
    } else if (animationComplete && !isAtHeroSection && !isGoingToFooterRef.current) {
      // Restore scroll position only after animation completes (but not when going to hero section or footer)
      // Only restore on desktop - mobile never locks scroll
      if (!isMobile) {
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
    }

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
      // Remove mobile touch listeners
      const contentArea = lettersContentRef.current
      const carouselGrid = carouselContentGridRef.current
      const mainContentArea = mobileCarouselRef.current
      if (contentArea) {
        contentArea.removeEventListener('touchstart', handleMobileTouchStart)
        contentArea.removeEventListener('touchmove', handleMobileTouchMove)
        contentArea.removeEventListener('touchend', handleMobileTouchEnd)
      }
      if (carouselGrid) {
        carouselGrid.removeEventListener('touchstart', handleMobileTouchStart)
        carouselGrid.removeEventListener('touchmove', handleMobileTouchMove)
        carouselGrid.removeEventListener('touchend', handleMobileTouchEnd)
      }
      if (mainContentArea) {
        mainContentArea.removeEventListener('touchstart', handleMobileTouchStart)
        mainContentArea.removeEventListener('touchmove', handleMobileTouchMove)
        mainContentArea.removeEventListener('touchend', handleMobileTouchEnd)
      }
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isAnimating, animationComplete, canAdvance, currentLetterIndex, isAtHeroSection, isMobile, isSContentFullyVisible])

  // Handle scrolling from hero section back to letters section
  useEffect(() => {
    if (!isAtHeroSection || isAnimating) return

    if (isMobile) return

    const returnToLettersSection = () => {
      // Re-enable animation and return to letters section
      setIsAtHeroSection(false)
      setIsAnimating(true)
      scrollLockRef.current = true
      setAnimationComplete(false)
      setCurrentLetterIndex(0)
      setCanAdvance(true)
      carouselInitializedRef.current = true

      // Lock scroll and scroll to letters section
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      scrollPositionRef.current = lettersContentRef.current?.offsetTop || currentScroll

      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'

      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'smooth'
        })
      }, 50)
    }

    const handleHeroScroll = (e) => {
      // If scrolling down from hero section, return to D U R K K A S section
      if (e.deltaY > 0) {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        returnToLettersSection()
        return false
      }
    }

    const handleHeroKeyDown = (e) => {
      // If pressing ArrowDown from hero section, return to letters section
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.key)) {
        e.preventDefault()
        e.stopPropagation()
        returnToLettersSection()
        return false
      }
    }

    window.addEventListener('wheel', handleHeroScroll, { passive: false })
    window.addEventListener('keydown', handleHeroKeyDown, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleHeroScroll)
      window.removeEventListener('keydown', handleHeroKeyDown)
    }
  }, [isAtHeroSection, isAnimating])

  // Auto-slide disabled - manual swipe carousel only for mobile
  // Users must manually swipe through D U R K K A S letters

  // Ensure currentLetterIndex is set when carousel becomes active
  // Only set to 0 if it's still -1 (initial state), don't reset if user is navigating
  useEffect(() => {
    // Only set initial index once, never reset after initialization
    if (isAnimating && !animationComplete && currentLetterIndex === -1 && !carouselInitializedRef.current) {
      setCurrentLetterIndex(0)
      setCanAdvance(true)
      carouselInitializedRef.current = true
    }
  }, [isAnimating, animationComplete])

  // Intersection Observer to trigger animation - watches letters content section (below description)
  useEffect(() => {
    if (animationComplete || isPositioningRef.current || isAtHeroSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger only when the carousel content (D U R K K A S letters) is actually visible in viewport
          // Wait until content is significantly visible, not just when section header appears
          // This ensures scrolling continues through "Durkkas Business Framework" header section
          const isContentVisible = entry.isIntersecting && 
            entry.boundingClientRect.top < window.innerHeight * 0.8 && 
            entry.boundingClientRect.top > -100 &&
            entry.boundingClientRect.bottom > window.innerHeight * 0.2
          
          // Only trigger if carousel hasn't started yet (currentLetterIndex is -1)
          // Don't reset if user is already navigating through letters
          if (isContentVisible && currentLetterIndex === -1 && !isAnimating && !isPositioningRef.current) {
            isPositioningRef.current = true
            
            if (isMobile) {
              // Mobile: Just start the animation, don't lock scroll
              setIsAnimating(true)
              scrollLockRef.current = true
              setCurrentLetterIndex(0)
              setCanAdvance(true)
              carouselInitializedRef.current = true
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
                carouselInitializedRef.current = true
                // Save the final scroll position
                scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop
                isPositioningRef.current = false
              }, 700) // Wait for smooth scroll to complete
            }
          }
        })
      },
      { threshold: [0, 0.3, 0.5], rootMargin: '0px' }
    )

    const currentRef = carouselContentGridRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isAnimating, animationComplete, isAtHeroSection])

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
      <section ref={frameworkSectionRef} className="relative pt-4 md:pt-6 lg:pt-8 pb-0 overflow-hidden bg-white">
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
        className="relative pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Framework Letters Animation */}
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <div ref={carouselContentGridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
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
                        <div 
                          onClick={() => handleLetterClick(index)}
                          className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110 ${
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
              <div className="lg:hidden mb-6 w-full">
                <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide">
                  {frameworkData.map((item, index) => {
                    const letter = item.letter
                    const isActive = currentLetterIndex === index
                    const isPast = currentLetterIndex > index
                    
                    return (
                      <div key={index} className="flex-shrink-0">
                        <div 
                          onClick={() => handleLetterClick(index)}
                          className={`relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110 ${
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
              <div ref={mobileCarouselRef} className="lg:col-span-10 w-full min-h-[400px] relative px-12 sm:px-14 md:px-16 lg:px-0">
                {/* Mobile: Left Arrow Button */}
                {currentLetterIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (currentLetterIndex > 0 && canAdvance) {
                        // Use functional update to ensure we're using the latest state
                        setCurrentLetterIndex((prevIndex) => {
                          // Double check to prevent going below 0
                          if (prevIndex > 0) {
                            return prevIndex - 1
                          }
                          return prevIndex
                        })
                        setIsSContentFullyVisible(false)
                        setCanAdvance(false)
                        setTimeout(() => {
                          setCanAdvance(true)
                        }, 600)
                      }
                    }}
                    className="lg:hidden absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg"
                    aria-label="Previous letter"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                
                {/* Mobile: Right Arrow Button */}
                {currentLetterIndex < frameworkData.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      // Prevent multiple rapid clicks
                      if (!canAdvance) return
                      
                      // Calculate next index using functional update to avoid stale closure
                      setCurrentLetterIndex((prevIndex) => {
                        const nextIdx = prevIndex + 1
                        // Only proceed if we're not at the last letter
                        if (nextIdx < frameworkData.length) {
                          return nextIdx
                        }
                        return prevIndex
                      })
                      
                      // Update canAdvance state outside the functional update
                      setCanAdvance(false)
                      
                      // Handle S visibility and canAdvance reset based on what the next index will be
                      const nextIndex = currentLetterIndex + 1
                      if (nextIndex === frameworkData.length - 1) {
                        setTimeout(() => {
                          setIsSContentFullyVisible(true)
                          setCanAdvance(true)
                        }, 600)
                      } else {
                        setTimeout(() => {
                          setCanAdvance(true)
                        }, 600)
                      }
                    }}
                    className="lg:hidden absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg"
                    aria-label="Next letter"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
                
                {frameworkData.map((item, index) => {
                  const letter = item.letter
                  // Show content if it's the active letter
                  // If carousel is active but currentLetterIndex is -1, default to showing first letter (index 0)
                  const activeIndex = currentLetterIndex >= 0 ? currentLetterIndex : (isAnimating && !animationComplete ? 0 : -1)
                  const isActive = activeIndex === index
                  
                  if (!isActive || activeIndex === -1) return null
                  
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-12 transition-all duration-700"
                      style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
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

      <Footer />
    </div>
  )
}

export default About

