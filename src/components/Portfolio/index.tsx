import React, {useRef} from "react";
import {useSelector} from "react-redux";

import {RootState} from "../../store";
import {useOnScreen} from "../../App";

import demo1 from '../../images/demo1.gif';
import demo2 from '../../images/demo2.gif';

const Portfolio = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)

    const projects = [
        {
            title: 'Yearly goal tracker',
            demo: demo1,
            desc: 'The application allows you to create goals for the year, add, delete, edit them and track progress',
            web: 'https://yearly-goal-tracker.vercel.app/yearly_goal_tracker/auth',
            rep: 'https://github.com/oOFaYOo/Yearly-goal-tracker'
        },
        {
            title: 'Analytical service',
            demo: demo2,
            desc: 'A small personal project that simulates an application for some kind of business',
            web: 'https://analytical-service.vercel.app/users',
            rep: 'https://github.com/oOFaYOo/analytical-service'
        }
    ];

    return (
        <div ref={ref}
             className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} px-24 relative lg:h-[80%] w-full mb-16`}>
            <a id={'portfolio-anchor'}/>
            <h2 className={`mobile-headers text-center font-bold mb-8 lg:text-3xl text-4xl 
            ${isVisible ? 'anim-active' : 'anim translate-x-[-10%]'}`}>Portfolio</h2>
            <div className={`${isVisible ? 'anim-active' : 'anim translate-y-[20%]'} 
            w-full relative flex h-[90%] min-h-[600px] lg:flex-row flex-col justify-evenly items-center`}>
                {
                    projects.map((v, i) => {
                        return (
                            <div
                                className={`${theme === 'light' ? 'bg-neutral-200/30 text-neutral-700' : 'bg-neutral-800/60 text-neutral-400'} 
                    p-6 w-full lg:min-w-[445px] lg:w-[45%] min-h-[500px] h-[95%] relative lg:my-0 my-4 shadow flex flex-col justify-between items-center rounded-xl`}>
                                <img className={'rounded-xl w-full mb-4'} src={v.demo}/>
                                <h2 className={'w-full mobile-subheaders text-center sm:my-4 my-8 font-semibold text-2xl'}>{v.title}</h2>
                                <p className={'mobile-invisible text-justify mb-8 text-2xl'}>
                                    {v.desc}
                                </p>
                                <div className={'flex w-full lg:m-0 mt-6 flex-row justify-evenly items-center'}>
                                    <button
                                        className={'text-neutral-100 w-[45%] hover:scale-105 h-12 ' +
                                            'shadow-md font-bold bg-sky-500 rounded-3xl text-center text-3xl mobile-button'}>
                                        <a href={v.web} className={'w-[full]'}></a>
                                        Website
                                    </button>
                                    <button
                                        className={'text-neutral-100 w-[45%] hover:scale-105 h-12 ' +
                                            'shadow-md font-bold bg-sky-500 rounded-3xl text-center text-3xl mobile-button'}>
                                        <a href={v.rep} className={'w-[full]'}></a>
                                        Repository
                                    </button>
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