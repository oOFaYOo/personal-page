import React from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className={'overflow-y-auto relative w-full h-full'}>
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
