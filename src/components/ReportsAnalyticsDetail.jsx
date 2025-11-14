import React from 'react'
import {
  LayoutDashboard,
  Users,
  BarChart3,
  PieChart,
  ClipboardList,
  FileSpreadsheet,
  SlidersHorizontal,
  CheckCircle2,
  LineChart,
  Database,
  CalendarClock,
  Sparkles,
  BarChart4,
  Share2
} from 'lucide-react'
import analyticsSecondary from '../assets/E_Dashboard.png'

const featureHighlights = [
  {
    title: 'Role-Based Dashboards',
    description:
      'Give Admins, HR, and Managers customised dashboards to monitor KPIs like attendance trends, active employees, new hires, and performance summaries in one place.',
    icon: LayoutDashboard,
    accent: {
      bg: 'bg-[#1f7ae0]/10',
      text: 'text-[#1f7ae0]'
    }
  },
  {
    title: 'Recruitment Funnel Reports',
    description:
      'Track every hiring stage—from lead generation to onboarding—with visual charts that highlight conversion rates, recruiter efficiency, and hiring timelines.',
    icon: Users,
    accent: {
      bg: 'bg-[#28a745]/10',
      text: 'text-[#28a745]'
    }
  },
  {
    title: 'Attendance & Leave Analytics',
    description:
      'Analyse discipline with clear visibility into absenteeism, late entries, and department-wise leave utilisation to drive productivity and compliance.',
    icon: CalendarClock,
    accent: {
      bg: 'bg-[#ff8c00]/10',
      text: 'text-[#ff8c00]'
    }
  },
  {
    title: 'Performance Reports',
    description:
      'Review achievements via interactive charts and appraisal summaries to identify top performers, plan promotions, or shape development programs.',
    icon: BarChart3,
    accent: {
      bg: 'bg-[#7a4df5]/10',
      text: 'text-[#7a4df5]'
    }
  },
  {
    title: 'Department-Wise Insights',
    description:
      'Compare output, efficiency, and retention metrics across teams to surface growth opportunities, balance workloads, and encourage collaboration.',
    icon: PieChart,
    accent: {
      bg: 'bg-[#ffd54f]/20',
      text: 'text-[#b28900]'
    }
  },
  {
    title: 'Data Export & Custom Filters',
    description:
      'Export any report in Excel or PDF instantly while smart filters by department, branch, role, or date deliver precise insights for quicker decisions.',
    icon: FileSpreadsheet,
    accent: {
      bg: 'bg-[#8d6e63]/15',
      text: 'text-[#6d4c41]'
    }
  }
]

const benefits = [
  'Empowers leadership with clear, real-time workforce visibility.',
  'Reduces manual report preparation so HR focuses on strategy.',
  'Elevates decisions with visual analytics and drill-down context.',
  'Builds transparency and alignment across HR, Finance, and Operations.'
]

const futureEnhancements = [
  {
    title: 'AI Predictive Analytics',
    description:
      'Forecast attrition, talent gaps, and resource requirements with machine-learning powered projections.',
    icon: Sparkles
  },
  {
    title: 'BI Tool Integrations',
    description: 'Plug into Zoho Analytics, Power BI, or Tableau for enterprise-grade data modelling and sharing.',
    icon: Share2
  },
  {
    title: 'Automated Report Scheduling',
    description:
      'Email curated dashboards and KPI summaries to stakeholders on a monthly or custom cadence automatically.',
    icon: CalendarClock
  }
]

const ReportsAnalyticsDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f9ff] via-white to-[#f3f7ff]">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-24 -left-16 h-52 w-52 rounded-full bg-white/70 blur-3xl"></div>
          <div className="absolute top-16 right-12 h-40 w-40 rounded-full bg-accent-orange/10 blur-2xl"></div>
          <div className="absolute bottom-16 left-12 h-28 w-28 rounded-full bg-deep-teal/10 blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10 pt-24 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-orange/10 text-accent-orange font-semibold uppercase tracking-wide text-xs md:text-sm">
              Reports &amp; Analytics
            </span>
            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-deep-teal via-accent-orange to-deep-teal bg-clip-text text-transparent">
                Turn Workforce Data into Immediate, Actionable Intelligence
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The Reports &amp; Analytics module gives stakeholders a command centre for HR intelligence—from recruitment and
              attendance to performance outcomes. Visual dashboards, exportable summaries, and granular filters ensure every
              decision is backed by data.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="rounded-3xl border border-white/70 bg-white/85 backdrop-blur-lg shadow-md p-5">
                <p className="text-sm uppercase tracking-wide text-gray-500">Coverage</p>
                <p className="mt-2 text-2xl font-semibold text-charcoal">Recruitment to Retention</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/85 backdrop-blur-lg shadow-md p-5">
                <p className="text-sm uppercase tracking-wide text-gray-500">Visualisation</p>
                <p className="mt-2 text-2xl font-semibold text-charcoal">Dashboards, Charts &amp; Exports</p>
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
                  Reports &amp; Analytics — Overview
                </h2>
                <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Reports &amp; Analytics Module gives management a complete, real-time view of the organisation’s HR performance.
                    It converts everyday data from recruitment, attendance, leave, and performance modules into clear, visual insights that
                    help leaders make smarter decisions.
                  </p>
                  <p>
                    With interactive dashboards and customisable reports, users can monitor KPIs such as employee strength, attendance
                    trends, hiring progress, and productivity levels—all from a single workspace. Each role, from Admin to HR Manager,
                    gets a personalised dashboard showing only the data that matters most.
                  </p>
                  <p>
                    This module helps companies save time, improve accuracy, and increase transparency across every department. Whether
                    analysing monthly performance or daily attendance, Reports &amp; Analytics ensures every HR decision is grounded in
                    data-driven insight.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-deep-teal/10 blur-2xl"></div>
                <div className="rounded-3xl overflow-hidden border border-white/70 shadow-2xl">
                  <img
                    src={analyticsSecondary}
                    alt="Analytics overview visual"
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
            Key Features Built for Clarity &amp; Control
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
            Drill down into every stage of the employee lifecycle with intuitive visualisations, configurable filters, and
            ready-to-export intelligence.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl border border-white/70 bg-white/95 backdrop-blur-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className={`inline-flex items-center justify-center rounded-2xl ${feature.accent.bg} ${feature.accent.text} p-3 mb-4`}>
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
                <BarChart4 className="w-6 h-6 text-accent-orange" />
                Benefits
              </h2>
              <ul className="mt-6 space-y-4 text-gray-700 leading-relaxed text-lg">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white shadow-xl border border-white/70 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal flex items-center gap-3">
                <LineChart className="w-6 h-6 text-deep-teal" />
                Future Enhancements
              </h3>
              <p className="mt-3 text-gray-600">
                Our roadmap keeps the analytics layer forward-looking with deeper intelligence and seamless ecosystem connectivity.
              </p>
              <div className="mt-6 space-y-5">
                {futureEnhancements.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-accent-orange/10 text-accent-orange">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-charcoal">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Turn Raw HR Data into Powerful, Actionable Insights
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              Partner with our team to configure dashboards, automate exports, and unlock the intelligence your leaders need to
              move faster.
            </p>
            <button
              className="mt-8 px-10 py-5 bg-deep-teal text-white font-semibold text-lg rounded-xl hover:bg-deep-teal/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              aria-label="Request a reports and analytics demo"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReportsAnalyticsDetail

