import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import photo from '../../images/photo.jpg';
import ButtonLink from "../ButtonLink";

const AboutMe = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore)

    return (
        <div
            className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
            w-full lg:flex-row flex-col min-h-[200px] flex px-24 lg:h-[75vh] h-[25%] justify-center mb-36`}>
            <div
                className={'lg:w-[50%] w-full lg:h-full flex flex-col items-center justify-center'}>
                <h1 className={'mobile:text-[5rem] duration-500 text-5xl font-semibold text-center'}>Tseleva Veronika</h1>
                <h2 className={'mobile:text-5xl duration-500 text-3xl text-center'}>frontend web developer</h2>
                <ButtonLink
                    buttonText={'Contact me'}
                    link={'https://t.me/nikatseleva'}
                    width={'lg:w-[60%] w-[90%] min-w-[300px]'}
                    textSize={'text-4xl lg:text-3xl'}
                    ico={<TelegramIcon className={'mr-8'}/>} />
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