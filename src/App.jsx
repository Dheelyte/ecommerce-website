import { useEffect } from 'react';
import { initOnLoad } from './components/scrollAnimations';
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact';
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    initOnLoad();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <PromoBanner />
      <About />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
