import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import AboutMe from "./index";

jest.mock('../../images/photo.jpg', ()=>'');

it('AboutMe test', ()=>{

    const Comp = ()=>{
        return(
            <Provider store={store}>
            <AboutMe />
            </Provider>
        )
    }

    render(<Comp />)
})