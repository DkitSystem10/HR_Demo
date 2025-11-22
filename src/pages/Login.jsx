import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Check if user has signed up for free trial
      // In a real app, this would check against your backend/database
      const hasSignedUp = localStorage.getItem('freeTrialSignedUp') === 'true'
      
      if (!hasSignedUp) {
        setError('Please sign up for a free trial first to access the login.')
        setIsLoading(false)
        return
      }

      // Basic validation
      if (!formData.email || !formData.password) {
        setError('Please fill in all fields.')
        setIsLoading(false)
        return
      }

      // Simulate successful login
      console.log('Login attempt:', formData)
      setIsLoading(false)
      alert('Login successful! Redirecting to dashboard...')
      // Navigate to dashboard or home
      navigate('/')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col">
      <Topbar />
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center pt-24 md:pt-28 pb-12 px-4 md:px-8">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Blurred Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/10 via-accent-orange/5 to-deep-teal/10 opacity-50"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-deep-teal/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent-orange/20 blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-deep-teal to-accent-orange mb-4 shadow-lg">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-600">
                  Sign in to access your DurkkasHR account
                </p>
              </div>

              {/* Free Trial Notice */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 border border-deep-teal/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-deep-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal mb-1">
                      Free Trial Access Only
                    </p>
                    <p className="text-xs text-gray-600">
                      Only users who have signed up for the free trial can log in. 
                      <button
                        onClick={() => navigate('/signup')}
                        className="text-deep-teal hover:text-accent-orange font-semibold underline ml-1"
                      >
                        Sign up here
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-teal focus:border-deep-teal transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-charcoal mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-teal focus:border-deep-teal transition-all"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 text-deep-teal border-gray-300 rounded focus:ring-deep-teal"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-deep-teal hover:text-accent-orange font-semibold transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-deep-teal to-accent-orange text-white font-bold text-lg rounded-xl hover:from-deep-teal/90 hover:to-accent-orange/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Sign In
                    </>
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('/signup')}
                    className="text-deep-teal hover:text-accent-orange font-semibold underline transition-colors"
                  >
                    Sign up for free trial
                  </button>
                </p>
              </div>

              {/* Back to Home */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => navigate('/')}
                  className="text-sm text-gray-500 hover:text-deep-teal transition-colors"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login








