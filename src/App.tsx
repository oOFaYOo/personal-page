import React from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./store";

function App() {
  const {theme} = useSelector((state:RootState)=>state.PortfolioLandingPageStore);

  return (
    <div className={`styled_scrollbar overflow-y-auto relative w-full h-full ${theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-900'}`}>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
