import React from 'react';
import ButtonLink from "./index";
import {render} from "@testing-library/react";

it('ButtonLink test', () => {

    const Comp = () => {
        return (
            <ButtonLink buttonText={''} link={''} className={''} />
        )
    }

    render(<Comp />);
});