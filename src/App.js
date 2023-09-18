import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";



const App = () => {
  return (
    <Router>
      <div className='content-wrapper'>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;