import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface State {
    isOpen: boolean;
    index: number;
    images: string[];
}

const initialState: State = {
    isOpen: false,
    index: 0,
    images: [],
};

export const lightboxSlice = createSlice({
    name: "lightbox",
    initialState,
    reducers: {
        openLightbox: (state, action: PayloadAction<string[]>) => {
            state.index = 0;
            state.isOpen = true;
            state.images = action.payload;
        },
        closeLightbox: () => {
            return initialState;
        },
        setLightboxIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
    },
});

export const { openLightbox, closeLightbox, setLightboxIndex } = lightboxSlice.actions;

export const selectLightbox = (state: AppState) => state.lightbox;

export default lightboxSlice.reducer;
