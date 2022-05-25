import React from "react";
import Logo from "./Logo";
import Text from "./Text";
import Link from "next/link";
import { routes } from "../routes";

/**
 * Footer component
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__about-us">
                <Logo />
                <Text
                    value="Vyrobíme novou zahradu na klíč, zrekonstruujeme již založenou zahradu,
                 založíme nový trávník metodou výsevu nebo instalací trávníkových koberců."
                />
            </div>
            <div className="footer__contact">
                <div className="footer__col">
                    <Text value="Radim středa" />
                    <Text value="+420 777 227 768" />
                    <Text value="stredar@seznam.cz" />
                    <Text value="IČO:" />
                </div>
                <div className="footer__col">
                    <Text value="Bohuslavice 405" />
                    <Text value="Bohuslavice nad Metují, 549 06" />
                    <Text value="DIČ: " />
                </div>
            </div>
            <div className="footer__link-tree">
                <Text value="Rozcestník" />
                <Link href={routes.home}>
                    <Text value="Domů" />
                </Link>
                <Link href={routes.realization}>
                    <Text value="Realizace" />
                </Link>
                <Link href={routes.ourJob}>
                    <Text value="Co děláme?" />
                </Link>{" "}
                <Link href={routes.contact}>
                    <Text value="Kontakt" />
                </Link>
            </div>
            <div className="footer__copy">
                <Text value="© All rights reserved Copyrights 2022  |" />
            </div>
        </footer>
    );
};

export default Footer;
