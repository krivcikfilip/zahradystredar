import React from "react";
import ClassName from "../utils/ClassName";
import Icon, { IconName } from "./Icon";
import Text from "./Text";

/**
 * InfoBox component
 */
const InfoBox = ({ icon, description, title, layout = "icon-left" }: Props) => {
    const className = new ClassName("info-box");
    className.addStyleVariant("layout", layout);

    return (
        <div className={className.parse()}>
            <Icon name={icon} />
            <Text
                as="h2"
                size="small-title"
                weight="medium"
                family="rubik"
                value={title}
                classSelector="title"
            />
            <Text size="caption" weight="light" value={description} classSelector="description" />
        </div>
    );
};

interface Props {
    layout?: "icon-left" | "icon-top";
    title: string;
    description: string;
    icon: IconName;
}

export default InfoBox;
