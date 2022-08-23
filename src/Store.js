import { configureStore } from '@reduxjs/toolkit';
import senadoresReducer from './modules/Senadores/redux/senadoresReducer';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        senadoresState: senadoresReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});