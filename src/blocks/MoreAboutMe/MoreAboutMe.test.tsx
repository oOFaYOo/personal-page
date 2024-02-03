import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import MoreAboutMe from "./index";

jest.mock('./cv_veronika_tseleva.pdf', ()=>'');

it('MoreAboutMe test', ()=>{

    const Comp = ()=>{
        return(
            <Provider store={store}>
            <MoreAboutMe openMoreInfo={()=>{}} />
            </Provider>
        )
    }

    render(<Comp />)

    fireEvent.click( screen.getByTestId("ArrowBackIcon"));
})