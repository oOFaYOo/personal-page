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

    const windowWidth = window.screen.availWidth;
    const dispatch = useDispatch();
    const {theme} = useSelector((state:RootState) => state.PortfolioLandingPageStore)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <header className={'text-xl w-full sm:h-[10vh] lg:h-[10vh] h-[10%] flex flex-row justify-between'}>
            <div className={`${windowWidth > 1024 ? 'w-[40%]' : 'w-[30%]'} flex h-full justify-evenly items-center`}>
                {windowWidth < 1024
                    ? <>
                        <button onClick={(e)=>{handleClick(e)}}>
                        <DehazeIcon sx={{ fontSize: windowWidth > 640 ? '2.5rem' : '4.5rem' }} />
                        </button>
                        <Popover
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <div className={`${windowWidth > 640 ? 'text-3xl' : 'text-6xl'} flex flex-col`}>
                                <a className={'mx-2 my-4'}>Skills</a>
                                <a className={'mx-2 my-4'}>Portfolio</a>
                                <a className={'mx-2 my-4'}>Experience</a>
                            </div>
                        </Popover>
                    </>
                    : <>
                        <a>Skills</a>
                        <a>Portfolio</a>
                        <a>Experience</a>
                      </>
                }
            </div>
            <div className={`${windowWidth > 1024 ? 'w-[30%]' : 'w-[40%]'} flex h-full justify-evenly items-center`}>
                <a href={'https://t.me/nikatseleva'} target="_blank">
                    <TelegramIcon sx={{ fontSize: windowWidth > 640 ? '2rem' : '4.5rem' }} />
                </a>
                <a href={'https://github.com/oOFaYOo'} target="_blank">
                    <GitHubIcon sx={{ fontSize: windowWidth > 640 ? '2rem' : '4.5rem' }} />
                </a>
                <a href={"mailto:nikatseleva@gmail.com"} target="_blank">
                    <AlternateEmailIcon sx={{ fontSize: windowWidth > 640 ? '2rem' : '4.5rem' }} />
                </a>
            </div>
            <div className={'flex w-[30%] h-full justify-center items-center'}>
                {
                    windowWidth > 640
                    ? <>
                        <LightModeIcon sx={{ fontSize: '2rem' }} />
                        <Switch id={'theme-switcher'} checked={theme !== 'light'} onChange={(e)=>{
                            const theme = e.currentTarget.checked ? 'dark' : 'light';
                            // localStorage.setItem('theme', theme)
                            dispatch(setTheme(theme));
                        }} />
                        <DarkModeIcon sx={{ fontSize: '2rem' }} />
                      </>
                    : (
                        theme === 'dark'
                            ? <LightModeIcon sx={{ fontSize: '4.5rem' }} onClick={
                                ()=>{
                                    // localStorage.setItem('theme', 'light')
                                    dispatch(setTheme('light'));
                                }
                            } />
                            : <DarkModeIcon sx={{ fontSize: '4.5rem' }} onClick={
                                ()=>{
                                    // localStorage.setItem('theme', 'dark')
                                    dispatch(setTheme('dark'));
                                }
                            } />
                        )
                }
            </div>
        </header>
    )
};

export default Header;