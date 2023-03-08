import React from "react";
import photo from './photo.jpg'


const AboutMe = () => {

    return (
        <div className={'w-full lg:h-[55vh] h-[10%] lg:justify-end justify-center flex lg:flex-row flex-col px-24 lg:m-0 mt-4'}>
            <div className={'lg:w-[50%] h-[30%] lg:h-full w-full flex flex-col justify-center'}>
                <p className={'text-5xl font-semibold lg:text-start text-center'}>Tseleva Veronika</p>
                <p className={'text-3xl lg:text-start text-center'}>frontend web developer</p>
            </div>
            <div className={'lg:flex hidden flex-row justify-center grow items-center lg:w-[50%] w-full '}>
                <div className={'bg-fuchsia-300 w-[350px] h-[400px] rotate-45 rounded-b-[70px] rounded-t-[150px]'}></div>
                <div className={'w-[300px] bg-cover h-[375px] rounded-xl absolute'} style={{
                    backgroundImage: `url(${photo})`,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                }}>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;