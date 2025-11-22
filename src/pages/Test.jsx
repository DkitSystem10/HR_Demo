import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Calculator,
  LayoutDashboard,
  Database,
  FileSpreadsheet,
  Bell,
  Building2,
  ShieldCheck,
  Wallet,
  BarChart3,
  CheckCircle2
} from 'lucide-react'
import statutoryManagementImg from '../assets/Statutory Management.png'
import statutoryManagementImg1 from '../assets/Statutory Management_1.png'

const featureHighlights = [
  {
    title: 'Automated Statutory Calculations',
    description:
      'Automatically calculates all statutory components including PF, ESI, PT, LWF, TDS, and other region-based compliances. Ensures accuracy with real-time updates.',
    icon: Calculator
  },
  {
    title: 'Monthly Compliance Tracking',
    description:
      'View monthly statutory dues, pending filings, completed submissions, and upcoming deadlines in a single dashboard.',
    icon: LayoutDashboard
  },
  {
    title: 'Digital Records & Document Repository',
    description:
      'Store all statutory files such as challans, returns, PF/ESI reports, and tax documents securely in one place. Easy access anytime.',
    icon: Database
  },
  {
    title: 'Auto-Generated Reports',
    description:
      'Download compliance-ready reports with one click: PF (Form 3A, 6A, ECR), ESI (Contribution sheets), TDS statements, Professional Tax reports. Perfect for audits and internal review.',
    icon: FileSpreadsheet
  },
  {
    title: 'Compliance Alerts & Notifications',
    description:
      'Receive timely alerts for filing deadlines, payment reminders, document expiry, and upcoming statutory changes. Always stay prepared—no missed deadlines.',
    icon: Bell
  },
  {
    title: 'Multi-State Compliance Support',
    description:
      'Handles compliance variations across different states—ideal for companies with multiple branches.',
    icon: Building2
  },
  {
    title: 'Role-Based Access Control',
    description:
      'HR, Accounts, and Management teams can access only the data relevant to their roles. Sensitive statutory information is fully secured.',
    icon: ShieldCheck
  },
  {
    title: 'Seamless Payroll Integration',
    description:
      'Statutory deductions are auto-applied during payroll generation, ensuring monthly payroll runs remain 100% compliant.',
    icon: Wallet
  },
  {
    title: 'Audit-Ready Compliance Dashboard',
    description:
      'A dedicated compliance dashboard gives real-time status, historical logs, filing summaries, and downloadable evidence of compliance. Perfect for statutory inspections.',
    icon: BarChart3
  }
]

const benefits = [
  'Reduces manual compliance work by 80%',
  'Avoids penalties and legal risks',
  'Ensures complete transparency and accuracy',
  'Super-fast reporting and automated workflows',
  'Designed for startups, SMEs, and enterprises'
]

const Test = () => {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ff] via-white to-[#f9fbff]">
      <Topbar />
      <Navbar />
      
      <header className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-20 -left-16 h-48 w-48 rounded-full bg-white/70 blur-3xl"></div>
          <div className="absolute top-12 right-10 h-36 w-36 rounded-full bg-accent-orange/10 blur-2xl"></div>
          <div className="absolute bottom-16 left-16 h-28 w-28 rounded-full bg-deep-teal/10 blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10 pt-8 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-deep-teal via-accent-orange to-deep-teal bg-clip-text text-transparent">
                Statutory Management
              </span>
            </h1>
            <p className="mt-5 text-xl md:text-2xl font-semibold text-charcoal leading-tight max-w-3xl mx-auto">
              Stay 100% Compliant. Zero Manual Work. Zero Errors.
            </p>
            <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Automated statutory compliance management system that ensures seamless adherence to all mandatory labour laws, payroll regulations, and documentation requirements—reducing risks and improving audit readiness.
            </p>
          </div>
          {/* Hero Image */}
          <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={statutoryManagementImg}
                alt="Statutory Management Dashboard"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pb-24">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute left-10 top-24 h-20 w-20 rounded-full bg-accent-orange/10 blur-2xl"></div>
          <div className="absolute right-8 bottom-10 h-24 w-24 rounded-full bg-white/70 blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-charcoal mb-12">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {featureHighlights.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl border border-white/70 bg-white/90 backdrop-blur-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center rounded-2xl bg-accent-orange/10 text-accent-orange p-3 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-accent-orange to-deep-teal transition-transform duration-300 rounded-b-3xl"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src={statutoryManagementImg1}
                  alt="Statutory Compliance Features"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl bg-gradient-to-br from-white via-deep-teal/5 to-accent-orange/10 shadow-xl border border-white/70 p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                  Why Choose Durkkas HR Tool for Statutory Compliance?
                </h2>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange flex-shrink-0"></span>
                      <span className="text-lg md:text-xl font-semibold text-charcoal/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
              Experience Seamless Statutory Compliance
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              Stay compliant effortlessly with Durkkas HR Tool's powerful automation.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="mt-8 px-10 py-5 bg-deep-teal text-white font-semibold text-lg rounded-xl hover:bg-deep-teal/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              aria-label="Request a demo for statutory compliance"
            >
              Request a Demo
            </button>
            <p className="mt-6 text-base text-gray-600 italic">
              Your compliance, simplified.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Test
