// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import ProfessionalSummary from './components/ProfessionalSummary';
// import Skills from './components/skills';
// import EmploymentHistory from './components/EmploymentHistory';
// import Education from './components/Education';
// import Certifications from './components/Certifications';

// function App() {
//   return (
//     <div className="App">
//      <Header/>
//      <ProfessionalSummary/>
//      <Skills/>
//      <EmploymentHistory/>
//      <Education/>
//      <Certifications/>
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import "./App.css";
import EmploymentHistory from "./components/EmploymentHistory";
import Footer from "./components/Footer";
import AwardsRecognitions from "./components/AwardsRecognitions";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section id="home" data-aos="fade-in">
        <Header />
      </section>
      <section id="professional-summary" data-aos="fade-up">
        <ProfessionalSummary />
      </section>
      <section id="awards-recognitions" data-aos="fade-up">
        <AwardsRecognitions />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="employment-history" data-aos="fade-up">
        <EmploymentHistory />
      </section>
      <section id="education" data-aos="fade-up">
        <Education />
      </section>
      <section id="certifications" data-aos="fade-up">
        <Certifications />
      </section>
      <section data-aos="fade-up">
        <Footer />
      </section>
    </div>
  );
}

export default App;