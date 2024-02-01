import React from 'react';
import {IButtonLink} from "../../types";

const ButtonLink = ({buttonText, link, width, textSize, ico} : IButtonLink) => {

    return (
        <button
            className={`${width} ${textSize} hover:text-neutral-100 active:text-neutral-100 text-inherit my-8 hover:bg-sky-500 h-16 ' +
                'shadow-md active:hover:bg-sky-500 font-bold duration-500 border-4 border-sky-500 rounded-full text-center mobile-button`}>
            <a target="_blank" href={link} className={'inline-block relative w-[95%] h-hull'}>
                {ico ?? null}
                {buttonText}
            </a>
        </button>
    )
};

export default React.memo(ButtonLink);