import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/common/SEO'
import { MapPin, Phone, Mail, Clock, MessageCircle, FileText, Video, HelpCircle, Globe } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: '',
    message: ''
  })

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
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }

  return (
    <>
      <SEO
        title="Contact Us – Durkkas People"
        description="Get in touch with Durkkas People HRMS experts. Request a demo, pricing details, or technical support. We're here to help."
        canonical="/contact"
      />
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 md:pt-36 lg:pt-40 pb-14 md:pb-18 lg:pb-20" style={{ background: 'linear-gradient(135deg, #007b83, #ff7b00)' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch with Our HRMS Experts
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Whether you need product demo, support, or pricing details — our team is here to help.
          </p>
        </div>
      </header>

      {/* Contact Form & Information Section */}
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-teal"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-teal"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-teal"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-teal"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Select Purpose *</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-teal bg-white"
                    >
                      <option value="">Choose a purpose</option>
                      <option value="demo">Product Demo</option>
                      <option value="pricing">Pricing Enquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership / Reseller</option>
                      <option value="general">General Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Message / Inquiry *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-teal resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-xl bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 mt-3">
                    ✅ We usually respond within 24 hours on business days.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 h-full">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-deep-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Office Address</h3>
                      <p className="text-gray-700">
                        Durkkas Innovation Pvt. Ltd,<br />
                        MDR Nagar,<br />
                        Aruppukottai – 626101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-deep-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                      <p className="text-gray-700">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-deep-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                      <p className="text-gray-700">hr@durkkas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-deep-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Website</h3>
                      <p className="text-gray-700">www.durkkas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-deep-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Working Hours</h3>
                      <p className="text-gray-700">Mon – Fri, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">Find Us on Map</h2>
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=MDR+Nagar,+Aruppukottai,+Tamil+Nadu+626101&output=embed&zoom=15"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Durkkas Innovation Office Location - MDR Nagar, Aruppukottai"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 mb-3">
                <strong>📍 Our Location:</strong> Durkkas Innovation Pvt. Ltd, MDR Nagar, Aruppukottai – 626101, Tamil Nadu, India
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=MDR+Nagar,+Aruppukottai,+Tamil+Nadu+626101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-deep-teal text-white font-semibold rounded-lg hover:bg-deep-teal/90 transition-colors shadow-md hover:shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Support / Quick Help Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8 text-center">Quick Help & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="#"
                className="bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 text-center transition-all transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-xl bg-deep-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-deep-teal transition-colors">
                  <MessageCircle className="w-8 h-8 text-deep-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600">Chat with us instantly</p>
              </a>

              <a
                href="#"
                className="bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 text-center transition-all transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-xl bg-accent-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-orange transition-colors">
                  <FileText className="w-8 h-8 text-accent-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Raise a Ticket</h3>
                <p className="text-sm text-gray-600">Submit a support ticket</p>
              </a>

              <a
                href="#"
                className="bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 text-center transition-all transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-xl bg-deep-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-deep-teal transition-colors">
                  <Video className="w-8 h-8 text-deep-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Book a Demo</h3>
                <p className="text-sm text-gray-600">Schedule a product demo</p>
              </a>

              <a
                href="#"
                className="bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 text-center transition-all transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-xl bg-accent-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-orange transition-colors">
                  <HelpCircle className="w-8 h-8 text-accent-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Help Center</h3>
                <p className="text-sm text-gray-600">Browse our knowledge base</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact

