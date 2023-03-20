import React, {useRef} from "react";
import {useSelector} from "react-redux";
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

const Skills = () => {

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

    return (
        <div ref={ref} className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
        mb-16 px-24`}>
            <a id={'skills-anchor'}/>
            <h1 className={`mobile:text-[5rem] text-center font-bold mb-9 lg:text-3xl text-4xl 
            ${isVisible ? 'anim-active' : 'anim translate-x-[-10%]'}`}>Skills</h1>
            <div className={`mobile:hidden flex flex-col items-center gap-2 w-full 
            ${isVisible ? 'anim-active' : 'anim translate-y-[20%]'}`}>
                {skills.map((value, index) => {
                    return (
                        <div className={'flex w-full flex-row gap-2 justify-evenly items-center'} key={index}>
                            {value.map((skill, i) => {
                                return (
                                    <div key={i}
                                         className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} 
                                         lg:w-[30%] lg:h-[200px] w-[250px] p-2 whitespace-normal shadow 
                                         h-[250px] text-2xl duration-500 text-center font-semibold rounded-xl flex 
                                         flex-col justify-evenly items-center`}>
                                        {skill.skill}
                                        <img
                                            className={`${theme === 'light' ? '' : 'invert'} 
                                            h-[130px] duration-500 w-[130px] opacity-25`}
                                            src={skill.image}/>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className={'mobile:flex flex-col items-center text-[3rem] hidden relative w-full'}>
                {
                    skills.flat().map((v, i) => {
                        return (
                            <div key={i}
                                 className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} 
                                w-full mb-4 h-[150px] px-12 text-center duration-500 font-semibold whitespace-normal rounded-xl 
                                flex flex-row justify-between items-center shadow`}>
                                {v.skill}
                                <img
                                    className={`${theme === 'light' ? '' : 'invert'} opacity-25 duration-500 h-[100px] w-[100px]`}
                                    src={v.image}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default React.memo(Skills);