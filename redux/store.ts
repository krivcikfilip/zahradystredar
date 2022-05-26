import { configureStore } from "@reduxjs/toolkit";
import lightboxReducer from "./reducers/lightboxReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import mobileMenuReducer from "./reducers/mobileMenuReducer";

export const store = configureStore({
    reducer: {
        lightbox: lightboxReducer,
        mobileMenu: mobileMenuReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
