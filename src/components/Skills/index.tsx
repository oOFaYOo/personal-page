import React from "react";
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'
import image5 from '../../images/5.png'
import image6 from '../../images/6.png'
import image7 from '../../images/7.png'
import image8 from '../../images/8.png'
import image9 from '../../images/9.png'
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Skills = () => {

    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore)

    const skills = [['CSS', 'HTML', 'TailwindCSS'], ['JavaScript', 'TypeScript', 'React'], ['React Testing Library', 'Jest', 'Redux']];
    const images = [[image1, image2, image3], [image4, image5, image6], [image7, image8, image9]];
    // const skillsForMobile = [
    //     {skill:'CSS', image:image1},
    //     {skill:'HTML', image:image2},
    //     {skill:'TailwindCSS', image:image3},
    //     {skill:'JavaScript', image:image4},
    //     {skill:'TypeScript', image:image5},
    //     {skill:'React', image:image6},
    //     {skill:'React Testing Library', image:image7},
    //     {skill:'Jest', image:image8},
    //     {skill:'Redux', image:image9}
    // ];

    return (
        <div className={`${theme === 'light' ? 'text-neutral-900' : 'text-neutral-300'} my-8 px-24 flex flex-col justify-center items-center`}>
            <a id={'skills-anchor'} />
            <p className={'my-6 lg:text-3xl pt-4 text-4xl font-bold'}>Skills</p>
            <div className={'flex flex-col justify-center gap-2 items-center w-full'}>
                {skills.map((value,index)=>{
                    return (
                        <div className={'flex w-full flex-row gap-2 justify-evenly items-center'} key={index}>
                            {value.map((skill, i)=>{
                                return (
                                    <div key={i}
                                         className={`${theme === 'light' ? 'bg-neutral-200/30' : 'bg-neutral-800/60'} 
                                         lg:w-[30%] lg:h-[200px] w-[250px] p-2 whitespace-normal shadow 
                                         h-[250px] text-2xl text-center font-semibold rounded-xl flex 
                                         flex-col justify-evenly items-center`}>
                                        {skill}
                                        <img className={`${theme === 'light' ? 'opacity-20' : 'opacity-90'} relative h-[130px] w-[130px]`} src={images[index][i]} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            {/*<div className={'lg:hidden max-w-full border-neutral-300 border-4 flex flex-row relative rounded-xl justify-start gap-2 items-center overflow-x-scroll'}>*/}
            {/*    {*/}
            {/*        skillsForMobile.map((v, i)=>{*/}
            {/*            return (*/}
            {/*                <div key={i}*/}
            {/*                    className={'min-w-[250px] h-[250px] text-center text-2xl font-semibold rounded-xl flex flex-col justify-evenly items-center bg-neutral-200'}>*/}
            {/*                    {v.skill}*/}
            {/*                    <img className={'relative h-[130px] w-[130px]'} src={v.image} />*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
};

export default Skills;