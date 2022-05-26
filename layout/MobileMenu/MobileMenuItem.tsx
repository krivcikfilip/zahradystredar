import React from "react";
import Link from "next/link";
import Text from "../../components/Text";
import { PropsWithValue } from "../../types/react";

/**
 * Item for mobile menu
 */
const MobileMenuItem = ({ href, value }: Props) => {
    return (
        <Link href={href}>
            <a className="mobile-menu__item">
                <Text family="rubik" weight="medium" value={value} size="small-title" />
            </a>
        </Link>
    );
};

interface Props extends PropsWithValue {
    href: string;
}

export default MobileMenuItem;
