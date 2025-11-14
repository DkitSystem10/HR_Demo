import React from 'react'
import {
  LayoutDashboard,
  UserCircle,
  CalendarCheck,
  Wallet,
  LineChart,
  Megaphone,
  MessageCircle
} from 'lucide-react'
import dashboardImg from '../assets/E_Dashboard.png'
import employee1 from '../assets/employee1.png'
import employee2 from '../assets/employee2.png'

const EmployeeManagementDetail = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Employee Module – Self-Service & Onboarding Portal',
      description:
        'Give every employee a single, secure workspace to manage onboarding, personal information, attendance, leave, performance, and payroll insights — all without needing to depend on HR teams.',
      bullets: [],
      highlights: [
        {
          title: 'One Hub for Everything',
          description:
            'Centralized access for onboarding, daily operations, and continuous engagement throughout the employee lifecycle.'
        },
        {
          title: 'Role-Based Access & Secure Data Storage',
          description:
            'Employees access only what they are authorised to view, ensuring privacy and compliance across the organisation.'
        },
        {
          title: 'Guided Workflows',
          description:
            'Step-by-step digital workflows for onboarding, profile updates, and policy acknowledgements keep employees informed and compliant.'
        },
        {
          title: 'Digital Document Vault (New)',
          description:
            'Securely upload and download ID proofs, payslips, experience letters, and compliance documents in one place.'
        },
        {
          title: 'Performance Snapshot Dashboard (New)',
          description:
            'Instant access to appraisal history, performance ratings, and skill progress empowers employees to track their growth.'
        },
        {
          title: 'Integrated Communication Channel (New)',
          description:
            'Built-in chat or announcement panels deliver direct updates from HR, policy changes, and company news to keep employees connected.'
        }
      ],
      icon: LayoutDashboard,
      image: dashboardImg
    },
    {
      id: 'profile',
      title: 'Profile Management',
      description:
        'Keep records accurate with self-service updates and rich employment snapshots that HR can trust.',
      bullets: [
        'Employees can update contact info, addresses and emergency details in real time',
        'Upload certifications, KYC proofs and policy acknowledgements securely',
        'View employee codes, departments, branches and reporting managers at a glance'
      ],
      icon: UserCircle,
      image: employee1
    },
    {
      id: 'attendance',
      title: 'Attendance & Leave Tracking',
      description:
        'Give managers and teams complete visibility into attendance, shifts and leave balances.',
      bullets: [
        'Capture attendance via biometric devices or web punch with audit trails',
        'Daily, weekly and monthly summaries highlight late entries and absences',
        'Leave requests, balances and approvals managed in one intuitive panel'
      ],
      icon: CalendarCheck,
      image: employee2
    },
    {
      id: 'payroll',
      title: 'Payroll & Payslip Access',
      description:
        'Create transparency by allowing employees to review salary components and download payslips anytime.',
      bullets: [
        'Secure payslip downloads with detailed breakup of earnings and deductions',
        'Clear visibility into EPF, ESI, TDS and other statutory deductions',
        'Optional bank detail updates flow to streamline payroll adjustments'
      ],
      icon: Wallet,
      image: employee1
    },
    {
      id: 'performance',
      title: 'Performance & Appraisal View',
      description:
        'Centralised access to appraisal cycles, feedback and performance insights keeps everyone aligned.',
      bullets: [
        'View appraisal results, manager remarks and goals in one place',
        'Submit self-evaluations during open appraisal cycles',
        'Track KPI progress with historical feedback and attachments'
      ],
      icon: LineChart,
      image: employee2
    },
    {
      id: 'announcements',
      title: 'Announcements, Policies & Tasks',
      description:
        'Ensure teams never miss a critical update with contextual communication embedded in their workspace.',
      bullets: [
        'Company-wide announcements and events surface directly in the module',
        'Quick access to HR policies, SOPs, handbooks and compliance documents',
        'Assigned tasks list with due dates and completion tracking'
      ],
      icon: Megaphone,
      image: employee1
    },
    {
      id: 'support',
      title: 'Support & HR Communication',
      description:
        'Close the loop faster with inbuilt messaging and ticketing that routes requests to the right HR specialist.',
      bullets: [
        'Raise payroll, attendance or leave queries and monitor responses',
        'Private conversations with HR or reporting managers stay within the module',
        'Automated notifications keep employees updated on ticket progress'
      ],
      icon: MessageCircle,
      image: employee2
    }
  ]

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12">
        <header className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-teal/10 text-deep-teal font-semibold uppercase tracking-wide text-xs md:text-sm">
            Employee Empowerment
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-deep-teal via-accent-orange to-deep-teal bg-clip-text text-transparent">
              Modern Employee Management Experiences Built for Engagement
            </span>
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Seamlessly onboard talent, maintain accurate employee data, enable self-service and keep everyone informed—
            all from a single, beautifully designed module that fits effortlessly into DurkkasHR.
          </p>
        </header>

        <div className="space-y-14 md:space-y-16 lg:space-y-20">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isReverse = index % 2 === 1

            return (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:items-stretch"
              >
                <div className={`${isReverse ? 'lg:order-2' : 'lg:order-1'} flex h-full`}>
                  <div className="relative w-full h-full rounded-3xl shadow-xl border border-white/50 overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 via-transparent to-deep-teal/10 mix-blend-multiply"></div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="relative w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`rounded-3xl shadow-xl border border-white/60 bg-white p-6 md:p-8 lg:p-10 flex flex-col gap-6 h-full ${
                    isReverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-deep-teal/10 text-deep-teal">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-deep-teal/80">
                      Employee Self-Service
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.description}</p>
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-3 text-gray-600 text-base md:text-lg leading-relaxed">
                      {section.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.highlights && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {section.highlights.map((highlight) => (
                        <div
                          key={highlight.title}
                          className="rounded-2xl border border-accent-orange/20 bg-accent-orange/5 p-5"
                        >
                          <h3 className="text-lg font-semibold text-charcoal mb-2">{highlight.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {highlight.description}
                          </p>
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

export default EmployeeManagementDetail


