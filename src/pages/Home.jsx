import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutSection from '../components/AboutSection'
import TransformSection from '../components/TransformSection'
import RequestDemoSection from '../components/RequestDemoSection'
import Footer from '../components/Footer'
import PopupBanner from '../components/PopupBanner'
import hrImage from '../assets/HR-1.png'

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blurred background image replacing white */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat filter blur-md -z-10 scale-110"
        style={{
          backgroundImage: `url(${hrImage})`
        }}
      ></div>
      
      <PopupBanner />
      <Topbar />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TransformSection />
      <AboutSection />
      <RequestDemoSection />
      <Footer />
    </div>
  )
}

export default Home

