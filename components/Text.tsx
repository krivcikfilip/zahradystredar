import { createElement } from "react";
import { PropsWithClassSelector, PropsWithValue } from "../types/react";
import ClassName from "../utils/ClassName";
import * as _ from "lodash";

/**
 * Text component
 */
const Text = ({
    value,
    as = "p",
    size = "text",
    family = "montserrat",
    weight = "regular",
    classSelector,
    underlineLastWorld = false,
}: Props) => {
    const className = new ClassName(`text`);
    if (classSelector) className.addSelector(classSelector);
    className.addStyleVariant("size", size);
    className.addStyleVariant("family", family);
    className.addStyleVariant("weight", weight);

    const parsedValue = () => {
        if (!underlineLastWorld) return value;

        const words = _.split(value, " ");
        const lastWord = _.last(words);

        words[words.length - 1] = `<span class="underline">${lastWord}</span>`;

        return _.join(words, " ");
    };

    return createElement(as, {
        className: className.parse(),
        dangerouslySetInnerHTML: { __html: parsedValue() },
    });
};

interface Props extends PropsWithValue, PropsWithClassSelector {
    underlineLastWorld?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    size?: "large-title" | "small-title" | "text" | "caption";
    family?: "montserrat" | "rubik";
    weight?: "light" | "regular" | "medium" | "semi" | "bold";
}

export default Text;
