import React, { useEffect, useState } from "react";
import RealizationsItem from "./RealizationsItem";
import { usePosts } from "../../api/queries/usePosts";
import { Unless, When } from "react-if";
import ContentLoading from "../ContentLoading";
import * as _ from "lodash";
import { useWindowResize } from "../../hooks/useWindowResize";
import Section from "../../layout/Section";

/**
 * Realizations component
 */
const Realizations = ({ title, allowLimit = false }: Props) => {
    const [limit, setLimit] = useState(15);

    const { posts, isLoading } = usePosts({ limit });

    const { dimension } = useWindowResize();

    useEffect(() => {
        const { width } = dimension;

        if (!allowLimit) return;

        if (width < 600 && width > 400) {
            setLimit(8);
        } else if (width <= 400) {
            setLimit(6);
        } else {
            setLimit(15);
        }
    }, [allowLimit, dimension]);

    return (
        <Section title={title} classSelector="realizations" isLoading={isLoading}>
            <When condition={isLoading}>
                <ContentLoading />
            </When>
            <Unless condition={isLoading}>
                {_.map(posts, (post) => (
                    <RealizationsItem key={post.id} {...post} />
                ))}
            </Unless>
        </Section>
    );
};

interface Props {
    allowLimit?: boolean;
    title?: string;
}

export default Realizations;
