import * as _ from "lodash";

class ClassName {
    constructor(private mainClassName: string, private classNames: string[] = []) {
        this.classNames = _.concat([mainClassName], classNames);
    }

    add = (className: string) => {
        this.classNames.push(className);
    };

    addStyleVariant = (name: string, value: string) => {
        this.classNames.push(`${name}--${value}`);
    };

    addSelector = (selector: string) => {
        this.classNames.push(`${this.mainClassName}--${selector}`);
    };

    parse = () => {
        return this.classNames.join(" ");
    };
}

export default ClassName;
