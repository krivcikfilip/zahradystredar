import React, { useEffect, useState } from "react";
import GardensGalleryItem from "./GardensGalleryItem";
import { usePosts } from "../../api/queries/usePosts";
import { Unless, When } from "react-if";
import ContentLoading from "../ContentLoading";
import ClassName from "../../utils/ClassName";
import * as _ from "lodash";
import { useWindowResize } from "../../hooks/useWindowResize";

const GardensGallery = () => {
    const [limit, setLimit] = useState(15);

    const { posts, isLoading } = usePosts({ limit });

    const { dimension } = useWindowResize();

    useEffect(() => {
        const { width } = dimension;

        if (width < 600 && width > 400) {
            setLimit(10);
        } else if (width <= 400) {
            setLimit(6);
        } else {
            setLimit(15);
        }
    }, [dimension]);

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
