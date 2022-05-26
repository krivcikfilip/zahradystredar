import React from "react";

/**
 * Icon component
 */
const Icon = ({ name }: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={`/assets/images/sprite.svg#${name}`} />
        </svg>
    );
};

interface Props {
    name: Name;
}

type Name = "tree-stump" | "menu" | "close";

export type { Name as IconName };
export default Icon;
