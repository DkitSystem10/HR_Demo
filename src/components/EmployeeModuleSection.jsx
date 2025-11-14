import React from 'react'
import { LayoutDashboard, UserCircle, CalendarCheck, Wallet, LineChart, Megaphone, MessageCircle } from 'lucide-react'
import dashboardImg from '../assets/E_Dashboard.png'
import employee1 from '../assets/employee1.png'
import employee2 from '../assets/employee2.png'
import employee3 from '../assets/employee3.png'

const EmployeeModuleSection = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Employee Module – Self-Service & Onboarding Portal',
      description:
        'Give every employee a single, secure workspace to manage onboarding, personal information, attendance, leave, performance, and payroll insights — all without needing to depend on HR teams.',
      bullets: [
        'One hub for onboarding, daily operations, and continuous engagement',
        'Role-based access with secure storage for personal and employment data',
        'Guided workflows keep employees compliant and productive from day one'
      ],
      highlights: [
        {
          title: 'One Hub for Everything',
          description:
            'Centralized access for onboarding, daily operations, and continuous engagement throughout the employee lifecycle.'
        },
        {
          title: 'Role-Based Access & Secure Data Storage',
          description:
            'Employees see only what they are authorised to view, preserving privacy and audit readiness across the organisation.'
        },
        {
          title: 'Guided Workflows',
          description:
            'Step-by-step digital journeys for onboarding, profile updates, and policy acknowledgements keep employees informed and compliant.'
        },
        {
          title: 'Digital Document Vault',
          description:
            'Securely upload and download ID proofs, payslips, experience letters, and compliance documents from a single, trusted repository.'
        },
        {
          title: 'Performance Snapshot Dashboard',
          description:
            'Unlock instant access to appraisal history, performance ratings, and skill progression so employees can track their growth.'
        },
        {
          title: 'Integrated Communication Channel',
          description:
            'Built-in chat and announcement panels deliver timely updates from HR, policy changes, and company news to keep teams connected.'
        }
      ],
      icon: LayoutDashboard,
      image: dashboardImg
    },
    {
      id: 'profile',
      title: 'Profile Management & Digital Records',
      description: 'Keep employee data accurate with self-service edits and automated document updates.',
      bullets: [
        'Update contact details, addresses and emergency contacts',
        'Upload certificates and compliance documents as needed',
        'View job codes, departments, locations and reporting lines'
      ],
      icon: UserCircle,
      image: employee1
    },
    {
      id: 'attendance',
      title: 'Attendance & Leave Tracking',
      description: 'Track work hours and leave requests effortlessly with real-time visibility for managers.',
      bullets: [
        'Daily attendance capture via biometric, web or import',
        'Monthly summaries with late/absent insights',
        'Apply for leave, view balances and follow approval status'
      ],
      icon: CalendarCheck,
      image: employee2
    },
    {
      id: 'payroll',
      title: 'Payroll & Payslip Access',
      description: 'Offer transparent salary insights with downloadable payslips and controlled bank data updates.',
      bullets: [
        'Download monthly payslips securely',
        'Breakdown of gross, deductions (EPF, ESI, taxes) and net pay',
        'Optional employee bank detail update workflow'
      ],
      icon: Wallet,
      image: employee3
    },
    {
      id: 'performance',
      title: 'Performance & Appraisal Reviews',
      description: 'Centralise appraisal history, review notes and self-evaluations in one place.',
      bullets: [
        'View appraisal outcomes and performance remarks',
        'Submit self-assessments during open cycles',
        'Track goals, KRAs and manager feedback'
      ],
      icon: LineChart,
      image: employee1
    },
    {
      id: 'announcements',
      title: 'Announcements, Policies & Tasks',
      description: 'Keep teams aligned with timely communication and actionable to-do lists.',
      bullets: [
        'Broadcast news, events and policy updates',
        'Provide quick links to HR manuals and SOPs',
        'Assign tasks and monitor completion status'
      ],
      icon: Megaphone,
      image: employee2
    },
    {
      id: 'support',
      title: 'Support & HR Communication',
      description: 'Enable employees to raise requests, track resolutions and connect with HR instantly.',
      bullets: [
        'Integrated helpdesk for payroll, leave and attendance queries',
        'Conversation history with HR or reporting managers',
        'Automated notifications for ticket updates and closures'
      ],
      icon: MessageCircle,
      image: employee3
    }
  ]

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${dashboardImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-md"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-teal/10 text-deep-teal font-semibold uppercase tracking-wide text-xs md:text-sm">
            Employee Experience
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Elevate Every Employee Journey with Seamless Self-Service
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            The Employee Module combines intuitive design, secure access and actionable insights so teams can work
            smarter—from onboarding to daily operations and growth milestones.
          </p>
        </div>

        <div className="space-y-14 md:space-y-16 lg:space-y-20">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isReverse = index % 2 === 1

            return (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={`relative w-full h-full ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="absolute -inset-4 bg-deep-teal/10 blur-2xl rounded-3xl"></div>
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`relative bg-white/90 backdrop-blur rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100 ${
                    isReverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-deep-teal/10 text-deep-teal mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-5">{section.description}</p>
                  <ul className="space-y-3 text-gray-600">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {section.highlights && (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {section.highlights.map((highlight) => (
                        <div key={highlight.title} className="rounded-2xl border border-accent-orange/20 bg-accent-orange/5 p-5">
                          <h4 className="text-lg font-semibold text-charcoal mb-2">{highlight.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-sm">{highlight.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EmployeeModuleSection


