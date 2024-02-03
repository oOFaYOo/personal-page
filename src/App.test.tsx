import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";

jest.mock('../src/images/css_icon.png', ()=>'');
jest.mock('../src/images/photo.jpg', ()=>'');
jest.mock('../src/images/ygt_light.jpg', ()=>'');
jest.mock('../src/images/ygt_dark.jpg', ()=>'');
jest.mock('../src/images/mg_light.jpg', ()=>'');
jest.mock('../src/images/mg_dark.jpg', ()=>'');
jest.mock('../src/images/as_light.jpg', ()=>'');
jest.mock('../src/images/as_dark.jpg', ()=>'');

const intersectionObserverMock = () => ({
    observe: () => null,
    disconnect: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

it('App test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <App />
        </Provider>
        )
    }

    const {container, rerender} = render(<Comp />)
});