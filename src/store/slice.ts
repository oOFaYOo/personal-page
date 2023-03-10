import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IPortfolioLandingPageState} from "../types";

export const initialState: IPortfolioLandingPageState = {
    theme: localStorage.theme ? localStorage.theme : 'light',
};

export const PortfolioLandingPageStoreSlice = createSlice({
    name: 'PortfolioLandingPageStore',
    initialState,
    reducers: {
        setTheme : (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload
        },
    },
});

export const {
    setTheme
     } = PortfolioLandingPageStoreSlice.actions;

export default PortfolioLandingPageStoreSlice.reducer;