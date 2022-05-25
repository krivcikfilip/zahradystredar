import React from "react";
import ClassName from "../utils/ClassName";

/**
 * Icon component
 */
const Icon = ({ name }: Props) => {
    const className = new ClassName("icon");

    return (
        <svg className={className.parse()}>
            <use xlinkHref={`/assets/images/sprite.svg#${name}`} />
        </svg>
    );
};

interface Props {
    name: Name;
}

type Name = "tree-stump";

export type { Name as IconName };
export default Icon;
