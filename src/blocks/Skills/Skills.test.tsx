import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Skills from "./index";

jest.mock('../../images/css_icon.png', ()=>'');
jest.mock('../../images/html_icon.png', ()=>'');
jest.mock('../../images/tailwind_icon.png', ()=>'');
jest.mock('../../images/js_icon.png', ()=>'');
jest.mock('../../images/ts_icon.png', ()=>'');
jest.mock('../../images/react_icon.png', ()=>'');
jest.mock('../../images/rtl_icon.png', ()=>'');
jest.mock('../../images/jest_icon.png', ()=>'');
jest.mock('../../images/redux_icon.png', ()=>'');
jest.mock('../../images/photo.jpg', ()=>'');
jest.mock('../../images/demo1.gif', ()=>'');
jest.mock('../../images/demo2.gif', ()=>'');

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