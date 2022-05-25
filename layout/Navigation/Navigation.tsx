import React from "react";
import Logo from "../../components/Logo";
import NavigationItem from "./NavigationItem";
import { routes } from "../../routes";

/**
 * Navigation component
 */
const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__col">
                <NavigationItem href={routes.home} classSelector="logo">
                    <Logo />
                </NavigationItem>
            </div>
            <div className="navigation__col">
                <NavigationItem href={routes.home} value="Domů" />
                <NavigationItem href={routes.realization} value="Realizace" />
                <NavigationItem href={routes.ourJob} value="Co děláme?" />
                <NavigationItem href={routes.contact} value="Kontakt" />
            </div>
        </nav>
    );
};

export default Navigation;
