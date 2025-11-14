import { useEffect } from 'react'

const SEO = ({ title, description, canonical }) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      const origin = window.location.origin || ''
      link.setAttribute('href', canonical.startsWith('http') ? canonical : origin + canonical)
    }
  }, [title, description, canonical])

  return null
}

export default SEO



