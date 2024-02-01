import {ReactElement} from "react";

export interface IPortfolioLandingPageState {
    theme: 'light' | 'dark';
    currentBlock: 'about' | 'skills' | 'portfolio'
}

export interface IButtonLink {
    buttonText: string,
    link: string,
    textSize: string,
    ico?: ReactElement
}