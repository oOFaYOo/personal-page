import {configureStore} from '@reduxjs/toolkit'
import PortfolioLandingPageReducer from './slice'

export const store = configureStore({
    reducer: {
        PortfolioLandingPageStore: PortfolioLandingPageReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
