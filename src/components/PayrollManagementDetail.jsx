import React from 'react'
import {
  BadgeCheck,
  Calculator,
  Library,
  Banknote,
  Building2,
  FileSpreadsheet,
  BarChart3,
  Workflow,
  CheckCircle2,
  Link2,
  CalendarClock,
  Users,
  TrendingUp
} from 'lucide-react'
import dataMasterVisual from '../assets/D_master.png'
import payrollImage1 from '../assets/p.png'
import payrollImage2 from '../assets/pay.png'
import payrollImage3 from '../assets/pay1.png'
import payrollImage4 from '../assets/pay2.png'
import payrollImage5 from '../assets/pay3.jpeg'
import payrollImage6 from '../assets/pay4.png'
import payrollImage7 from '../assets/pay5.png'

const highlights = [
  {
    id: 'automated-salary',
    title: 'Automated Salary Calculation',
    description:
      'Compute salaries in minutes with real-time data flowing in from attendance, leave and performance systems.',
    bullets: [
      'Auto-calculate earnings based on approved attendance and leave entries',
      'Configure multiple pay structures aligned to roles, grades and branches',
      'Handle bonuses, incentives, overtime and other variable components effortlessly'
    ],
    icon: Calculator
  },
  {
    id: 'statutory-compliance',
    title: 'Statutory Compliance Engine',
    description:
      'Keep payroll aligned with the latest statutory requirements so every pay run stays audit-ready.',
    bullets: [
      'Built-in frameworks for EPF, ESI, TDS and Professional Tax',
      'Auto-generate government-ready reports, challans and filings',
      'Receive instant alerts for compliance deadlines and regulatory updates'
    ],
    icon: BadgeCheck
  },
  {
    id: 'payslip-generation',
    title: 'Payslip Generation & Distribution',
    description:
      'Deliver secure, beautifully branded payslips to every employee—accessible anytime across devices.',
    bullets: [
      'Create digital payslips with company branding, earning splits and deductions',
      'Allow employees to securely access monthly payslips via self-service dashboards',
      'Export or bulk download payslips in PDF for finance and audit records'
    ],
    icon: Library
  },
  {
    id: 'bank-integration',
    title: 'Bank Integration & Disbursement',
    description:
      'Connect to major banking partners for seamless salary transfers and reconciliations.',
    bullets: [
      'Generate direct salary transfer files compatible with leading banks',
      'Auto-reconcile salary disbursements with payroll ledgers',
      'Publish salary payment reports for finance and audit stakeholders'
    ],
    icon: Banknote
  },
  {
    id: 'multi-company',
    title: 'Multi-Company & Multi-Branch Control',
    description:
      'Manage payroll for diverse entities under one roof with strict segregation and governance.',
    bullets: [
      'Operate payroll for multiple legal entities within a single platform',
      'Customise salary components, allowances and deductions per branch or department',
      'Apply role-based access so sensitive payroll data stays protected across companies'
    ],
    icon: Building2
  },
  {
    id: 'tax-management',
    title: 'Tax Management & Employee Support',
    description:
      'Make tax compliance effortless for HR and employees with automated calculations and ready-to-share records.',
    bullets: [
      'Auto-calculate income tax, exemptions and investment declarations',
      'Generate Form-16 and tax summaries for transparent employee communication',
      'Maintain organised, audit-ready tax records throughout the financial year'
    ],
    icon: FileSpreadsheet
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting Dashboard',
    description:
      'Gain actionable insights on payroll spends, overtime trends and deduction patterns.',
    bullets: [
      'Visualise salary expenses, deductions and overtime through interactive charts',
      'Drill into consolidated, branch-wise or department-wise payroll reports',
      'Export data in Excel or PDF formats for management reviews and board meetings'
    ],
    icon: BarChart3
  }
]

const integrations = [
  {
    title: 'Attendance & Leave Management',
    description: 'Real-time sync ensures accurate present days, leave balances and overtime hours feed into payroll.',
    icon: CalendarClock,
    gradient: 'from-deep-teal to-[#005a61]',
    iconBg: 'bg-deep-teal/10'
  },
  {
    title: 'Employee Management',
    description: 'Automatically pulls employee profiles, bank details, pay grades and cost centres for each cycle.',
    icon: Users,
    gradient: 'from-accent-orange to-[#e66d00]',
    iconBg: 'bg-accent-orange/10'
  },
  {
    title: 'Performance Module',
    description: 'Trigger incentives, bonuses or variable pay from appraisal outcomes without manual recalculations.',
    icon: TrendingUp,
    gradient: 'from-deep-teal to-accent-orange',
    iconBg: 'bg-gradient-to-br from-deep-teal/10 to-accent-orange/10'
  }
]

const benefits = [
  '100% customisable to match each company’s payroll policies and approval flows',
  'Reduces manual intervention, spreadsheet dependencies and human error',
  'Delivers transparency for employees while ensuring statutory compliance',
  'Scales with your organisation—from emerging teams to enterprise multi-entity setups'
]

const PayrollManagementDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1f6ff] via-white to-[#f7fbff]">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-white/70 blur-2xl"></div>
          <div className="absolute top-20 -right-10 h-32 w-32 rounded-full bg-white/60 blur-2xl"></div>
          <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-accent-orange/10 blur-xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 md:px-10 pt-24 pb-16 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-orange/10 text-accent-orange font-semibold uppercase tracking-wide text-xs md:text-sm">
            Payroll Management
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-deep-teal via-accent-orange to-deep-teal bg-clip-text text-transparent">
              Streamline Payroll with Accuracy &amp; Compliance Built-In
            </span>
          </h1>
          <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Automate salary processing, deductions and statutory compliance to reduce manual work and errors—ensuring every
            employee gets paid accurately and on time, every time.
          </p>
        </div>
      </header>

      <section className="relative pb-24">
        <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-lg shadow-xl border border-white/70 px-6 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10 items-stretch">
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100/70 p-6 md:p-8">
                <div className="flex items-center gap-3 text-deep-teal font-semibold uppercase text-xs md:text-sm">
                  <Workflow className="w-5 h-5" />
                  Why Modern Payroll Needs Automation
                </div>
                <h2 className="mt-4 text-2xl font-bold text-charcoal">
                  Deliver payroll with precision, governance and employee confidence.
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Our payroll suite connects data, policies and people—eliminating spreadsheet chaos and late night calculations.
                  Every cycle becomes a controlled, auditable process that scales with your organisation.
                </p>
              </div>
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100/70 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-3">What You Achieve</h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span className="flex-1">Automate payroll preparation, reviews and approvals across entities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span className="flex-1">Maintain error-free calculations with audit trails at every step.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span className="flex-1">Empower employees with transparent access to payslips and tax information.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute left-10 top-20 h-24 w-40 rounded-full bg-white blur-2xl"></div>
          <div className="absolute right-12 top-10 h-20 w-28 rounded-full bg-white blur-xl"></div>
          <div className="absolute left-16 bottom-12 h-16 w-24 rounded-full bg-accent-orange/10 blur-lg"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-charcoal">
            Payroll Highlights That Keep Every Cycle Under Control
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
            Follow the streamlined flow—from automated calculations to analytics-driven decisions—designed for finance and HR
            teams who refuse to compromise on accuracy.
          </p>
          <div className="relative mt-12 md:mt-16">
            <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-accent-orange via-slate-200 to-deep-teal/40"></div>
            <div className="space-y-12 md:space-y-16">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={highlight.id}
                    className="relative flex flex-col md:flex-row items-start md:items-stretch gap-6 md:gap-10"
                  >
                    <div className="absolute -z-10 hidden md:block left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 transform">
                      <span className="block h-2 w-2 rounded-full bg-accent-orange"></span>
                    </div>
                    <div
                      className={`md:w-1/2 w-full flex ${
                        isLeft ? 'md:order-1 md:pr-12' : 'md:order-2 md:pl-12'
                      }`}
                    >
                      <div className="relative rounded-3xl bg-white shadow-xl border border-white/70 p-6 md:p-8 w-full flex flex-col text-left">
                        <div
                          className={`hidden md:flex absolute top-6 ${
                            isLeft ? '-right-12' : '-left-12'
                          } w-24 items-center`}
                        >
                          <span className="h-[3px] w-full bg-gradient-to-r from-transparent via-accent-orange to-transparent"></span>
                        </div>
                        <div
                          className={`hidden md:flex absolute top-4 ${
                            isLeft ? '-right-16' : '-left-16'
                          } w-12 h-12 rounded-full bg-white shadow-lg border border-white/80 items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-accent-orange" />
                        </div>
                        <div className="md:hidden mb-5 inline-flex w-14 h-14 items-center justify-center rounded-full bg-white shadow-md border border-white/70">
                          <Icon className="w-6 h-6 text-accent-orange" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal text-left">{highlight.title}</h3>
                        <p className="mt-3 text-gray-700 leading-relaxed text-left">{highlight.description}</p>
                        <ul className="mt-5 space-y-3 text-gray-600 text-left">
                          {highlight.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-left">
                              <span className="mt-2 flex-shrink-0 inline-flex w-2 h-2 rounded-full bg-deep-teal"></span>
                              <span className="flex-1 leading-relaxed text-left">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="md:hidden mt-6 rounded-3xl overflow-hidden border border-white/70 shadow-lg">
                          <img
                            src={index === 0 ? payrollImage1 : index === 2 ? payrollImage2 : index === 3 ? payrollImage3 : index === 4 ? payrollImage5 : index === 5 ? payrollImage7 : index === 6 ? payrollImage6 : index === 1 ? payrollImage4 : dataMasterVisual}
                            alt={`${highlight.title} visual`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="hidden md:flex md:w-1/2 md:order-2 md:pl-12 md:justify-start">
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={payrollImage1}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="hidden md:flex md:w-1/2 md:order-2 md:pl-12 md:justify-start">
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={payrollImage2}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="hidden md:flex md:w-1/2 md:order-1 md:pr-12 md:justify-end">
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={payrollImage3}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="hidden md:flex md:w-1/2 md:order-2 md:pl-12 md:justify-start">
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={payrollImage5}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="hidden md:flex md:w-1/2 md:order-1 md:pr-12 md:justify-end">
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={payrollImage7}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 6 && (
                      <div className="hidden md:flex md:w-1/2 md:order-2 md:pl-12 md:justify-start">
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={payrollImage6}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {index !== 0 && index !== 2 && index !== 3 && index !== 4 && index !== 5 && index !== 6 && (
                      <div
                        className={`hidden md:flex md:w-1/2 ${
                          isLeft ? 'md:order-2 md:pl-12 md:justify-start' : 'md:order-1 md:pr-12 md:justify-end'
                        }`}
                      >
                        <div className="relative w-full flex items-stretch">
                          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent-orange/10 blur-3xl"></div>
                          <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl w-full">
                            <img
                              src={index === 1 ? payrollImage4 : dataMasterVisual}
                              alt={`${highlight.title} illustration`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-deep-teal/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-accent-orange/10 blur-3xl"></div>
        </div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 text-deep-teal font-semibold uppercase tracking-wide text-xs md:text-sm mb-6">
              <Link2 className="w-5 h-5" />
              Seamless Integrations
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-deep-teal via-accent-orange to-deep-teal bg-clip-text text-transparent">
                Payroll that Plays Nicely with Every Module
              </span>
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <div 
                  key={integration.title} 
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${integration.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative p-6 md:p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`inline-flex w-16 h-16 items-center justify-center rounded-xl mb-5 flex-shrink-0 ${integration.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${
                        index === 0 ? 'text-deep-teal' : 
                        index === 1 ? 'text-accent-orange' : 
                        'text-deep-teal'
                      }`} />
                    </div>
                    
                    {/* Title */}
                    <h4 className={`text-xl md:text-2xl font-bold mb-3 flex-shrink-0 ${
                      index === 0 ? 'text-deep-teal' : 
                      index === 1 ? 'text-accent-orange' : 
                      'bg-gradient-to-r from-deep-teal to-accent-orange bg-clip-text text-transparent'
                    }`}>
                      {integration.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-base flex-grow">
                      {integration.description}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${integration.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white shadow-xl border border-white/70 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal flex items-center gap-3">
                <Workflow className="w-6 h-6 text-deep-teal" />
                From Setup to Salary Day
              </h3>
              <ol className="mt-5 space-y-4 text-gray-700 leading-relaxed list-decimal list-inside">
                <li>Configure company-specific payroll policies, components and approval flows.</li>
                <li>Sync attendance, leave and performance data to assemble payroll-ready inputs.</li>
                <li>Run validations, lock the pay run, disburse salaries and publish payslips instantly.</li>
              </ol>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Each step is tracked with activity logs, ensuring accountability for HR, finance and compliance teams.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-white via-deep-teal/5 to-accent-orange/10 shadow-xl border border-white/70 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                Why Teams Choose Our Payroll Suite
              </h3>
              <ul className="mt-5 space-y-4 text-gray-700 leading-relaxed">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span className="flex-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PayrollManagementDetail


