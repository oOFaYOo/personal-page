import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Skills from "./index";

jest.mock('../../images/css_icon.png', ()=>'');

const intersectionObserverMock = () => ({
    observe: () => null,
    disconnect: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

it('Skills test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <Skills />
        </Provider>
        )
    }

    render(<Comp />)
})