import React from 'react'

const TransformSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 pt-0 pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Transform Your HR Operations with{' '}
            <span className="text-accent-orange">DurkkasHR</span>
            <br />
            <span className="text-deep-teal">Smart, Simple & Scalable HRM Software</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Experience the next generation of workforce management with DurkkasHR, your trusted HR technology partner. Our intelligent HRM platform is designed to simplify complex HR tasks, enhance employee engagement, and drive organizational growth — all from a single, unified system.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Section 1: Empower Your Workforce */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-orange to-accent-orange/80 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Empower Your Workforce with Precision and Efficiency
            </h3>
            <p className="text-gray-600 leading-relaxed">
              DurkkasHR automates every aspect of human resource management — from onboarding and payroll to performance tracking and compliance — ensuring accuracy and transparency in every process. Say goodbye to manual errors and hello to a streamlined, digital-first HR experience.
            </p>
          </div>

          {/* Section 2: Built for Modern Businesses */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-deep-teal to-deep-teal/80 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Built for Modern Businesses, Compliant with Indian HR Standards
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a startup or a large enterprise, DurkkasHR adapts to your business needs with ease. Our software is fully aligned with Indian labor and HR regulations, providing you with a secure and compliant solution that scales as your organization grows.
            </p>
          </div>

          {/* Section 3: Focus on People */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-orange/80 to-deep-teal flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Focus on People, Not Paperwork
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With DurkkasHR handling your daily HR operations, your team can focus on what truly matters — people, performance, and progress. Simplify HR management, reduce administrative workload, and make data-driven decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformSection

