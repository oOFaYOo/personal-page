import React from "react";
import Footer from "./index";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";

it('Footer test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <Footer />
        </Provider>
        )
    }

    const {container, rerender} = render(<Comp />)
})