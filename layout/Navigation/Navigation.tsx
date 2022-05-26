import React from "react";
import Logo from "../../components/Logo";
import NavigationItem from "./NavigationItem";
import { routes } from "../../routes";
import Icon from "../../components/Icon";
import { useAppDispatch } from "../../redux/store";
import { openMobileMenu } from "../../redux/reducers/mobileMenuReducer";

/**
 * Navigation component
 */
const Navigation = () => {
    const dispatch = useAppDispatch();

    const openMenu = () => {
        dispatch(openMobileMenu());
    };

    return (
        <nav className="navigation">
            <div className="navigation__col navigation__col--logo">
                <NavigationItem href={routes.home} classSelector="logo">
                    <Logo />
                </NavigationItem>
            </div>
            <div className="navigation__col navigation__col--menu">
                <NavigationItem href={routes.home} value="Domů" />
                <NavigationItem href={routes.realization} value="Realizace" />
                <NavigationItem href={routes.ourJob} value="Co děláme?" />
                <NavigationItem href={routes.contact} value="Kontakt" />
            </div>
            <button className="navigation__mobile-menu-button" onClick={openMenu}>
                <Icon name="menu" />
            </button>
        </nav>
    );
};

export default Navigation;
