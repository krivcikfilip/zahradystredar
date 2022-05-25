import React from "react";
import GardensGalleryItem from "./GardensGalleryItem";
import { usePosts } from "../../api/queries/usePosts";
import * as _ from "lodash";
import { Unless, When } from "react-if";
import ContentLoading from "../ContentLoading";
import ClassName from "../../utils/ClassName";

const GardensGallery = () => {
    const { posts, isLoading } = usePosts();

    const className = new ClassName("gardens-gallery");
    if (isLoading) className.add("loading");

    return (
        <div className={className.parse()}>
            <When condition={isLoading}>
                <ContentLoading />
            </When>
            <Unless condition={isLoading}>
                {_.map(posts, (post) => (
                    <GardensGalleryItem key={post.id} {...post} />
                ))}
            </Unless>
        </div>
    );
};

export default GardensGallery;
