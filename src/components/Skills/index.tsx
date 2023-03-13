import React, {useRef} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {useOnScreen} from "../../App";

import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'
import image5 from '../../images/5.png'
import image6 from '../../images/6.png'
import image7 from '../../images/7.png'
import image8 from '../../images/8.png'
import image9 from '../../images/9.png'

function divider(arr: { skill: string, image: any }[]) {
    const result: { skill: string, image: any }[][] = [[], [], []];
    arr.forEach((v, i) => {
        if (result[0].length !== 3) {
            result[0].push(v);
        } else if (result[1].length !== 3) {
            result[1].push(v);
        } else {
            result[2].push(v);
        }
    })
    return result;
}

const Skills = () => {

    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    const skills = [
        {skill: 'CSS', image: image1},
        {skill: 'HTML', image: image2},
        {skill: 'TailwindCSS', image: image3},
        {skill: 'JavaScript', image: image4},
        {skill: 'TypeScript', image: image5},
        {skill: 'React', image: image6},
        {skill: 'React Testing Library', image: image7},
        {skill: 'Jest', image: image8},
        {skill: 'Redux', image: image9}
    ];

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
        mb-12 px-24`}>
            <a id={'skills-anchor'}/>
            <h2 className={`mobile-headers text-center font-bold mb-9 lg:text-3xl text-4xl 
            ${isVisible ? 'anim-active' : 'anim translate-x-[-10%]'}`}>Skills</h2>
            <div className={`mobile-invisible flex flex-col items-center gap-2 w-full 
            ${isVisible ? 'anim-active' : 'anim translate-y-[20%]'}`}>
                {divider(skills).map((value, index) => {
                    return (
                        <div className={'flex w-full flex-row gap-2 justify-evenly items-center'} key={index}>
                            {value.map((skill, i) => {
                                return (
                                    <div key={i}
                                         className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} 
                                         lg:w-[30%] lg:h-[200px] w-[250px] p-2 whitespace-normal shadow 
                                         h-[250px] text-2xl text-center font-semibold rounded-xl flex 
                                         flex-col justify-evenly items-center`}>
                                        {skill.skill}
                                        <img
                                            className={`${theme === 'light' ? 'opacity-20' : 'opacity-90'} h-[130px] w-[130px]`}
                                            src={skill.image}/>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className={'mobile-visible flex-col items-center text-[3rem] hidden relative w-full'}>
                {
                    skills.map((v, i) => {
                        return (
                            <div key={i}
                                 className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} 
                                w-full mb-4 h-[150px] px-12 text-center font-semibold whitespace-normal rounded-xl 
                                flex flex-row justify-between items-center shadow`}>
                                {v.skill}
                                <img
                                    className={`${theme === 'light' ? 'opacity-20' : 'opacity-90'} h-[100px] w-[100px]`}
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