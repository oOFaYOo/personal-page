import React from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className={'overflow-y-auto relative w-full h-full'}>
      <Header />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
