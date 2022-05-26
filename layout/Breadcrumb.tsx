import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../routes";
import Text from "../components/Text";

/**
 * Breadcrumb component
 */
const Breadcrumb = () => {
    const router = useRouter();

    const getPath = () => {
        switch (router.route) {
            case routes.realization: {
                return "Realizace";
            }
            case routes.ourJob: {
                return "Co děláme?";
            }
            case routes.contact: {
                return "Kontakt";
            }
            default: {
                throw new Error("Invalid path");
            }
        }
    };

    return (
        <div className="breadcrumb">
            <Link href={routes.home}>
                <a>
                    <Text value="Domů" family="rubik" weight="medium" />
                </a>
            </Link>
            <Text value={getPath()} family="rubik" weight="medium" />
        </div>
    );
};

export default Breadcrumb;
