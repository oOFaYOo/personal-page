import React from 'react';
import {IButtonLink} from "../../types";

const ButtonLink = ({buttonText, link, ico, className} : IButtonLink) => {

    return (
        <button
            className={`hover:text-neutral-100 active:text-neutral-100 text-inherit my-4 mobile:my-2 hover:bg-sky-500 h-16 ' +
                'shadow-md active:hover:bg-sky-500 font-bold duration-500 border-4 border-sky-500 rounded-full text-center`}>
            <a target="_blank" href={link} className={`inline text-nowrap relative h-hull ${className}`}>
                {ico ?? null}
                {buttonText}
            </a>
        </button>
    )
};

export default React.memo(ButtonLink);