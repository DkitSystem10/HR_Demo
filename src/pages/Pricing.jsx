import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/common/SEO'
import { ChevronDown } from 'lucide-react'

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [expandedFeatures, setExpandedFeatures] = useState({})

  const toggleFeature = (planId, featureId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [`${planId}-${featureId}`]: !prev[`${planId}-${featureId}`]
    }))
  }

  const plans = [
    {
      id: 'essential',
      name: 'Essential',
      monthlyPrice: 2499,
      employees: 30,
      perAdditional: 50,
      features: [
        {
          id: 'payroll',
          name: 'Payroll',
          details: ['Salary processing', 'Tax calculations', 'Payslip generation']
        },
        {
          id: 'core-hr',
          name: 'Core HR',
          details: ['Employee database', 'Profile management', 'Organization chart']
        },
        {
          id: 'compliance',
          name: 'Compliance',
          details: ['PF/ESIC compliance', 'TDS management', 'Statutory reports']
        },
        {
          id: 'self-service',
          name: 'Employee Self-Service',
          details: ['Leave requests', 'Attendance view', 'Document access', 'Pay Slip Download']
        }
      ]
    },
    {
      id: 'regular',
      name: 'Most Popular',
      monthlyPrice: 4999,
      employees: 50,
      perAdditional: 60,
      features: [
        {
          id: 'payroll',
          name: 'Payroll',
          details: ['Salary processing', 'Tax calculations', 'Payslip generation', 'Bonus & incentives']
        },
        {
          id: 'core-hr',
          name: 'Core HR',
          details: ['Employee database', 'Profile management', 'Organization chart', 'Performance tracking']
        },
        {
          id: 'compliance',
          name: 'Compliance',
          details: ['PF/ESIC compliance', 'TDS management', 'Statutory reports', 'Audit support']
        },
        {
          id: 'self-service',
          name: 'Employee Self-Service',
          details: ['Leave requests', 'Attendance view', 'Document access', 'Expense claims', 'Pay Slip Download']
        },
        {
          id: 'additional',
          name: 'Additional Features',
          details: ['Advanced analytics', 'Custom reports', 'API access', 'Priority support']
        }
      ],
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium',
      isCustom: true
    }
  ]

  const getPrice = (plan) => {
    if (billingPeriod === 'monthly') {
      return plan.monthlyPrice
    } else {
      const annualTotal = plan.monthlyPrice * 12 * 0.8
      return Math.round(annualTotal)
    }
  }

  const getOriginalAnnualPrice = (plan) => plan.monthlyPrice * 12

  return (
    <>
      <SEO
        title="Pricing – DurkkasHR"
        description="Flexible HRMS pricing for Indian businesses. Choose Essential, Regular, or Premium plans designed to streamline payroll, attendance, invoicing, data master, and analytics."
        canonical="/pricing"
      />
      <Topbar />
      <Navbar />

      <header className="pt-32 md:pt-36 lg:pt-40 pb-14 md:pb-18 lg:pb-20" style={{ background: 'linear-gradient(135deg, #007b83, #ff7b00)' }}>
        <div className="container-custom text-center relative">
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-white/20 rounded-full opacity-60"></div>
          <div className="absolute top-8 right-1/4 w-6 h-6 border-2 border-white/20 rounded-full opacity-40"></div>
          <div className="absolute bottom-2 left-1/3 w-4 h-4 border-2 border-white/20 rounded-full opacity-40"></div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative inline-block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            DurkkasHR Plans and Pricing
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Choose a plan and then select add-ons as per your requirements, or let our team recommend the best plan for you.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-deep-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annually')}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  billingPeriod === 'annually'
                    ? 'bg-deep-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Annually
              </button>
            </div>
            {billingPeriod === 'annually' && (
              <p className="text-lg font-semibold text-accent-orange">
                Save 20% on Annual Billing of Our Payroll Software.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {plans.map((plan) => {
              const isHighlighted = plan.highlighted
              const isCustom = plan.isCustom

              // Custom Premium Plan
              if (isCustom) {
                return (
                  <section
                    key={plan.id}
                    className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all border border-gray-200 w-full max-w-[320px] mx-auto overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-deep-teal/10 text-deep-teal">
                        {plan.name}
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-charcoal">
                            Custom Plan – Tailored for Your Needs
                          </h2>
                          <p className="text-gray-700 leading-relaxed text-base mb-5">
                            We build the plan exactly based on your specific requirements.
                          </p>
                        </div>
                        <div className="space-y-4 text-left">
                          <div className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex w-2 h-2 rounded-full bg-deep-teal flex-shrink-0"></span>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              Every feature will be customized to match your workflow, and you will receive a fully personalized setup for your organization.
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex w-2 h-2 rounded-full bg-deep-teal flex-shrink-0"></span>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              Our team will make adjustments based on your feedback at every step, ensuring complete satisfaction and flexible, scalable options designed to grow with your company.
                            </p>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <button className="w-full px-6 py-3 rounded-xl bg-accent-orange text-white font-semibold hover:bg-accent-orange/90 transition shadow-lg hover:shadow-xl uppercase">
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                )
              }

              // Regular Plans (Essential and Most Popular)
              const price = getPrice(plan)
              return (
                <section
                  key={plan.id}
                  className={`bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all border w-full max-w-[320px] mx-auto ${
                    isHighlighted ? 'border-deep-teal ring-2 ring-deep-teal/20' : 'border-gray-200'
                  } overflow-hidden relative`}
                >
                  <div className={`${isHighlighted ? 'bg-deep-teal' : 'bg-transparent'} p-6`}>
                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                      isHighlighted ? 'bg-white/20 text-white' : 'bg-deep-teal/10 text-deep-teal'
                    }`}>
                      {plan.name}
                    </div>
                    <div className={`${isHighlighted ? 'text-white' : 'text-charcoal'} leading-tight`}>
                      <h2 className="text-4xl md:text-5xl font-bold mb-1 flex flex-wrap items-baseline gap-2">
                        <span className="whitespace-nowrap">
                          ₹{price.toLocaleString('en-IN')}
                        </span>
                        {billingPeriod === 'annually' && (
                          <span className="line-through text-base md:text-lg font-normal opacity-70 whitespace-nowrap">
                            ₹{getOriginalAnnualPrice(plan).toLocaleString('en-IN')}
                          </span>
                        )}
                        <span className="text-lg md:text-xl font-medium whitespace-nowrap">
                          / {billingPeriod === 'monthly' ? 'month' : 'year'}
                        </span>
                      </h2>
                      <p className={`text-sm ${isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
                        (Up to {plan.employees} employees)
                      </p>
                      <p className={`text-sm mt-1 ${isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
                        ₹{plan.perAdditional}/month (Per additional employee)
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-2">
                      {plan.features.map((feature) => {
                        const isExpanded = expandedFeatures[`${plan.id}-${feature.id}`]
                        return (
                          <div key={feature.id} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                            <button
                              onClick={() => toggleFeature(plan.id, feature.id)}
                              className="w-full flex items-center justify-between py-3 text-left hover:text-deep-teal transition-colors"
                            >
                              <span className="font-medium text-charcoal">{feature.name}</span>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  isExpanded ? 'transform rotate-180' : ''
                                }`}
                              />
                            </button>
                            {isExpanded && (
                              <div className="pl-4 pb-2 space-y-1">
                                {feature.details.map((detail, idx) => (
                                  <p key={idx} className="text-sm text-gray-600">• {detail}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    <button className="w-full mt-6 px-6 py-3 rounded-xl bg-accent-orange text-white font-semibold hover:bg-accent-orange/90 transition shadow-lg hover:shadow-xl uppercase">
                      Buy Now
                    </button>
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Pricing
