import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useOnScreen} from "../../App";

import css_icon from '../../images/css_icon.png'
import html_icon from '../../images/html_icon.png'
import tailwind_icon from '../../images/tailwind_icon.png'
import js_icon from '../../images/js_icon.png'
import ts_icon from '../../images/ts_icon.png'
import react_icon from '../../images/react_icon.png'
import rtl_icon from '../../images/rtl_icon.png'
import jest_icon from '../../images/jest_icon.png'
import redux_icon from '../../images/redux_icon.png'
import {setCurrentBlock} from "../../store/slice";

const Skills = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    const skills = [
        [{skill: 'CSS', image: css_icon},
            {skill: 'HTML', image: html_icon},
            {skill: 'TailwindCSS', image: tailwind_icon}],
        [{skill: 'JavaScript', image: js_icon},
            {skill: 'TypeScript', image: ts_icon},
            {skill: 'React', image: react_icon}],
        [{skill: 'React Testing Library', image: rtl_icon},
            {skill: 'Jest', image: jest_icon},
            {skill: 'Redux', image: redux_icon}]
    ];

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const refBlock = useRef<HTMLDivElement>(null);
    const isBlockVisible = useOnScreen(refBlock);

    useEffect(() => {
        if (isBlockVisible) {
            dispatch(setCurrentBlock('skills'))
        }
    }, [isBlockVisible])

    return (
        <div ref={ref} className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
        mt-16 mb-16 py-32 overflow-hidden`}>
            <a id={'skills-anchor'}/>
            {/*<h1 className={`mobile:text-[5rem] text-center font-bold mb-9 lg:text-3xl text-4xl font-mono */}
            {/*${isVisible ? 'anim-active' : 'anim translate-x-[-20%]'}`}>Skills</h1>*/}
            <div ref={refBlock} className={` flex flex-col items-center gap-12 w-full 
            ${isVisible ? 'anim-active' : 'anim translate-y-[20%]'}`}>
                <div
                    className={'absolute left-0 top-0 border-t-[6px] border-l-[6px] -translate-y-12 translate-x-16 animated-border w-[30%] h-[70%]'}>
                </div>
                <img className={`${theme === 'light' ? '' : 'invert' } absolute right-4 -translate-y-20 duration-500 opacity-[0.05] w-[500px] h-[500px]`} src={css_icon} />
                <div className={'w-full flex flex-row justify-evenly items-center opacity-90'}>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[100%]'} hover:text-sky-500 hover:cursor-default lg:text-6xl text-5xl text-center font-serif`}>JavaScript</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default lg:text-3xl text-2xl text-center italic`}>Material UI</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[100%]'} hover:text-sky-500 hover:cursor-default lg:text-7xl text-6xl text-center`}>React</p>
                </div>
                <div className={'w-full flex flex-row justify-evenly items-center opacity-90'}>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-10%]'} hover:text-sky-500 hover:cursor-default lg:text-3xl text-2xl text-center italic`}>Redux Toolkit</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default lg:text-5xl text-4xl text-center`}>TailwindCSS</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[100%]'} hover:text-sky-500 hover:cursor-default lg:text-6xl text-5xl text-center`}>CSS</p>
                </div>
                <div className={'w-full flex flex-row justify-evenly items-center opacity-90'}>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default lg:text-4xl text-3xl text-center font-serif`}>Adaptive Web Design</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[100%]'} hover:text-sky-500 hover:cursor-default lg:text-6xl text-5xl text-center`}>TypeScript</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default lg:text-5xl text-4xl text-center italic`}>Jest</p>
                </div>
                <div className={'w-full flex flex-row justify-evenly items-center opacity-90 z-10'}>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 lg:text-4xl text-3xl text-center italic`}>React Router</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[100%]'} hover:text-sky-500 lg:text-5xl text-4xl text-center font-serif`}>HTML</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 lg:text-4xl text-3xl text-center italic`}>React Testing Library</p>
                </div>
                <div
                    className={'absolute right-0 bottom-0 border-b-[6px] border-r-[6px] translate-y-16 -translate-x-12 animated-border w-[60%] h-[50%]'}>
                </div>


                {/*{skills.map((value, index) => {*/}
                {/*    return (*/}
                {/*        <div ref={index === 1 ? refBlock : null} className={'flex w-full flex-row gap-2 justify-between items-center'} key={index}>*/}
                {/*            {value.map((skill, i) => {*/}
                {/*                return (*/}
                {/*                    <div key={i}*/}
                {/*                         className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} */}
                {/*                         lg:w-[30%] lg:h-[165px] w-[250px] p-2 whitespace-normal shadow */}
                {/*                         h-[250px] text-2xl duration-500 text-center font-semibold rounded-xl flex */}
                {/*                         flex-col justify-evenly items-center`}>*/}
                {/*                        {skill.skill}*/}
                {/*                        <img*/}
                {/*                            className={`${theme === 'light' ? '' : 'invert'} */}
                {/*                            h-[100px] duration-500 w-[100px] opacity-25`}*/}
                {/*                            src={skill.image}/>*/}
                {/*                    </div>*/}
                {/*                )*/}
                {/*            })}*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
            {/*<div className={'mobile:flex flex-col items-center text-[3rem] hidden relative w-full'}>*/}
            {/*    {*/}
            {/*        skills.flat().map((v, i) => {*/}
            {/*            return (*/}
            {/*                <div key={i}*/}
            {/*                     className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} */}
            {/*                    w-full mb-4 h-[150px] px-12 text-center duration-500 font-semibold whitespace-normal rounded-xl */}
            {/*                    flex flex-row justify-between items-center shadow`}>*/}
            {/*                    {v.skill}*/}
            {/*                    <img*/}
            {/*                        className={`${theme === 'light' ? '' : 'invert'} opacity-25 duration-500 h-[100px] w-[100px]`}*/}
            {/*                        src={v.image}/>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
};

export default React.memo(Skills);