import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ToursList from "./components/ToursList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <ToursList />

      <Footer />
    </React.Fragment>
  );
};
export default App;
