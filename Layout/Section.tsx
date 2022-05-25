import React from "react";
import { PropsWithChildren, PropsWithClassSelector } from "../types/react";
import ClassName from "../utils/ClassName";
import Typography from "../components/Typography";

/**
 * Section with title component
 */
const Section = ({ title, classSelector, children }: Props) => {
    const className = new ClassName("section");
    if (classSelector) className.addSelector(classSelector);

    return (
        <section className={className.parse()}>
            {title && (
                <div className="section__head">
                    <Typography
                        size="large-title"
                        weight="bold"
                        family="rubik"
                        value={title}
                        underlineLastWorld
                    />
                </div>
            )}
            <div className="section__body">{children}</div>
        </section>
    );
};

interface Props extends PropsWithClassSelector, PropsWithChildren {
    title?: string;
}

export default Section;
