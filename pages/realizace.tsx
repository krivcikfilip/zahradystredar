import React from "react";
import AppLayout from "../layout/AppLayout";
import Hero from "../layout/Hero";
import Realizations from "../components/Realizations/Realizations";

/**
 * Realization page
 */
const Realizace = () => {
    return (
        <AppLayout title="Realizace" mainClass="realizations">
            <Hero
                variant="page"
                title="Realizace"
                description="Vyrobíme novou zahradu na klíč, zrekonstruujeme již založenou zahradu, založíme nový trávník metodou výsevu nebo instalací trávníkových koberců."
            />
            <Realizations />
        </AppLayout>
    );
};

export default Realizace;
