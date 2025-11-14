import { useParams, useNavigate } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import hrImage from '../assets/HR-1.png'
import hrDashboardImage from '../assets/hr_dashboard.png'
import employeeImage from '../assets/employee.png'
import employee1Image from '../assets/employee1.png'
import employee2Image from '../assets/employee2.png'
import employee3Image from '../assets/employee3.png'
import dataMasterImage from '../assets/Data_master.png'
import dataBannerImage from '../assets/Data_banner.png'
import EmployeeManagementDetail from '../components/EmployeeManagementDetail'
import DataMasterDetail from '../components/DataMasterDetail'
import PayrollManagementDetail from '../components/PayrollManagementDetail'
import AttendanceManagementDetail from '../components/AttendanceManagementDetail'
import ReportsAnalyticsDetail from '../components/ReportsAnalyticsDetail'

const FeatureDetail = () => {
  const { featureId } = useParams()
  const navigate = useNavigate()

  const featureDetails = {
    'overall-dashboard': {
      name: 'Overall Dashboard',
      image: hrDashboardImage,
      description: 'Get a comprehensive view of your HR operations with real-time insights and analytics.',
      contentBlocks: [
        {
          title: 'Real-Time Analytics',
          description: 'Monitor key HR metrics and performance indicators in real-time with interactive dashboards and customizable widgets.',
          image: hrImage,
          imagePosition: 'left'
        },
        {
          title: 'Customizable Widgets',
          description: 'Tailor your dashboard to your needs with drag-and-drop widgets, personalized views, and role-based access controls.',
          image: hrImage,
          imagePosition: 'right'
        },
        {
          title: 'Data Visualization',
          description: 'Transform complex data into actionable insights with interactive charts, graphs, and comprehensive reporting tools.',
          image: hrImage,
          imagePosition: 'left'
        }
      ],
      details: [
        'Real-time analytics and metrics visualization',
        'Customizable dashboard widgets',
        'Key performance indicators (KPIs) tracking',
        'Interactive charts and graphs',
        'Data export capabilities',
        'Role-based dashboard views',
        'Mobile-responsive design'
      ],
      benefits: [
        'Make data-driven decisions quickly',
        'Monitor HR performance metrics in real-time',
        'Identify trends and patterns',
        'Improve operational efficiency'
      ]
    },
    'employee-management': {
      name: 'Employee Management',
      image: employeeImage,
      description: 'Streamline employee data, profiles, and organizational hierarchy management.',
      contentBlocks: [
        {
          title: 'Complete Employee Profiles',
          description: 'Maintain comprehensive employee records with personal information, employment history, documents, and skills tracking. Access detailed employee data instantly with our intuitive interface.',
          image: employee1Image,
          imagePosition: 'left'
        },
        {
          title: 'Organizational Charts',
          description: 'Visualize your organizational structure with interactive org charts that help you understand reporting relationships and team hierarchies at a glance.',
          image: employee2Image,
          imagePosition: 'right'
        },
        {
          title: 'Employee Lifecycle Management',
          description: 'Track and manage the complete employee journey from onboarding to offboarding, ensuring smooth transitions and comprehensive record keeping throughout their tenure.',
          image: employee3Image,
          imagePosition: 'left'
        }
      ],
      details: [
        'Complete employee profile management',
        'Organizational chart visualization',
        'Employee lifecycle tracking',
        'Document management system',
        'Skills and competency tracking',
        'Employee directory and search',
        'Bulk data import/export'
      ],
      benefits: [
        'Centralized employee information',
        'Easy access to employee data',
        'Better organizational structure management',
        'Improved HR administrative efficiency'
      ]
    },
    'data-master': {
      name: 'Data Master',
      image: dataMasterImage,
      description: 'Centralized data management for all your HR information with secure access.',
      contentBlocks: [
        {
          title: 'Master Data Configuration',
          description: 'Configure and manage all master data entities with ease, ensuring data consistency across your organization.',
          image: hrImage,
          imagePosition: 'left'
        },
        {
          title: 'Data Validation & Security',
          description: 'Implement robust data validation rules and maintain audit trails for compliance and data integrity.',
          image: hrImage,
          imagePosition: 'right'
        }
      ],
      details: [
        'Master data configuration',
        'Custom fields and attributes',
        'Data validation rules',
        'Bulk data operations',
        'Data import/export utilities',
        'Data backup and recovery',
        'Audit trail and logging'
      ],
      benefits: [
        'Maintain data integrity',
        'Ensure data consistency',
        'Simplify data management',
        'Compliance with data regulations'
      ]
    },
    'payroll-management': {
      name: 'Payroll Management',
      image: hrImage,
      description: 'Automate payroll processing, salary calculations, and tax compliance effortlessly.',
      contentBlocks: [
        {
          title: 'Automated Calculations',
          description: 'Streamline payroll processing with automated salary calculations, deductions, and tax computations.',
          image: hrImage,
          imagePosition: 'left'
        },
        {
          title: 'Compliance & Reporting',
          description: 'Ensure statutory compliance with automated tax calculations and comprehensive payroll reports.',
          image: hrImage,
          imagePosition: 'right'
        }
      ],
      details: [
        'Automated salary calculation',
        'Tax computation and compliance',
        'Multiple pay structures support',
        'Salary slip generation',
        'Loan and deduction management',
        'Reimbursement processing',
        'Statutory compliance reporting'
      ],
      benefits: [
        'Error-free payroll processing',
        'Time-saving automation',
        'Tax compliance assurance',
        'Employee satisfaction'
      ]
    },
    'attendance-management': {
      name: 'Attendance Management',
      image: hrDashboardImage,
      description: 'Smart attendance tracking that delivers real-time visibility into presence, shifts, and leave impact across every branch.',
      contentBlocks: [],
      details: [],
      benefits: []
    },
    'task-management': {
      name: 'Task Management',
      image: hrImage,
      description: 'Assign, track, and manage tasks and projects efficiently across teams.',
      contentBlocks: [
        {
          title: 'Task Assignment & Tracking',
          description: 'Assign tasks to team members, set priorities, deadlines, and track progress in real-time.',
          image: hrImage,
          imagePosition: 'left'
        },
        {
          title: 'Project Collaboration',
          description: 'Foster team collaboration with shared project boards, task comments, and status updates.',
          image: hrImage,
          imagePosition: 'right'
        }
      ],
      details: [
        'Task assignment and tracking',
        'Project management',
        'Priority and deadline management',
        'Team collaboration tools',
        'Progress monitoring',
        'Task comments and updates',
        'Integration with other modules'
      ],
      benefits: [
        'Improved productivity',
        'Better task visibility',
        'Enhanced team coordination',
        'Efficient project completion'
      ]
    },
    'reports': {
      name: 'Reports & Analytics',
      image: hrImage,
      description: 'Real-time dashboards, drill-down insights, and export-ready analytics that keep every stakeholder aligned.',
      contentBlocks: [],
      details: [],
      benefits: []
    }
  }

  const feature = featureDetails[featureId]

  if (!feature) {
    return (
      <div className="min-h-screen bg-white">
        <Topbar />
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Feature Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white" style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
      {/* Blurred Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat filter blur-md -z-10 scale-110 opacity-20"
        style={{
          backgroundImage: `url(${hrImage})`
        }}
      ></div>

      <Topbar />
      <Navbar />

      {/* Conditional Layout */}
      {featureId === 'employee-management' ? (
        <EmployeeManagementDetail />
      ) : featureId === 'data-master' ? (
        <DataMasterDetail />
      ) : featureId === 'payroll-management' ? (
        <PayrollManagementDetail />
      ) : featureId === 'attendance-management' ? (
        <AttendanceManagementDetail />
      ) : featureId === 'reports' ? (
        <ReportsAnalyticsDetail />
      ) : featureId === 'overall-dashboard' ? (
        <>
          {/* Heading Section First */}
          <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                {/* Orange Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-orange/10 text-accent-orange mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
                  {feature.name}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </section>

          {/* Image Section Below Heading */}
          <section className="relative pb-12 md:pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Hero Section with Feature Image (for other features) */}
          <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* Feature Title and Description */}
          <section className="relative py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                {/* Orange Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-orange/10 text-accent-orange mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
                  {feature.name}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
                  {feature.description}
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Alternating Two-Column Content Blocks - Skip for Data Master as content is shown beside image */}
      {feature.contentBlocks &&
        featureId !== 'data-master' &&
        featureId !== 'employee-management' &&
        featureId !== 'payroll-management' &&
        featureId !== 'reports' &&
        featureId !== 'attendance-management' &&
        feature.contentBlocks.map((block, index) => (
        <section key={index} className={`relative bg-white ${index % 2 === 0 ? 'bg-gray-50' : ''}`} style={featureId === 'data-master' ? { paddingTop: '2rem', paddingBottom: '2rem' } : {}}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${block.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className={block.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={block.image} 
                    alt={block.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className={block.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-orange/10 text-accent-orange mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
                  {block.title}
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Key Features and Benefits Section */}
      {featureId !== 'employee-management' &&
        featureId !== 'data-master' &&
        featureId !== 'payroll-management' &&
        featureId !== 'reports' &&
        featureId !== 'attendance-management' && (
        <section className="relative bg-white" style={featureId === 'data-master' ? { paddingTop: '2rem', paddingBottom: '2rem' } : {}}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="w-12 h-12 rounded-xl bg-accent-orange/10 text-accent-orange flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </span>
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                  <span className="w-12 h-12 rounded-xl bg-accent-orange/10 text-accent-orange flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Benefits
                </h2>
                <div className="bg-gradient-to-br from-accent-orange/5 to-white rounded-2xl p-8 shadow-lg">
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-orange text-2xl mr-3 font-bold">•</span>
                        <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {featureId !== 'attendance-management' && featureId !== 'reports' && (
        <section className="relative bg-white" style={featureId === 'data-master' ? { paddingTop: '2rem', paddingBottom: '2rem' } : {}}>
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Experience the power of {feature.name} with a personalized demo.
            </p>
            <button 
              className="px-10 py-5 bg-accent-orange text-white font-semibold text-lg rounded-xl hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              aria-label="Request a demo"
            >
              Request Demo
            </button>
          </div>
        </section>
      )}
      <Footer />
    </div>
  )
}

export default FeatureDetail
