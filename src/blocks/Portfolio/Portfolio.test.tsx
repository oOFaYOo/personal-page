import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Portfolio from "./index";

jest.mock('../../images/css_icon.png', ()=>'');
jest.mock('../../images/photo.jpg', ()=>'');
jest.mock('../../images/ygt_light.jpg', ()=>'');
jest.mock('../../images/ygt_dark.jpg', ()=>'');
jest.mock('../../images/mg_light.jpg', ()=>'');
jest.mock('../../images/mg_dark.jpg', ()=>'');
jest.mock('../../images/as_light.jpg', ()=>'');
jest.mock('../../images/as_dark.jpg', ()=>'');

const intersectionObserverMock = () => ({
    observe: () => null,
    disconnect: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

it('Portfolio test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <Portfolio />
        </Provider>
        )
    }

    render(<Comp />)
})