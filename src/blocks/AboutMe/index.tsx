import React, {useRef} from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import photo from '../../images/photo.jpg';
import ButtonLink from "../../components/ButtonLink";
import {useOnScreen} from "../../App";

const AboutMe = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore)

    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)

    return (
        <div ref={ref}
            className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
            w-full relative lg:flex-row flex-col min-h-[200px] flex px-24 lg:min-h-[515px] lg:h-[75vh] h-[25%] justify-between my-16`}>
            <a id={'about-anchor'}/>
            <div
                className={'lg:w-[55%] w-full lg:h-full flex flex-col items-center justify-center'}>
                <h3 className={'mobile:text-5xl duration-500 text-2xl text-center font-serif italic'}>Hello, my name is</h3>
                <h1 className={'mobile:text-[5rem] duration-500 my-2 text-5xl font-semibold text-center'}>Veronika Tseleva </h1>
                <h2 className={'mobile:text-5xl duration-500 text-3xl mb-4 text-center italic'}>frontend web developer</h2>
                <ButtonLink
                    buttonText={'Contact me'}
                    link={'https://t.me/nikatseleva'}
                    width={'lg:w-[60%] w-[90%] min-w-[300px]'}
                    textSize={'text-4xl lg:text-3xl'}
                    ico={<TelegramIcon className={'mr-8'}/>} />
            </div>
            <div className={'lg:flex hidden lg:w-[45%] w-full justify-center items-center'}>
                <div className={'absolute border-t-4 border-l-4 animated-border w-[150px] h-[150px] -translate-x-28 -translate-y-36'}></div>
                <div className={'border-[6px] animated-border w-[330px] h-[405px] translate-x-6 translate-y-6'}></div>
                <div className={'w-[330px] bg-cover h-[405px] absolute shadow-md bg-no-repeat bg-center grayscale'}
                     style={{ backgroundImage: `url(${photo})`}}>
                </div>
            </div>
        </div>
    )
};

export default React.memo(AboutMe);