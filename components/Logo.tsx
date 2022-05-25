import React from "react";
import Image from "next/image";

/**
 * Logo component
 */
const Logo = () => {
    return (
        <span className="logo">
            <Image
                src="/assets/images/logo/logo-with-text.svg"
                width={240}
                height={50}
                alt="Zahrady Středar"
            />
        </span>
    );
};

export default Logo;
