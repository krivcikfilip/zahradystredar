import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface State {
    isOpen: boolean;
}

const initialState: State = {
    isOpen: false,
};

export const mobileMenuSlice = createSlice({
    name: "mobileMenu",
    initialState,
    reducers: {
        openMobileMenu: (state) => {
            state.isOpen = true;
        },
        closeMobileMenu: () => {
            return initialState;
        },
    },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;

export const selectMobileMenu = (state: AppState) => state.mobileMenu;

export default mobileMenuSlice.reducer;
