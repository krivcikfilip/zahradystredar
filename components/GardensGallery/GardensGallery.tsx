import React from "react";
import ClassName from "../../utils/ClassName";
import GardensGalleryItem from "./GardensGalleryItem";
import { usePosts } from "../../api/queries/usePosts";
import * as _ from "lodash";

const GardensGallery = () => {
    const { posts } = usePosts();

    const className = new ClassName("gardens-gallery");

    return (
        <div className={className.parse()}>
            {_.map(posts, (post) => (
                <GardensGalleryItem key={post.id} {...post} />
            ))}
        </div>
    );
};

export default GardensGallery;
