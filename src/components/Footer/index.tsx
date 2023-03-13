import React from "react";
import {useSelector} from "react-redux";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import {RootState} from "../../store";

const Footer = () => {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);

    return (
        <>
            <div
                className={`mobile-invisible bg-gradient-to-r 
                ${theme === 'light' ? 'from-cyan-300 via-pink-400 to-sky-300' : 'from-cyan-700 via-pink-600 to-sky-700'} 
                text-xl w-full lg:h-[10vh] h-[10%] min-h-[64px] flex flex-row items-center justify-center gap-8`}>
                <a href={'https://t.me/nikatseleva'} target="_blank">
                    <TelegramIcon sx={{fontSize: '2.5rem'}} className={'hover:scale-110'}/>
                </a>
                <a href={'https://github.com/oOFaYOo'} target="_blank">
                    <GitHubIcon sx={{fontSize: '2.5rem'}} className={'hover:scale-110'}/>
                </a>
                <a href={"mailto:nikatseleva@gmail.com"} target="_blank">
                    <AlternateEmailIcon sx={{fontSize: '2.5rem'}} className={'hover:scale-110'}/>
                </a>
            </div>
            <div
                className={`mobile-visible hidden bg-gradient-to-r 
                ${theme === 'light' ? 'from-cyan-300 via-pink-400 to-sky-300' : 'from-cyan-700 via-pink-600 to-sky-700'} 
                text-xl w-full lg:h-[10vh] h-[10%] min-h-[64px] flex flex-row items-center justify-center gap-8`}>
                <a href={'https://t.me/nikatseleva'} target="_blank">
                    <TelegramIcon sx={{fontSize: '4rem'}} className={'hover:scale-110'}/>
                </a>
                <a href={'https://github.com/oOFaYOo'} target="_blank">
                    <GitHubIcon sx={{fontSize: '4rem'}} className={'hover:scale-110'}/>
                </a>
                <a href={"mailto:nikatseleva@gmail.com"} target="_blank">
                    <AlternateEmailIcon sx={{fontSize: '4rem'}} className={'hover:scale-110'}/>
                </a>
            </div>
        </>

    )
};

export default React.memo(Footer);