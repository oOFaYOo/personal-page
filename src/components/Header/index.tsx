import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Popover, Switch} from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

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
        <header className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} 
        w-full mb-12 lg:h-[10vh] h-[10%] min-h-[64px] flex flex-row justify-between`}>
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
                    <div className={'text-5xl p-6 text-center flex flex-col gap-y-4'}>
                        <a href={'#skills-anchor'} onClick={() => handleClose()}
                           className={'w-full hover:bg-neutral-300'}>Skills</a>
                        <div className={'h-1 w-full bg-neutral-200'}/>
                        <a href={'#portfolio-anchor'} onClick={() => handleClose()}
                           className={'w-full hover:bg-neutral-300'}>Portfolio</a>
                    </div>
                </Popover>
            </div>
            <div className={'lg:flex w-[40%] hidden h-full justify-evenly items-center text-2xl'}>
                <a href={'#skills-anchor'} className={'hover:scale-110'}>Skills</a>
                <a href={'#portfolio-anchor'} className={'hover:scale-110'}>Portfolio</a>
            </div>
            <div className={'mobile-invisible w-[30%] flex h-full justify-evenly items-center'}>
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
            <div className={'mobile-visible hidden w-[40%] flex h-full justify-evenly items-center'}>
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
            <div className={'mobile-invisible flex w-[30%] h-full justify-center items-center'}>
                <LightModeIcon sx={{fontSize: '2.5rem'}}
                               className={`${theme === 'light' ? 'text-amber-500' : 'text-inherit'}`}/>
                <Switch data-testid={'switch'} id={'theme-switcher'} color={'default'} checked={theme !== 'light'}
                        onChange={(e) => {
                            const theme = e.currentTarget.checked ? 'dark' : 'light';
                            localStorage.setItem('theme', theme)
                            dispatch(setTheme(theme));
                        }}/>
                <DarkModeIcon sx={{fontSize: '2.5rem'}}
                              className={`${theme === 'light' ? 'text-inherit' : 'text-sky-600'}`}/>
            </div>
            <div className={'hidden mobile-visible w-[30%] h-full justify-center items-center'}>
                {
                    theme === 'dark'
                        ? <LightModeIcon sx={{fontSize: '4rem'}} data-testid={'LightModeIcon'} onClick={
                            () => {
                                localStorage.setItem('theme', 'light')
                                dispatch(setTheme('light'));
                            }
                        }/>
                        : <DarkModeIcon sx={{fontSize: '4rem'}} data-testid={'DarkModeIcon'} onClick={
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