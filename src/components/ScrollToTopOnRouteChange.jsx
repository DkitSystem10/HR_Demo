import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation()

  const scrollToTop = () => {
    // Immediately scroll to top without smooth behavior
    // Set scroll position directly for immediate effect
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    // Also handle scrolling containers if any
    const scrollContainers = document.querySelectorAll('[data-scroll-container]')
    scrollContainers.forEach(container => {
      container.scrollTop = 0
    })
  }

  useEffect(() => {
    // Scroll to top on route change
    scrollToTop()
    
    // Also ensure scroll position is maintained after a short delay
    // This handles cases where content loads asynchronously
    const timeoutId = setTimeout(() => {
      scrollToTop()
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  // Also scroll to top on initial mount
  useEffect(() => {
    scrollToTop()
  }, [])

  return null
}

export default ScrollToTopOnRouteChange

