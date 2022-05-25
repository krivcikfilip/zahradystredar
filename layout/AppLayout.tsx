import React, { Fragment } from "react";
import { PropsWithChildren } from "../types/react";
import NextHead from "next/head";
import Navigation from "./Navigation/Navigation";
import ClassName from "../utils/ClassName";

/**
 * App layout component
 */
const AppLayout = ({ children, title, mainClass }: Props) => {
    const className = new ClassName("app-layout", [mainClass]);

    return (
        <Fragment>
            <NextHead>
                <title>Zahrady Středar | {title}</title>
            </NextHead>
            <div className={className.parse()}>
                <Navigation />
                {children}
            </div>
        </Fragment>
    );
};

interface Props extends PropsWithChildren {
    title: string;
    mainClass: string;
}

export default AppLayout;
