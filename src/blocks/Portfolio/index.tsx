import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../store";
import {setCurrentBlock} from "../../store/slice";
import {useOnScreen} from "../../App";

import demo1 from '../../images/demo1.gif';
import demo2 from '../../images/demo2.gif';
import demo3 from '../../images/demo3.gif';
import pi1 from '../../images/1.jpg';
import ButtonLink from "../../components/ButtonLink";

const Portfolio = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const refBlock = useRef<HTMLDivElement>(null);
    const isBlockVisible = useOnScreen(refBlock);

    useEffect(() => {
        if (isBlockVisible) {
            dispatch(setCurrentBlock('portfolio'))
        }
    }, [isBlockVisible])

    const projects = [
        {
            title: 'Yearly Goal Tracker',
            demo: pi1,
            desc: 'allows you to create goals for the year, add, delete, edit them and track progress',
            web: 'https://yearly-goal-tracker.vercel.app/yearly_goal_tracker/auth',
            rep: 'https://github.com/oOFaYOo/Yearly-goal-tracker'
        },
        {
            title: 'Analytical Service',
            demo: pi1,
            desc: 'simulates an application for some kind of business',
            web: 'https://analytical-service.vercel.app/users',
            rep: 'https://github.com/oOFaYOo/analytical-service'
        },
        {
            title: 'Matching Game',
            demo: pi1,
            desc: 'choose the theme, amount of cards, "Find a couple" and win',
            web: 'https://matching-game-one.vercel.app',
            rep: 'https://github.com/oOFaYOo/matching_game'
        }
    ];

    return (
        <div ref={ref}
             className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} px-12 relative w-full mt-52`}>
            <div
                className={'absolute left-0 top-0 mobile:hidden border-t-4 border-l-4 -translate-y-8 translate-x-8 animated-border w-[60%] h-[50%]'}>
            </div>
            <div
                className={'absolute right-0 top-0 mobile:hidden border-t-4 border-r-4 -translate-y-8 -translate-x-8 animated-border w-[20%] h-[50%]'}>
            </div>
            <div
                className={'absolute right-0 top-0 mobile:block hidden border-t-[6px] -translate-y-12 -translate-x-8 animated-border w-[90%] '}>
            </div>
            <a id={'portfolio-anchor'}/>
            {/*<h1 className={`mobile:text-[5rem] text-center font-bold mb-8 lg:text-3xl text-4xl font-mono*/}
            {/*${isVisible ? 'anim-active' : 'anim translate-x-[-10%]'}`}>Portfolio</h1>*/}
            <div className={`${isVisible ? 'anim-active' : 'anim translate-y-[20%]'} 
            w-full relative h-[90%] min-h-[600px] flex justify-center`}>
                <div className={'flex grow flex-row flex-wrap justify-evenly items-center gap-6 mobile:flex-col'}>
                    {
                        projects.map((item, i) =>
                            <div ref={i === 2 ? refBlock : null} key={i}
                                 className={'mobile:w-full w-[400px] h-[500px] mobile:h-[350px] relative flex mobile:flex-row flex-col justify-between'}>
                                <img src={item.demo} className={'border-transparent mb-4 mobile:mr-4 mobile:h-[250px]'}/>
                                <div className={'flex flex-col justify-between mobile:justify-evenly grow'}>
                                    <span
                                        className={'font-black mobile:font-semibold text-3xl lg:text-xl mobile:text-5xl mobile:text-center'}>
                                        {item.title}
                                    </span>
                                    <p className={'mobile:hidden inline text-2xl lg:text-lg text-justify'}>
                                        {item.desc}
                                    </p>
                                    <div className={'flex justify-evenly flex-row mobile:flex-col'}>
                                        <ButtonLink buttonText={'website'} link={item.web}
                                                    className={'px-[36px] text-3xl lg:text-xl mobile:text-4xl'}/>
                                        <ButtonLink buttonText={'repository'} link={item.rep}
                                                    className={'px-[26px] text-3xl lg:text-xl mobile:text-4xl'}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*{*/}
                {/*    projects.map((v, i) => {*/}
                {/*        return (*/}
                {/*            <div key={i}*/}
                {/*                className={`${theme === 'light' */}
                {/*                    ? 'bg-neutral-200/30 text-neutral-700' */}
                {/*                    : 'bg-neutral-800/60 text-neutral-400'} */}
                {/*                p-4 mobile:p-6 w-full relative flex mobile:flex-col flex-row justify-between duration-500 */}
                {/*                items-center rounded-xl my-4 shadow`}>*/}
                {/*                <img className={'rounded-xl mobile:w-full xl:w-[550px] w-[450px] mobile:mb-2'} src={v.demo}/>*/}
                {/*                <div className={'mobile:w-full ml-2 w-[55%]'}>*/}
                {/*                    <h2 className={'mobile:text-5xl duration-500 w-full text-center sm:my-2 my-2 font-semibold text-2xl'}>*/}
                {/*                        {v.title}*/}
                {/*                    </h2>*/}
                {/*                    <p className={'mobile:hidden duration-500 text-justify h-[120px] text-xl lg:text-2xl'}>*/}
                {/*                        {v.desc}*/}
                {/*                    </p>*/}
                {/*                    <div className={'flex w-full lg:m-0 mt-2 flex-row justify-between items-center'}>*/}
                {/*                        <ButtonLink*/}
                {/*                            buttonText={'Website'}*/}
                {/*                            link={v.web}*/}
                {/*                            className={'xl:text-3xl text-2xl py-8 px-12'}*/}
                {/*                        />*/}
                {/*                        <ButtonLink*/}
                {/*                            buttonText={'Repository'}*/}
                {/*                            link={v.rep}*/}
                {/*                            className={'xl:text-3xl text-2xl py-8 px-12'}*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>
    )
}

export default React.memo(Portfolio);