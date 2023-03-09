import React from "react";
import photo from '../../images/photo.jpg'
import TelegramIcon from '@mui/icons-material/Telegram';

const AboutMe = () => {

    return (
        <div
            className={'w-full lg:h-[55vh] h-[25%] lg:justify-end justify-center flex lg:flex-row flex-col px-24 lg:mt-0 mt-4 mb-8'}>
            <div
                className={'lg:w-[50%] lg:m-0 mt-12 lg:h-full w-full flex flex-col lg:items-start items-center justify-center'}>
                <p className={'text-5xl font-semibold lg:text-start text-center'}>Tseleva Veronika</p>
                <p className={'text-3xl lg:text-start text-center'}>frontend web developer</p>
                <a
                    href={'https://t.me/nikatseleva'}
                    className={'lg:w-[60%] w-[90%] h-12 font-bold bg-sky-500 mt-12 rounded-3xl flex items-center justify-center text-4xl lg:text-3xl'}>
                    <button>
                        <TelegramIcon className={'mr-8'}/>
                        Write me
                    </button>
                </a>
            </div>
            <div className={'lg:flex hidden flex-row justify-center grow items-center lg:w-[50%] w-full '}>
                <div className={'bg-sky-300 w-[350px] h-[430px] rotate-45 rounded-b-[70px] rounded-t-[170px]'}></div>
                <div className={'w-[300px] bg-cover h-[375px] rounded-xl absolute'} style={{
                    backgroundImage: `url(${photo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;