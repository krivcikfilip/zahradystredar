import React from "react";
import NextImage from "next/image";
import { PropsWithClassSelector } from "../types/react";
import ClassName from "../utils/ClassName";

const Image = ({ classSelector, ...props }: Props) => {
    const className = new ClassName("image");
    if (classSelector) className.addSelector(classSelector);

    return (
        <div className={className.parse()}>
            <NextImage {...props} />
        </div>
    );
};

interface Props extends PropsWithClassSelector {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default Image;
