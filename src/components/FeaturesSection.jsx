import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesSection = () => {
  const features = [
    {
      id: 'attendance-management',
      name: 'Attendance Management',
      description: 'Track employee attendance, leaves, and time logs with automated systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'payroll-management',
      name: 'Payroll Management',
      description: 'Automate payroll processing, salary calculations, and tax compliance effortlessly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'statutory-management',
      name: 'Statutory Management',
      description: 'Comprehensive compliance management for PF, ESI, TDS, Professional Tax, and Labour Welfare Fund.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'reports',
      name: 'Reports',
      description: 'Generate comprehensive reports and analytics for data-driven decision making.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="relative bg-white scroll-mt-20">
      {/* Full-Width Hero Section */}
      <div className="relative w-full pt-12 md:pt-16 pb-4 md:pb-6">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4 leading-tight">
              Powerful <span className="text-accent-orange">Features</span> for Modern HR
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Comprehensive HR management solutions designed to streamline your operations, 
              boost productivity, and empower your workforce with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="relative bg-white pt-8 md:pt-10 pb-6 md:pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-accent-orange/30 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 relative overflow-hidden"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Orange-themed Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-orange/10 group-hover:bg-accent-orange text-accent-orange group-hover:text-white transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl">
                    {feature.icon}
                  </div>

                  {/* Feature Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-accent-orange transition-colors duration-500 ease-in-out">
                    {feature.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-500 ease-in-out">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={feature.id === 'statutory-management' ? '/test' : `/feature/${feature.id}`}
                    className="inline-flex items-center text-accent-orange font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-500 ease-in-out hover:text-accent-orange/80"
                    aria-label={`Learn more about ${feature.name}`}
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
