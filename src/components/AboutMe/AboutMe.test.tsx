import React from "react";
import AboutMe from "./index";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";

jest.mock('../../images/photo.jpg', ()=>'');

it('AboutMe test', ()=>{

    const Comp = ()=>{
        return(
            <Provider store={store}>
            <AboutMe />
            </Provider>
        )
    }

    const {container, rerender} = render(<Comp />)
})