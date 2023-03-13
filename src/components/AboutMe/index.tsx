import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import photo from '../../images/photo.jpg';

const AboutMe = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore)

    return (
        <div
            className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
            w-full lg:flex-row flex-col min-h-[200px] flex px-24 lg:h-[75vh] h-[25%] justify-center mb-36`}>
            <div
                className={'lg:w-[50%] w-full lg:h-full flex flex-col items-center justify-center'}>
                <h1 className={'mobile-headers duration-500 text-5xl font-semibold text-center'}>Tseleva Veronika</h1>
                <h2 className={'mobile-subheaders duration-500 text-3xl text-center'}>frontend web developer</h2>
                <button
                    className={'mobile-invisible text-neutral-100 lg:w-[60%] w-[90%] my-12 hover:scale-105 h-12 ' +
                        'shadow-md font-bold bg-sky-500 rounded-3xl text-center text-4xl lg:text-3xl mobile-button'}>
                    <a target="_blank" href={'https://t.me/nikatseleva'} className={'inline-block relative w-[95%] h-hull'}>
                        <TelegramIcon className={'mr-8'} sx={{fontSize: '2rem'}}/>
                        Write me
                    </a>
                </button>
                <button
                    className={'mobile-visible hidden text-neutral-100 lg:w-[60%] w-[90%] my-12 hover:scale-105 h-12 ' +
                        'shadow-md font-bold bg-sky-500 rounded-3xl text-center text-4xl lg:text-3xl mobile-button'}>
                    <a target="_blank" href={'https://t.me/nikatseleva'} className={'inline-block relative w-[95%] h-hull'}>
                        <TelegramIcon className={'mr-8'} sx={{fontSize: '4rem'}}/>
                        Write me
                    </a>
                </button>
            </div>
            <div className={'lg:flex hidden lg:w-[50%] w-full justify-center items-center'}>
                <div
                    className={`bg-gradient-to-r 
                    ${theme === 'light' ? 'from-cyan-500/70 via-pink-400 to-sky-600/70' : 'from-cyan-700 via-pink-700 to-sky-700'} 
                    w-[350px] h-[430px] rotate-45 duration-500 rounded-b-[70px] rounded-t-[170px]`}></div>
                <div className={'w-[300px] bg-cover h-[375px] rounded-xl absolute shadow-md bg-no-repeat bg-center'}
                     style={{ backgroundImage: `url(${photo})`}}>
                </div>
            </div>
        </div>
    )
};

export default React.memo(AboutMe);