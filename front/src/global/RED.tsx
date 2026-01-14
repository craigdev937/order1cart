import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { API } from "./API";

export const RED = configureStore({
    reducer: {
        [API.reducerPath]: API.reducer,
    },  // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(API.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;



