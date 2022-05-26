import React from "react";
import ClassName from "../utils/ClassName";
import Text from "../components/Text";
import Button, { ButtonProps } from "../components/Button";
import * as _ from "lodash";
import Image from "../components/Image";
import { When } from "react-if";
import Breadcrumb from "./Breadcrumb";

/**
 * Hero component
 */
const Hero = ({ title, description, variant, buttons = [] }: Props) => {
    const className = new ClassName("hero");
    className.addStyleVariant("variant", variant);

    const renderButtons = () => {
        if (_.size(buttons) === 0) return;

        return (
            <div className="hero__buttons">
                {_.map(buttons, (button, i) => (
                    <Button key={i} {...button} />
                ))}
            </div>
        );
    };

    return (
        <section className={className.parse()}>
            <div className="hero__content">
                <When condition={variant === "page"}>
                    <Breadcrumb />
                </When>
                <Text
                    as="h1"
                    value={title}
                    family="rubik"
                    weight="bold"
                    size="large-title"
                    classSelector="title"
                    underlineLastWorld={variant === "homepage"}
                />
                <Text size="text" value={description} classSelector="description" />
                {renderButtons()}
            </div>
            {variant === "homepage" && (
                <div className="hero__objects">
                    <Image
                        src="/assets/images/3D/can.png"
                        width={600}
                        height={600}
                        alt="Konev"
                        classSelector="can"
                    />
                    <Image
                        src="/assets/images/3D/grass.png"
                        width={400}
                        height={400}
                        alt="Konev"
                        classSelector="grass"
                    />
                    <Image
                        src="/assets/images/objects/circle.svg"
                        width={700}
                        height={700}
                        alt="Kruh"
                        classSelector="circle"
                    />
                </div>
            )}
        </section>
    );
};

interface Props {
    variant: "homepage" | "page";
    title: string;
    description: string;
    buttons?: ButtonProps[];
}

export default Hero;
