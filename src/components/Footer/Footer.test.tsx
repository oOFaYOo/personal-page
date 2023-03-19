import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Footer from "./index";

it('Footer test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <Footer />
        </Provider>
        )
    }

    render(<Comp />)
})