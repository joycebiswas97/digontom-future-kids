import { useState } from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import Courses from './components/homepageCourses';
import Projects from './components/homepageProjects';
import Testimonials from './components/testimonials';
import Faq from './components/faq';
import Cta from './components/cta';
import Footer from './components/footer';

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <Projects />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}

export default App
