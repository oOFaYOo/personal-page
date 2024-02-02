import React, {useEffect, useRef} from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";

import photo from '../../images/photo.jpg';
import ButtonLink from "../../components/ButtonLink";
import {useOnScreen} from "../../App";
import {setCurrentBlock} from "../../store/slice";

const AboutMe = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore)

    const refBlock = useRef<HTMLDivElement>(null);
    const isBlockVisible = useOnScreen(refBlock);

    useEffect(() => {
        if (isBlockVisible) {
            dispatch(setCurrentBlock('about'))
        }
    }, [isBlockVisible])

    return (
        <>
            <div
                 className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
            w-full relative lg:flex-row flex-col flex px-24 lg:min-h-[515px] lg:h-[90vh] my-16 lg:my-0 justify-between`}>
                <a id={'about-anchor'}/>
                <div
                    className={'lg:w-[55%] w-full lg:h-full flex flex-col items-center justify-center'}>
                    <h3 className={'mobile:text-5xl duration-500 text-2xl text-center font-serif italic'}>Hello, my name
                        is</h3>
                    <h1 ref={refBlock} className={'mobile:text-[5rem] duration-500 my-2 text-5xl font-semibold text-center'}>Veronika
                        Tseleva </h1>
                    <h2 className={'mobile:text-5xl duration-500 text-3xl mb-4 text-center italic'}>frontend web
                        developer</h2>
                    <ButtonLink
                        buttonText={'Contact me'}
                        link={'https://t.me/nikatseleva'}
                        className={'mobile:text-[3rem] text-4xl lg:text-3xl py-8 px-12'}
                        ico={<TelegramIcon className={'mr-8'}/>}/>
                </div>
                <div className={'lg:flex hidden lg:w-[45%] w-full justify-center items-center'}>
                    <div
                        className={'absolute border-t-4 border-l-4 animated-border w-[150px] h-[150px] -translate-x-28 -translate-y-36'}></div>
                    <div
                        className={'border-[6px] animated-border w-[330px] h-[405px] translate-x-6 translate-y-6'}></div>
                    <div className={'w-[330px] bg-cover h-[405px] absolute shadow-md bg-no-repeat bg-center grayscale'}
                         style={{backgroundImage: `url(${photo})`}}>
                    </div>
                </div>
            </div>
        </>
    )
};

export default React.memo(AboutMe);