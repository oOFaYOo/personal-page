import {ReactElement} from "react";

export interface IPortfolioLandingPageState {
    theme: 'light' | 'dark'
}

export interface IButtonLink {
    buttonText: string,
    link: string,
    width: string,
    textSize: string,
    ico?: ReactElement
}