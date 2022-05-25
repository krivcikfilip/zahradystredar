import React from "react";
import { PropsWithValue } from "../types/react";
import ClassName from "../utils/ClassName";
import Typography from "./Typography";

/**
 * Button component
 */
const Button = ({ value, variant, color = "primary", size = "medium", onClick }: Props) => {
    const className = new ClassName("button");
    if (variant) className.addStyleVariant("variant", variant);

    className.addStyleVariant("color", color);
    className.addStyleVariant("size", size);

    return (
        <button onClick={onClick} className={className.parse()}>
            <Typography
                family="rubik"
                weight="medium"
                value={value}
                size={size === "medium" ? "text" : "caption"}
            />
        </button>
    );
};

interface Props extends PropsWithValue {
    variant?: "outline";
    size?: "medium" | "small";
    color?: "primary" | "white";
    onClick: () => void;
}

export type { Props as ButtonProps };
export default Button;
