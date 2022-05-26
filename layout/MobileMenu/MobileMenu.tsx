import React, { useEffect } from "react";
import { When } from "react-if";
import Logo from "../../components/Logo";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeMobileMenu, selectMobileMenu } from "../../redux/reducers/mobileMenuReducer";
import Icon from "../../components/Icon";
import MobileMenuItem from "./MobileMenuItem";
import { routes } from "../../routes";
import { useRouter } from "next/router";

/**
 * Mobile menu component
 */
const MobileMenu = () => {
    const { isOpen } = useAppSelector(selectMobileMenu);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const closeMenu = () => {
        dispatch(closeMobileMenu());
    };

    useEffect(() => {
        dispatch(closeMobileMenu());
    }, [dispatch, router.route]);

    return (
        <When condition={isOpen}>
            <nav className="mobile-menu">
                <div className="mobile-menu__head">
                    <Logo />
                    <button className="mobile-menu__close" onClick={closeMenu}>
                        <Icon name="close" />
                    </button>
                </div>
                <div className="mobile-menu__body">
                    <MobileMenuItem href={routes.home} value="Domů" />
                    <MobileMenuItem href={routes.realization} value="Realizace" />
                    <MobileMenuItem href={routes.ourJob} value="Co děláme?" />
                    <MobileMenuItem href={routes.contact} value="Kontakt" />
                </div>
            </nav>
        </When>
    );
};

export default MobileMenu;
