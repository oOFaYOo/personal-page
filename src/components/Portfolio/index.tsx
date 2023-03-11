import React, {useRef} from "react";
import demo1 from '../../images/demo1.gif';
import demo2 from '../../images/demo2.gif';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {useOnScreen} from "../../App";

const Portfolio = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)

    return (
        <>
            <a id={'portfolio-anchor'}/>
            <p className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} ${isVisible ? 'anim-active' : 'anim'} w-full mb-6 text-center lg:text-3xl text-4xl font-bold`}>Portfolio</p>
            <div ref={ref} className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} ${isVisible ? 'anim-active' : 'anim'} lg:px-24 py-4 w-full gap-4 flex lg:flex-row flex-col justify-evenly items-center`}>
                <div
                    className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} lg:h-full relative min-h-[450px] h-[35%] p-6 w-[80%] lg:w-[45%] rounded-xl flex flex-col items-center justify-between overflow-hidden bg-neutral-200/30 shadow`}>
                    <img className={'rounded-xl w-full lg:mb-4'} src={demo1}/>
                    <p className={'text-justify lg:inline hidden'}>
                        The application allows you to create goals for the year, add, delete, edit them and track progress
                    </p>
                    <div className={'flex w-full grow lg:grow-0 flex-row justify-evenly items-center mt-4'}>
                        <a href={'https://yearly-goal-tracker.vercel.app/yearly_goal_tracker/auth'}
                           className={'w-[45%] shadow-md hover:scale-105 py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button className={'text-neutral-100'} >Website</button>
                        </a>
                        <a href={'https://github.com/oOFaYOo/Yearly-goal-tracker'}
                           className={'w-[45%] shadow-md hover:scale-105 py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button className={'text-neutral-100'} >Repository</button>
                        </a>
                    </div>
                </div>
                <div
                    className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} lg:h-full relative min-h-[450px] h-[35%] p-6 w-[80%] lg:w-[45%] rounded-xl flex flex-col items-center justify-between overflow-hidden bg-neutral-200/30 shadow`}>
                    <img className={'rounded-xl w-full lg:mb-4'} src={demo2}/>
                    <p className={'text-justify lg:inline hidden'}>
                        A small personal project that simulates an application for some kind of business
                    </p>
                    <div className={'flex w-full grow lg:grow-0 flex-row justify-evenly items-center mt-4'}>
                        <a href={'https://analytical-service.vercel.app/users'}
                           className={'w-[45%] shadow-md hover:scale-105 py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button className={'text-neutral-100'} >Website</button>
                        </a>
                        <a href={'https://github.com/oOFaYOo/analytical-service'}
                           className={'w-[45%] shadow-md hover:scale-105 py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button className={'text-neutral-100'} >Repository</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;