import React from "react";
import demo1 from '../../images/demo1.gif';
import demo2 from '../../images/demo2.gif';

const Portfolio = () => {

    return (
        <>
            <a id={'portfolio-anchor'}/>
            <p className={'w-full mb-6 text-center lg:text-3xl text-4xl font-bold'}>Portfolio</p>
            <div className={'lg:px-24 py-4 w-full gap-4 flex lg:flex-row flex-col justify-evenly items-center'}>
                <div
                    className={'lg:h-[90%] min-h-[450px] h-[35%] p-6 w-[80%] lg:w-[45%] rounded-xl flex flex-col items-center justify-between overflow-hidden bg-neutral-300'}>
                    <img className={'rounded-xl w-full lg:mb-4'} src={demo1}/>
                    <p className={'text-justify lg:inline hidden'}>
                        A small project that uses a fake backend, allows you to register and
                        create your own goals for the year, add steps to complete the goal. Goals can be deleted,
                        steps can be edited, deleted and added. For the convenience of selecting goals,
                        there is sorting, searching and filtering.
                    </p>
                    <div className={'flex w-full grow lg:grow-0 flex-row justify-evenly items-center mt-4'}>
                        <a href={'https://yearly-goal-tracker.vercel.app/yearly_goal_tracker/auth'}
                           className={'w-[45%] py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button>Website</button>
                        </a>
                        <a href={'https://github.com/oOFaYOo/Yearly-goal-tracker'}
                           className={'w-[45%] py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button>Repository</button>
                        </a>
                    </div>
                </div>
                <div
                    className={'lg:h-[90%] min-h-[450px] h-[35%] p-6 w-[80%] lg:w-[45%] rounded-xl flex flex-col items-center justify-between overflow-hidden bg-neutral-300'}>
                    <img className={'rounded-xl w-full lg:mb-4'} src={demo2}/>
                    <p className={'text-justify lg:inline hidden'}>
                        A small personal project that simulates an application for some kind of business.
                    </p>
                    <div className={'flex w-full grow lg:grow-0 flex-row justify-evenly items-center mt-4'}>
                        <a href={'https://analytical-service.vercel.app/users'}
                           className={'w-[45%] py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button>Website</button>
                        </a>
                        <a href={'https://github.com/oOFaYOo/analytical-service'}
                           className={'w-[45%] py-1 font-semibold bg-sky-500 rounded-3xl flex items-center justify-center text-3xl lg:text-xl'}>
                            <button>Repository</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;