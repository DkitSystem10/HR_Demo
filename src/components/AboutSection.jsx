import React from 'react'
import aboutImg from '../assets/about.png'

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8">
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
  )
}

export default AboutSection


