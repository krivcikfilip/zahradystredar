import React from "react";
import ClassName from "../utils/ClassName";

/**
 * Icon component
 */
const Icon = ({ name }: Props) => {
    const className = new ClassName("icon");
    className.addStyleVariant("name", name);

    return (
        <svg className={className.parse()}>
            <use xlinkHref={`/assets/images/sprite.svg#${name}`} />
        </svg>
    );
};

interface Props {
    name: Name;
}

type Name =
    | "tree-stump"
    | "menu"
    | "close"
    | "spray"
    | "tree"
    | "gardener"
    | "sprinkler-grass"
    | "waterfall"
    | "snake-plant"
    | "stones"
    | "grass"
    | "flower";

export type { Name as IconName };
export default Icon;
