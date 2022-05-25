import React from "react";
import GardensGalleryItem from "./GardensGalleryItem";
import { usePosts } from "../../api/queries/usePosts";
import * as _ from "lodash";

const GardensGallery = () => {
    const { posts } = usePosts();

    return (
        <div className="gardens-gallery">
            {_.map(posts, (post) => (
                <GardensGalleryItem key={post.id} {...post} />
            ))}
        </div>
    );
};

export default GardensGallery;
