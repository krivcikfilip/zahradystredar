import React from "react";
import ReactLightbox from "react-image-lightbox";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { closeLightbox, selectLightbox, setLightboxIndex } from "../redux/reducers/lightboxReducer";

const Lightbox = () => {
    const { isOpen, images, index } = useAppSelector(selectLightbox);
    const dispatch = useAppDispatch();

    const onCloseRequest = () => {
        dispatch(closeLightbox());
    };

    const onMovePrevRequest = () => {
        const newIndex = (index + images.length - 1) % images.length;
        dispatch(setLightboxIndex(newIndex));
    };

    const onMoveNextRequest = () => {
        const newIndex = (index + 1) % images.length;
        dispatch(setLightboxIndex(newIndex));
    };

    const nextSrc = images[(index + 1) % images.length];
    const prevSrc = images[(index + images.length - 1) % images.length];

    if (!isOpen) return <></>;

    return (
        <ReactLightbox
            clickOutsideToClose={true}
            nextSrc={nextSrc}
            prevSrc={prevSrc}
            mainSrc={images[index]}
            onCloseRequest={onCloseRequest}
            onMovePrevRequest={onMovePrevRequest}
            onMoveNextRequest={onMoveNextRequest}
        />
    );
};

export default Lightbox;
