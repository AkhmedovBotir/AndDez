import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomeBody/Home";
import About from "./Components/About/About"
import Clean from "./Components/Clean/Clean";
import Services from "./Components/Services/Services";
import Garant from "./Components/Garant/Garant";
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact/Contact";
import "./app.css"
function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Home />
      <About />
      <Clean />
      <Services />
      <Garant />
      <FAQ />
      <Contact />
      <br />
      <Footer />
    </div>
  );
}

export default App;
