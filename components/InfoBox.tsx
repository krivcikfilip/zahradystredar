import React from "react";
import ClassName from "../utils/ClassName";
import Icon, { IconName } from "./Icon";
import Typography from "./Typography";

/**
 * InfoBox component
 */
const InfoBox = ({ icon, description, title, size = "small", layout = "icon-left" }: Props) => {
    const className = new ClassName("info-box");
    className.addStyleVariant("size", size);
    className.addStyleVariant("layout", layout);

    return (
        <div className={className.parse()}>
            <Icon name={icon} />
            <Typography
                as="h2"
                size="small-title"
                weight="medium"
                family="rubik"
                value={title}
                classSelector="title"
            />
            <Typography
                size="caption"
                weight="light"
                value={description}
                classSelector="description"
            />
        </div>
    );
};

interface Props {
    size?: "small" | "large";
    layout?: "icon-left" | "icon-top";
    title: string;
    description: string;
    icon: IconName;
}

export default InfoBox;
