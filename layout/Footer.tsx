import React from "react";
import Logo from "../components/Logo";
import Text from "../components/Text";
import Link from "next/link";
import { routes } from "../routes";
import Image from "../components/Image";

/**
 * Footer component
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__objects">
                <Image
                    src="/assets/images/objects/circle.svg"
                    width={700}
                    height={700}
                    alt="Kruh"
                    classSelector="circle-1"
                />
                <Image
                    src="/assets/images/objects/circle.svg"
                    width={220}
                    height={220}
                    alt="Kruh"
                    classSelector="circle-2"
                />
                <Image
                    src="/assets/images/objects/circle.svg"
                    width={100}
                    height={100}
                    alt="Kruh"
                    classSelector="circle-3"
                />
            </div>
            <div className="footer__about-us">
                <Logo />
                <Text
                    value="Vyrobíme novou zahradu na klíč, zrekonstruujeme již založenou zahradu,
                 založíme nový trávník metodou výsevu nebo instalací trávníkových koberců."
                />
            </div>
            <div className="footer__contact">
                <Text
                    value="Radim Středa"
                    size="small-title"
                    weight="medium"
                    family="rubik"
                    classSelector="title"
                />
                <div className="footer__col">
                    <Text value="+420 777 227 768" />
                    <Text value="stredar@seznam.cz" />
                    <Text value="<strong>IČO:</strong> 60895136" />
                </div>
                <div className="footer__col">
                    <Text value="Bohuslavice 405" />
                    <Text value="Bohuslavice nad Metují, 549 06" />
                </div>
            </div>
            <div className="footer__link-tree">
                <Text
                    value="Rozcestník"
                    as="h3"
                    size="small-title"
                    weight="medium"
                    family="rubik"
                    classSelector="title"
                />
                <Link href={routes.home}>
                    <a>
                        <Text value="Domů" />
                    </a>
                </Link>
                <Link href={routes.realization}>
                    <a>
                        <Text value="Realizace" />
                    </a>
                </Link>
                <Link href={routes.ourJob}>
                    <a>
                        <Text value="Co děláme?" />
                    </a>
                </Link>
                <Link href={routes.contact}>
                    <a>
                        <Text value="Kontakt" />
                    </a>
                </Link>
            </div>
            <div className="footer__tree">
                <Image
                    src="/assets/images/3D/tree.png"
                    width={1050}
                    height={900}
                    alt="Strom"
                    classSelector="tree"
                />
            </div>
            <div className="footer__copy">
                <Text value="Osoba zapsaná v živnostenském rejstříku | " as="span" />
                <Text value="Vytvořil " as="span" />
                <Link href="https://www.filipkrivcik.cz/">
                    <a target="_blank">
                        <Text value="Filip Krivčík" as="span" weight="medium" family="rubik" />
                    </a>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
