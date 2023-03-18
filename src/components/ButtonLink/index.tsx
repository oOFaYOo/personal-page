import React, {ReactElement} from 'react';


const ButtonLink = ({buttonText, link, width, textSize, ico}:{buttonText:string, link:string, width:string, textSize:string, ico?:ReactElement}) => {

    return (
        <button
            className={`${width} ${textSize} text-neutral-100 my-12 hover:scale-105 h-12 ' +
                'shadow-md font-bold bg-sky-500 rounded-3xl text-center mobile-button`}>
            <a target="_blank" href={link} className={'inline-block relative w-[95%] h-hull'}>
                {ico ?? null}
                {buttonText}
            </a>
        </button>
    )
};

export default React.memo(ButtonLink);