import React from "react";
import Portfolio from "./index";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";

jest.mock('../../images/1.png', ()=>'');
jest.mock('../../images/2.png', ()=>'');
jest.mock('../../images/3.png', ()=>'');
jest.mock('../../images/4.png', ()=>'');
jest.mock('../../images/5.png', ()=>'');
jest.mock('../../images/6.png', ()=>'');
jest.mock('../../images/7.png', ()=>'');
jest.mock('../../images/8.png', ()=>'');
jest.mock('../../images/9.png', ()=>'');
jest.mock('../../images/photo.jpg', ()=>'');
jest.mock('../../images/demo1.gif', ()=>'');
jest.mock('../../images/demo2.gif', ()=>'');

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

    const {container, rerender} = render(<Comp />)
})