import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import AboutMe from "./index";

jest.mock('../../images/photo.jpg', ()=>'');

const intersectionObserverMock = () => ({
    observe: () => null,
    disconnect: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

it('AboutMe test', ()=>{

    const Comp = ()=>{
        return(
            <Provider store={store}>
            <AboutMe openMoreInfo={()=>{}} />
            </Provider>
        )
    }

    render(<Comp />)

    fireEvent.click( screen.getByTestId("ArrowForwardIcon"));
})