import React from "react";
import ReactLightbox from "react-image-lightbox";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { closeLightbox, selectLightbox, setLightboxIndex } from "../redux/reducers/lightboxReducer";
import * as _ from "lodash";

const Lightbox = () => {
    const { isOpen, images, index } = useAppSelector(selectLightbox);
    const dispatch = useAppDispatch();

    const imagesSize = _.size(images);

    const prevIndex = index - 1 < 0 ? imagesSize - 1 : index - 1;
    const nextIndex = index + 1 === imagesSize ? 0 : index + 1;

    const onCloseRequest = () => {
        dispatch(closeLightbox());
    };

    const onMovePrevRequest = () => {
        dispatch(setLightboxIndex(prevIndex));
    };

    const onMoveNextRequest = () => {
        dispatch(setLightboxIndex(nextIndex));
    };

    const nextSrc = images[nextIndex];
    const prevSrc = images[prevIndex];

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
