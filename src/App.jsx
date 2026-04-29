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
import CoursesPage from './components/course';
import About from './components/about';
import Contact from './components/contact';
import ProjectsPage from './components/project';
import Reviews from './components/review';
import Enroll from './components/enroll';
import ScrollToTop from './components/scrollToTop';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const hideCta = location.pathname === '/enroll';

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/" element={
          <>          
            <Hero />
            <Courses />
            <Features />
            <Projects />
            <Testimonials />
            <Faq />
          </>
        }/>
      </Routes>
      {!hideCta && <Cta />}
      <Footer />
    </>
  )
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
