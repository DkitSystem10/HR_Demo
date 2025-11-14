import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    description: '',
    phoneCode: '+91',
    phoneNumber: ''
  })
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy')
      return
    }
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! Your free trial has been activated.')
    // Navigate to home or dashboard
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Topbar />
      <Navbar />
      
      {/* Main Content - Two Column Layout */}
      <div className="flex-1 flex pt-24 md:pt-28">
        {/* Left Side - Theme Colored Design */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-deep-teal to-accent-orange"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-accent-orange/30 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your HR Operations
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the power of DurkkasHR with a comprehensive HRMS solution designed for modern businesses.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Complete HR Management Suite</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Real-time Analytics & Insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Automated Workflows & Processes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Secure & Scalable Platform</span>
              </div>
            </div>

            {/* Decorative Pattern */}
            <div className="mt-8 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-8 py-8 lg:py-16">
          <div className="w-full max-w-md">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
              Start your 30-day free trial
            </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Company Name Field */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-charcoal mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-charcoal mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  readOnly
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-accent-orange border-gray-300 rounded focus:ring-accent-orange"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-accent-orange underline hover:text-accent-orange/80">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-accent-orange underline hover:text-accent-orange/80">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-accent-orange text-white font-bold text-lg rounded-lg hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              FREE SIGN UP
            </button>
          </form>

            {/* Back to Home Link */}
            <div className="mt-6">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-accent-orange transition-colors text-sm"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

