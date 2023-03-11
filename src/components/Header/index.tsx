import React, {useState} from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Popover, Switch} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setTheme} from "../../store/slice";

const Header = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <header className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} text-xl w-full sm:h-[10vh] mb-12 lg:h-[10vh] h-[10%] flex flex-row justify-between`}>
            <div className={'lg:hidden w-[30%] flex h-full justify-evenly items-center'}>
                <button onClick={(e) => {
                    handleClick(e)
                }}>
                    <DehazeIcon sx={{fontSize: '4rem'}}/>
                </button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    PaperProps={{
                        style: {
                            borderRadius: '16px',
                        }
                    }}
                    className={'lg:hidden'}
                >
                    <div className={'text-5xl flex flex-col'}>
                        <a href={'#skills-anchor'} className={'w-full p-4 hover:bg-neutral-300 text-center border-b-2 border-neutral-300'}>Skills</a>
                        <a href={'#portfolio-anchor'} className={'w-full p-4 hover:bg-neutral-300 text-center border-b-2 border-neutral-300'}>Portfolio</a>
                    </div>
                </Popover>
            </div>
            <div className={'lg:flex w-[40%] hidden h-full justify-evenly items-center'}>
                <a href={'#skills-anchor'} className={'hover:scale-110'}>Skills</a>
                <a href={'#portfolio-anchor'} className={'hover:scale-110'}>Portfolio</a>
            </div>
            <div className={'w-[30%] lg:flex hidden h-full justify-evenly items-center'}>
                <a href={'https://t.me/nikatseleva'} target="_blank">
                    <TelegramIcon sx={{fontSize: '2rem'}} className={'hover:scale-110'}/>
                </a>
                <a href={'https://github.com/oOFaYOo'} target="_blank">
                    <GitHubIcon sx={{fontSize: '2rem'}} className={'hover:scale-110'}/>
                </a>
                <a href={"mailto:nikatseleva@gmail.com"} target="_blank">
                    <AlternateEmailIcon sx={{fontSize: '2rem'}} className={'hover:scale-110'}/>
                </a>
            </div>
            <div className={'w-[40%] lg:hidden flex h-full justify-evenly items-center'}>
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
            <div className={'lg:flex hidden w-[30%] h-full justify-center items-center'}>
                <LightModeIcon sx={{fontSize: '2rem'}} className={`${theme === 'light' ? 'text-amber-500' : 'text-inherit'}`}/>
                <Switch id={'theme-switcher'} color={'default'} checked={theme !== 'light'} onChange={(e) => {
                    const theme = e.currentTarget.checked ? 'dark' : 'light';
                    localStorage.setItem('theme', theme)
                    dispatch(setTheme(theme));
                }}/>
                <DarkModeIcon sx={{fontSize: '2rem'}} className={`${theme === 'light' ? 'text-inherit' : 'text-sky-600'}`}/>
            </div>
            <div className={'lg:hidden flex w-[30%] h-full justify-center items-center'}>
                {
                    theme === 'dark'
                        ? <LightModeIcon sx={{fontSize: '4rem'}} onClick={
                            () => {
                                localStorage.setItem('theme', 'light')
                                dispatch(setTheme('light'));
                            }
                        }/>
                        : <DarkModeIcon sx={{fontSize: '4rem'}} onClick={
                            () => {
                                localStorage.setItem('theme', 'dark')
                                dispatch(setTheme('dark'));
                            }
                        }/>
                }
            </div>
        </header>
    )
};

export default React.memo(Header);