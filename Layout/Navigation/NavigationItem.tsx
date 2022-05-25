import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import ClassName from "../../utils/ClassName";
import Link from "next/link";
import Typography from "../../components/Typography";
import { PropsWithClassSelector } from "../../types/react";

/**
 * Item component from navigation
 */
const NavigationItem = ({ href, classSelector, value, children }: ExtendedProps) => {
    const router = useRouter();

    const isActive = router.pathname === href;

    const className = new ClassName("navigation__item");
    if (isActive) className.addStyleVariant("status", "active");
    if (classSelector) className.addSelector(classSelector);

    return (
        <Link href={href}>
            <a className={className.parse()}>
                {value ? <Typography family="rubik" weight="medium" value={value} /> : children}
            </a>
        </Link>
    );
};

interface Props extends PropsWithClassSelector {
    href: string;
}

type ExtendedProps = Props &
    ({ children?: never; value: string } | { children: ReactNode; value?: never });

export default NavigationItem;
