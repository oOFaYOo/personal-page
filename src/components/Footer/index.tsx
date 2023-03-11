import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Footer = () => {
    const {theme} = useSelector((state:RootState)=>state.PortfolioLandingPageStore);

    return (
        <div className={`bg-gradient-to-r ${theme === 'light' ? 'from-cyan-300 via-pink-400 to-sky-300' : 'from-cyan-700 via-pink-700 to-sky-700'} text-xl w-full
         sm:h-[10vh] mt-12 lg:h-[10vh] h-[10%] flex flex-row items-center justify-center gap-8`}>
            <a href={'https://t.me/nikatseleva'} target="_blank" className={'lg:inline-block hidden'}>
                <TelegramIcon sx={{fontSize: '2rem'}}/>
            </a>
            <a href={'https://github.com/oOFaYOo'} target="_blank" className={'lg:inline-block hidden'}>
                <GitHubIcon sx={{fontSize: '2rem'}}/>
            </a>
            <a href={"mailto:nikatseleva@gmail.com"} target="_blank" className={'lg:inline-block hidden'}>
                <AlternateEmailIcon sx={{fontSize: '2rem'}}/>
            </a>
            <a href={'https://t.me/nikatseleva'} target="_blank" className={'lg:hidden inline-block'}>
                <TelegramIcon sx={{fontSize: '4rem'}}/>
            </a>
            <a href={'https://github.com/oOFaYOo'} target="_blank" className={'lg:hidden inline-block'}>
                <GitHubIcon sx={{fontSize: '4rem'}}/>
            </a>
            <a href={"mailto:nikatseleva@gmail.com"} target="_blank" className={'lg:hidden inline-block'}>
                <AlternateEmailIcon sx={{fontSize: '4rem'}}/>
            </a>
        </div>
    )
};

export default React.memo(Footer);