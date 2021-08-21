import React, { Fragment, useState } from "react";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import { ArticleData } from "./data/ArticleData";

import GlobalStyle from "./globalStyles";
import International from "./components/internationalSection/International";
import InfoSection from "./components/InfoSection/InfoSection";
import Hero from "./components/MainSection/Hero";
import Dropdown from "./components/Navbar/Dropdown";
import Navbar from "./components/Navbar/Navbar";
import Interior from "./components/InteriorSection/Interior";
import InteriorData from "./data/InteriorData";
import Modern from "./components/ModernSection/Modern";
import ModernData from "./data/ModernData";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment className=".app">
      <GlobalStyle />
      <Navbar toggle={toggleHandler} onShowForm={showCartHandler} />
      {cartIsShown && <ContactForm onClose={hideCartHandler} />}
      <Dropdown isOpen={isOpen} toggle={toggleHandler} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <International data={ArticleData} />
      <Interior data={InteriorData} />
      <Modern data={ModernData} />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
