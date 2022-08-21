import { configureStore } from '@reduxjs/toolkit';
import senadoresReducer from './modules/Senadores/redux/senadoresReducer';

export const store = configureStore({
    reducer: {
        senadoresState: senadoresReducer,
    }
});