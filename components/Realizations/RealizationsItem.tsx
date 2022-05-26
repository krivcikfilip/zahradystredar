import React from "react";
import { IPost } from "../../api/responses/api/posts";
import Button from "../Button";
import * as _ from "lodash";
import { useAppDispatch } from "../../redux/store";
import { openLightbox } from "../../redux/reducers/lightboxReducer";

/**
 * Item for realizations component
 */
const RealizationsItem = ({ description, preview, images }: IPost) => {
    const dispatch = useAppDispatch();

    const openGallery = () => {
        const imagesLinks = _.map(images, (image) => image.src);
        dispatch(openLightbox(imagesLinks));
    };

    return (
        <div className="realizations__item" onClick={openGallery}>
            <img src={preview} alt={description} />

            <div className="realizations__item__more-info">
                <Button
                    onClick={openGallery}
                    value="Zobrazit více"
                    size="small"
                    color="white"
                    variant="outline"
                />
            </div>
        </div>
    );
};
export default RealizationsItem;
