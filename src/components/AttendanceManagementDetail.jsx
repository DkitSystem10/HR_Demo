import React from 'react'
import {
  Clock,
  LayoutDashboard,
  CalendarClock,
  ClipboardCheck,
  Smartphone,
  History,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  GitMerge,
  LineChart,
  Wallet
} from 'lucide-react'
import attendanceSecondary from '../assets/E_Dashboard2.png'

const featureHighlights = [
  {
    title: 'Multiple Attendance Modes',
    description:
      'Capture attendance through biometric devices, web check-in/out, or mobile app. Every entry stores time, shift, and location metadata automatically.',
    icon: Clock
  },
  {
    title: 'Real-Time Dashboard',
    description:
      'Give HR and managers instant visibility of who is present, absent, late, or on leave through a unified dashboard with branch and department filters.',
    icon: LayoutDashboard
  },
  {
    title: 'Shift & Schedule Management',
    description:
      'Create general, rotational, or night shifts, auto-assign employees, and compute late arrivals, early exits, and overtime without manual tracking.',
    icon: CalendarClock
  },
  {
    title: 'Leave Integration',
    description:
      'Sync approved, pending, or rejected leaves with attendance registers in real time so payroll and compliance teams always act on accurate data.',
    icon: ClipboardCheck
  },
  {
    title: 'Self Check-In / Check-Out',
    description:
      'Enable employees to mark attendance securely from web or mobile channels with automated timestamps plus IP and GPS validation.',
    icon: Smartphone
  },
  {
    title: 'Attendance Correction Workflow',
    description:
      'Let employees raise correction requests for missed punches or device failures. Managers approve or decline with a complete audit trail.',
    icon: History
  },
  {
    title: 'Detailed Reports & Analytics',
    description:
      'Generate and export daily, weekly, or monthly summaries covering late coming, early exits, overtime, and absentee trends in Excel, PDF, or CSV.',
    icon: BarChart3
  },
  {
    title: 'Role-Based Access Control',
    description:
      'Provide tailored views for Admins, HR, Managers, and Employees to uphold data security while keeping the experience transparent and collaborative.',
    icon: ShieldCheck
  }
]

const benefits = [
  'Simplifies daily HR operations by removing manual attendance reconciliation.',
  'Reduces manipulation and errors with automated, tamper-resistant records.',
  'Improves payroll accuracy and statutory compliance readiness.',
  'Builds transparency and trust between HR teams, managers, and employees.',
  'Boosts productivity with live monitoring and proactive alerts.'
]

const integrations = [
  {
    title: 'Leave & Payroll Modules',
    description: 'Convert attendance and leave data into precise salary calculations automatically.',
    icon: Wallet
  },
  {
    title: 'Performance Module',
    description: 'Feed punctuality insights into appraisal cycles and performance planning.',
    icon: LineChart
  },
  {
    title: 'Reports & Analytics',
    description: 'Blend attendance insights with organisational dashboards for executive visibility.',
    icon: GitMerge
  }
]

const AttendanceManagementDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ff] via-white to-[#f9fbff]">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-20 -left-16 h-48 w-48 rounded-full bg-white/70 blur-3xl"></div>
          <div className="absolute top-12 right-10 h-36 w-36 rounded-full bg-accent-orange/10 blur-2xl"></div>
          <div className="absolute bottom-16 left-16 h-28 w-28 rounded-full bg-deep-teal/10 blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10 pt-24 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-orange/10 text-accent-orange font-semibold uppercase tracking-wide text-xs md:text-sm">
              Attendance Management
            </span>
            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-deep-teal via-accent-orange to-deep-teal bg-clip-text text-transparent">
                Smart Attendance Tracking for Modern Workplaces
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our Attendance Management Module helps organisations capture accurate time, shift, and leave data with zero
              manual effort. Seamless biometric integrations, real-time dashboards, and correction workflows ensure every minute
              is accounted for across locations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="rounded-3xl border border-white/70 bg-white/80 backdrop-blur-lg shadow-md p-5">
                <p className="text-sm uppercase tracking-wide text-gray-500">Coverage</p>
                <p className="mt-2 text-2xl font-semibold text-charcoal">Branches, Shifts &amp; Remote Teams</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/80 backdrop-blur-lg shadow-md p-5">
                <p className="text-sm uppercase tracking-wide text-gray-500">Reliability</p>
                <p className="mt-2 text-2xl font-semibold text-charcoal">Real-Time Attendance Confidence</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative pb-20">
        <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/70 to-transparent pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="rounded-[2.5rem] bg-white shadow-xl border border-slate-100/70 px-6 py-10 md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[3fr_2fr] items-center">
              <div>
                <div className="flex items-center gap-3 text-deep-teal font-semibold uppercase text-xs md:text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  Overview
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-charcoal">
                  Accurate, Effortless Attendance for Every Workforce Scenario
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Reduce manual reconciliation and gain real-time visibility into work hours, shifts, and leave impact. By
                  connecting attendance with leave, payroll, and performance modules, you maintain a single source of truth while
                  empowering teams with self-service experiences.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-deep-teal/10 blur-2xl"></div>
                <div className="rounded-3xl overflow-hidden border border-white/70 shadow-2xl">
                  <img
                    src={attendanceSecondary}
                    alt="Attendance heatmap and reports"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute left-10 top-24 h-20 w-20 rounded-full bg-accent-orange/10 blur-2xl"></div>
          <div className="absolute right-8 bottom-10 h-24 w-24 rounded-full bg-white/70 blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-charcoal">
            Key Features Crafted for Precision &amp; Control
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
            Every feature is engineered to ensure data accuracy, empower employees, and keep HR leaders informed in real time.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featureHighlights.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl border border-white/70 bg-white/90 backdrop-blur-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="inline-flex items-center justify-center rounded-2xl bg-accent-orange/10 text-accent-orange p-3 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{feature.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-accent-orange to-deep-teal transition-transform duration-300 rounded-b-3xl"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl bg-gradient-to-br from-white via-deep-teal/5 to-accent-orange/10 shadow-xl border border-white/70 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                Benefits
              </h2>
              <ul className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span className="text-lg md:text-xl font-semibold text-charcoal/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white shadow-xl border border-white/70 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal flex items-center gap-3">
                <GitMerge className="w-6 h-6 text-deep-teal" />
                Integration Ready
              </h3>
              <p className="mt-3 text-gray-600">
                Plug Attendance Management into the rest of your HR ecosystem to automate downstream workflows instantly.
              </p>
              <div className="mt-6 space-y-5">
                {integrations.map((integration) => {
                  const Icon = integration.icon
                  return (
                    <div key={integration.title} className="flex gap-4">
                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-accent-orange/10 text-accent-orange">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-charcoal">{integration.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{integration.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 md:px-10 text-center">
          <div className="rounded-[2.5rem] bg-white shadow-2xl border border-white/70 px-6 py-12 md:px-14 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Smart. Simple. Accurate. Every Minute Counts.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              Experience a modern attendance solution that elevates productivity, accuracy, and trust across your organisation.
              Let us walk you through a personalised demo tailored to your workforce model.
            </p>
            <button
              className="mt-8 px-10 py-5 bg-deep-teal text-white font-semibold text-lg rounded-xl hover:bg-deep-teal/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              aria-label="Book an attendance management demo"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AttendanceManagementDetail

