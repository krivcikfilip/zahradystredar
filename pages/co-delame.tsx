import React from "react";
import AppLayout from "../layout/AppLayout";
import Hero from "../layout/Hero";
import OurJobBoxes from "../components/OurJobBoxes";

/**
 * Our job page
 */
const CoDelame = () => {
    return (
        <AppLayout title="Realizace" mainClass="our-job">
            <Hero
                variant="page"
                title="Co děláme?"
                description="Nabízíme řešení Vaší zahrady od pouhé myšlenky až po finální produkt, který Předáme jako hotové dílo a Vy budete jen sledovat a vyslovovat přání."
            />
            <OurJobBoxes />
        </AppLayout>
    );
};

export default CoDelame;
