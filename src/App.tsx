import React from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className={'overflow-y-auto relative w-full h-full'}>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
