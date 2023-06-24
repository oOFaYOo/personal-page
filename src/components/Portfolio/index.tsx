import React, {useRef} from "react";
import {useSelector} from "react-redux";

import {RootState} from "../../store";
import {useOnScreen} from "../../App";

import demo1 from '../../images/demo1.gif';
import demo2 from '../../images/demo2.gif';
import demo3 from '../../images/demo3.gif';
import ButtonLink from "../ButtonLink";

const Portfolio = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)

    const projects = [
        {
            title: 'Yearly goal tracker',
            demo: demo1,
            desc: 'Application allows you to create goals for the year, add, delete, edit them and track progress',
            web: 'https://yearly-goal-tracker.vercel.app/yearly_goal_tracker/auth',
            rep: 'https://github.com/oOFaYOo/Yearly-goal-tracker'
        },
        {
            title: 'Analytical service',
            demo: demo2,
            desc: 'Personal project that simulates an application for some kind of business',
            web: 'https://analytical-service.vercel.app/users',
            rep: 'https://github.com/oOFaYOo/analytical-service'
        },
        {
            title: 'Matching game',
            demo: demo3,
            desc: 'Game "Find a couple". You can choose the theme of the cards and the quantity',
            web: 'https://matching-game-one.vercel.app',
            rep: 'https://github.com/oOFaYOo/matching_game'
        }
    ];

    return (
        <div ref={ref}
             className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} px-24 relative w-full mb-8`}>
            <a id={'portfolio-anchor'}/>
            <h1 className={`mobile:text-[5rem] text-center font-bold mb-8 lg:text-3xl text-4xl 
            ${isVisible ? 'anim-active' : 'anim translate-x-[-10%]'}`}>Portfolio</h1>
            <div className={`${isVisible ? 'anim-active' : 'anim translate-y-[20%]'} 
            w-full relative flex h-[90%] min-h-[600px] flex-col justify-between items-center`}>
                {
                    projects.map((v, i) => {
                        return (
                            <div
                                className={`${theme === 'light' 
                                    ? 'bg-neutral-200/30 text-neutral-700' 
                                    : 'bg-neutral-800/60 text-neutral-400'} 
                                p-4 mobile:p-6 w-full relative flex mobile:flex-col flex-row justify-between duration-500 
                                items-center rounded-xl my-4 shadow`}>
                                <img className={'rounded-xl mobile:w-full xl:w-[550px] w-[450px] mobile:mb-2'} src={v.demo}/>
                                <div className={'mobile:w-full ml-2 w-[55%]'}>
                                    <h2 className={'mobile:text-5xl duration-500 w-full text-center sm:my-2 my-2 font-semibold text-2xl'}>
                                        {v.title}
                                    </h2>
                                    <p className={'mobile:hidden duration-500 text-justify h-[120px] text-xl lg:text-2xl'}>
                                        {v.desc}
                                    </p>
                                    <div className={'flex w-full lg:m-0 mt-2 flex-row justify-between items-center'}>
                                        <ButtonLink
                                            buttonText={'Website'}
                                            link={v.web}
                                            width={'w-[47%]'}
                                            textSize={'xl:text-3xl text-2xl'}
                                        />
                                        <ButtonLink
                                            buttonText={'Repository'}
                                            link={v.rep}
                                            width={'w-[47%]'}
                                            textSize={'xl:text-3xl text-2xl'}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default React.memo(Portfolio);