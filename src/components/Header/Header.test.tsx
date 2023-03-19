import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Header from "./index";

it('Header test 1', ()=>{

    Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 390,
    });

    window.dispatchEvent(new Event('resize'));

    expect(window.innerHeight).toBe(390);

    const Comp = ()=>{

        return(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }

    render(<Comp />);

    fireEvent.click( screen.getAllByTestId("DarkModeIcon")[1]);
    fireEvent.click( screen.getAllByTestId("LightModeIcon")[1]);
});

it('Header test 2', ()=>{

    Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 1440,
    });

    window.dispatchEvent(new Event('resize'));

    expect(window.innerHeight).toBe(1440);

    const Comp = ()=>{

        return(
        <Provider store={store}>
             <Header />
        </Provider>
        )
    }

    render(<Comp />);

    fireEvent.click( screen.getByTestId("switch").childNodes[0]);

});