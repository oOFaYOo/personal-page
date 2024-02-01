import React, {RefObject, useEffect, useMemo, useState} from 'react';
import Header from "./components/Header";
import AboutMe from "./blocks/AboutMe";
import Skills from "./blocks/Skills";
import Portfolio from "./blocks/Portfolio";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./store";

export function useOnScreen(ref: RefObject<HTMLElement>) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref])


    useEffect(() => {
        // @ts-ignore
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return isIntersecting
}

function App() {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    return (
        <div className={`styled_scrollbar overflow-y-auto duration-500 relative w-full h-full 
    ${theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-900'}`}>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Footer/>
        </div>

    );
}

export default App;
