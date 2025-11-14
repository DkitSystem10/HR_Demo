import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/common/SEO'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'payroll', 'compliance', 'hr-tech', 'case-studies', 'guides']

  // Format category name: capitalize each word (e.g., 'hr-tech' -> 'HR Tech')
  const formatCategoryName = (cat) => {
    if (cat === 'all') return 'All'
    return cat
      .split('-')
      .map(word => {
        // Special case: 'hr' should be 'HR' (all caps)
        if (word.toLowerCase() === 'hr') return 'HR'
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }

  const blogPosts = [
    {
      title: 'Complete Guide to PF/ESIC Compliance in 2024',
       slug: 'pf-esic-compliance-guide-2024',
      excerpt: 'Everything you need to know about PF and ESIC compliance for Indian businesses in 2024.',
      category: 'compliance',
      author: 'Priya Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    },
    {
      title: 'How Physics Wallah Reduced Payroll Time by 90%',
      slug: 'physics-wallah-case-study',
      excerpt: 'Learn how Physics Wallah automated their payroll process and saved 35+ hours monthly.',
      category: 'case-studies',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
    {
      title: '10 HR Automation Trends for 2024',
      slug: 'hr-automation-trends-2024',
      excerpt: 'Discover the latest trends in HR automation that are transforming Indian workplaces.',
      category: 'hr-tech',
      author: 'Amit Patel',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    },
    {
      title: 'Payroll Checklist: 15 Steps to Error-Free Processing',
      slug: 'payroll-checklist-guide',
      excerpt: 'Download our comprehensive payroll checklist to ensure 100% accuracy every month.',
      category: 'guides',
      author: 'Priya Sharma',
      date: '2023-12-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop',
    },
    {
      title: 'Understanding New vs Old Tax Regime for Payroll',
      slug: 'tax-regime-comparison-payroll',
      excerpt: 'A detailed comparison of old and new tax regimes and their impact on payroll processing.',
      category: 'payroll',
      author: 'Rajesh Kumar',
      date: '2023-12-20',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop',
    },
    {
      title: 'ROI Calculator: Measuring HRMS Investment Returns',
      slug: 'hrms-roi-calculator-guide',
      excerpt: 'Learn how to calculate the ROI of your HRMS investment with our free calculator.',
      category: 'guides',
      author: 'Amit Patel',
      date: '2023-12-15',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <SEO
        title="Blog & Resources"
        description="Expert insights on payroll, compliance, and HR technology. Guides, case studies, and best practices for Indian businesses."
        canonical="/blog"
      />
      <Topbar />
      <Navbar />

      <div className="pt-0 pb-16">
        {/* Header */}
        <div className="pt-32 md:pt-36 lg:pt-40 pb-16" style={{ background: 'linear-gradient(135deg, #007b83, #ff7b00)' }}>
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HR Insights & Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert guidance on payroll, compliance, and workforce management
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {formatCategoryName(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {formatCategoryName(post.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-primary-600 font-medium">
                      Read more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="container-custom mt-16">
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Get HR Insights Delivered to Your Inbox
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest updates on payroll, compliance, and HR best practices
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
