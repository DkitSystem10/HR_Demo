import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FeatureDetail from './pages/FeatureDetail'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature/:featureId" element={<FeatureDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App

