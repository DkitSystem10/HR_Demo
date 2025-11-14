import React from 'react'
import {
  Building2,
  Users,
  ShieldCheck,
  Wallet,
  FileText,
  MapPin,
  Settings,
  Workflow,
  CheckCircle2
} from 'lucide-react'

const sections = [
  {
    id: 'company-setup',
    title: 'Company Setup',
    description:
      'Stand up each company tenant with dedicated details, branches and responsible Company Admins while keeping global control under the Super Admin.',
    bullets: [
      'Capture legal information, registration numbers and contact details',
      'Create multiple branches per company with region-specific parameters',
      'Delegate day-to-day administration to Company Admins'
    ],
    icon: Building2
  },
  {
    id: 'department-designation',
    title: 'Department & Designation Master',
    description:
      'Model your organizational hierarchy with crystal clarity so reporting lines and responsibilities stay consistent across the HRMS.',
    bullets: [
      'Define departments like HR, Sales, Engineering or custom business units',
      'Create designations and map them to departments and managers',
      'Link employees for real-time org charts and reporting clarity'
    ],
    icon: Users
  },
  {
    id: 'role-access',
    title: 'Role & Access Control',
    description:
      'Control who can view, edit or approve each module through powerful Role-Based Access Control (RBAC).',
    bullets: [
      'Create roles such as HR Executive, Recruiter, Manager or Employee',
      'Assign granular permissions—View, Create, Edit, Delete, Approve',
      'Guarantee that every user sees only what they need'
    ],
    icon: ShieldCheck
  },
  {
    id: 'payroll-structure',
    title: 'Payroll Structure & Grade Master',
    description:
      'Build salary structures once, reuse them across branches and automate payroll calculations with zero guesswork.',
    bullets: [
      'Define earning heads and deductions (Basic, HRA, Bonus, etc.)',
      'Create pay grades tied to roles or designations',
      'Auto-generate payroll from master templates with minimal effort'
    ],
    icon: Wallet
  },
  {
    id: 'document-checklist',
    title: 'Document & Checklist Master',
    description:
      'Standardise policy acknowledgements, onboarding kits and appraisal checklists to keep compliance watertight.',
    bullets: [
      'Upload document types such as ID Proofs, PAN, experience letters',
      'Design reusable checklists for onboarding, exits and appraisals',
      'Ensure every company follows documented SOPs effortlessly'
    ],
    icon: FileText
  },
  {
    id: 'location-shift',
    title: 'Location & Shift Master',
    description:
      'Accommodate on-site, hybrid and remote teams with configurable locations, shifts and working hours.',
    bullets: [
      'Define office locations, remote hubs and hybrid policies',
      'Create shift templates with timings, breaks and overtime rules',
      'Sync shift assignments with attendance and leave modules'
    ],
    icon: MapPin
  },
  {
    id: 'policy-configuration',
    title: 'Policy & Configuration Master',
    description:
      'Let every company tailor HR policies while keeping global governance intact through template driven configuration.',
    bullets: [
      'Store leave rules, attendance policies, appraisal cycles and probation settings',
      'Allow tenant-level overrides without impacting other companies',
      'Configure approval hierarchies and notifications per policy'
    ],
    icon: Settings
  }
]

const howItWorks = [
  'Super Admin defines reusable templates and master structures.',
  'Company Admins clone or customise the templates for their organisation.',
  'Updates cascade automatically across recruitment, onboarding, payroll, attendance and analytics.'
]

const benefits = [
  '100% Configurable – tailor every element to match company needs',
  'Centralised Master Data – avoid duplication while boosting accuracy',
  'Multi-Company Support – independent configurations for each tenant',
  'Scalable Architecture – plug in new modules, branches or workflows instantly',
  'Streamlined Integration – master data connects HR, Payroll and Analytics seamlessly'
]

const DataMasterDetail = () => {
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
            Data Master
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-deep-teal">Data Master</span>
            <span className="text-charcoal"> – </span>
            <span className="bg-gradient-to-r from-deep-teal to-accent-orange bg-clip-text text-transparent">
              The Backbone of Your Customizable HRMS
            </span>
          </h1>
          <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            The Data Master module forms the foundation of the entire HRMS. Every company running on DurkkasHR configures
            its own master data—from departments and designations to role permissions and payroll grades—while the Super Admin
            retains ultimate oversight.
          </p>
        </div>
      </header>

      <section className="relative pb-24">
        <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-lg shadow-xl border border-white/70 px-6 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100/70 p-6 md:p-8">
                <div className="flex items-center gap-3 text-deep-teal font-semibold uppercase text-xs md:text-sm">
                  <Workflow className="w-5 h-5" />
                  Overview
                </div>
                <h2 className="mt-4 text-2xl font-bold text-charcoal">Unify Every Tenant With Configurable Masters</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  In a multi-company environment, the Data Master ensures each tenant has its own customised architecture—roles,
                  departments, branches, designations and workflows—managed collaboratively by the Super Admin and Company Admin
                  dashboards. It powers every functional module including Recruitment, Onboarding, Payroll, Attendance and
                  Performance, keeping data consistent, accurate and scalable.
                </p>
              </div>
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100/70 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-3">What Companies Can Configure</h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    Configure organisational structures independently
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    Maintain master data for departments, designations and salary grades
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    Control access permissions and approval hierarchies with precision
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    Define payroll structures, earning heads, and deduction templates
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    Customize location, shift, and policy configurations per tenant
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
        <div className="relative max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Master Data Crafted for Every Scenario
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              Follow the journey from global templates to granular company configurations with a streamlined, human-centred flow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={section.id}
                  className="relative group"
                >
                  <div className="h-full rounded-2xl bg-white shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl mb-5 ${
                      isEven 
                        ? 'bg-gradient-to-br from-deep-teal to-[#005a61] text-white' 
                        : 'bg-gradient-to-br from-accent-orange to-[#e66d00] text-white'
                    } shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                      isEven ? 'text-deep-teal' : 'text-accent-orange'
                    }`}>
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-5 text-sm md:text-base">
                      {section.description}
                    </p>
                    <ul className="space-y-2.5">
                      {section.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`mt-1.5 inline-flex w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isEven ? 'bg-deep-teal' : 'bg-accent-orange'
                          }`}></span>
                          <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
                How It Works
              </h3>
              <ol className="mt-5 space-y-4 text-gray-700 leading-relaxed list-decimal list-inside">
                {howItWorks.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <p className="mt-5 text-gray-700 leading-relaxed">
                This modular approach maintains central governance for the Super Admin while giving every client organisation
                full autonomy to run its own workflows and policies with confidence.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-white via-deep-teal/5 to-accent-orange/10 shadow-xl border border-white/70 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                Benefits
              </h3>
              <ul className="mt-5 space-y-4 text-gray-700 leading-relaxed">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex w-2 h-2 rounded-full bg-accent-orange"></span>
                    <span>{benefit}</span>
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

export default DataMasterDetail



