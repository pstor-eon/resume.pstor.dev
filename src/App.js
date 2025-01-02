import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Profile from './components/Profile/Profile';
import NavControls from './components/NavControls/NavControls';
import Languages from './components/Languages/Languages';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Awards from './components/Awards/Awards';
import Activities from './components/Activities/Activities';
import Training from './components/Training/Training';
import Coursera from './components/Coursera/Coursera';
import Links from './components/Links/Links';
import Projects from './components/Projects/Projects';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToTopOnMount from './components/ScrollToTopOnMount/ScrollToTopOnMount';
import './App.css';
import Layout from './components/Layout/Layout';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import Research from './components/Research/Research';
import ResearchPage from './pages/Research/Research';

// Home 컴포넌트 수정
const Home = () => {
  return (
    <>
      <Education />
      <Profile />
      <Research />
      <Languages />
      <Projects />
      <Awards />
      <Activities />
      <Coursera />
      <Training />
      <Links />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Helmet>
            <title>PSTOR CV</title>
          </Helmet>
          <ScrollToTopOnMount />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <ScrollToTop />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
