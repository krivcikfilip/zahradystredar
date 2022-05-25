import React from "react";
import ClassName from "../../utils/ClassName";
import { IPost } from "../../api/responses/api/posts";
import Button from "../Button";
import * as _ from "lodash";
import { useAppDispatch } from "../../store/store";
import { openLightbox } from "../../reducers/lightboxReducer";

const GardensGalleryItem = ({ id, description, preview, images }: IPost) => {
    const dispatch = useAppDispatch();

    const className = new ClassName("gardens-gallery__item");

    const randomWidth = () => {
        return _.random(3, 5) * 100;
    };

    const openGallery = () => {
        const imagesLinks = _.map(images, (image) => image.src);
        dispatch(openLightbox(imagesLinks));
    };

    return (
        <div className={className.parse()} onClick={openGallery}>
            <img width={randomWidth()} src={preview} alt={description} />

            <div className="gardens-gallery__item__more-info">
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
export default GardensGalleryItem;
