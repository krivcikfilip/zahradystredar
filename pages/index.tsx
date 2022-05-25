import React from "react";
import AppLayout from "../layout/AppLayout";
import Hero from "../layout/Hero";
import { useRouter } from "next/router";
import { routes } from "../routes";
import Section from "../layout/Section";
import InfoBox from "../components/InfoBox";
import GardensGallery from "../components/GardensGallery/GardensGallery";
import OurJobBoxes from "../components/OurJobBoxes";

/**
 * Homepage
 */
const Homepage = () => {
    const router = useRouter();

    return (
        <AppLayout title="Domů" mainClass="home">
            <Hero
                variant="homepage"
                title="Poradíme <br/> si s vaší zahradou"
                description={`Vyrobíme novou zahradu na klíč, zrekonstruujeme již založenou zahradu, založíme nový trávník metodou výsevu nebo instalací trávníkových koberců.`}
                buttons={[
                    { value: "Realizace", onClick: () => router.push(routes.realization) },
                    {
                        value: "Co děláme?",
                        variant: "outline",
                        onClick: () => router.push(routes.ourJob),
                    },
                ]}
            />
            <Section classSelector="features">
                <InfoBox
                    title="Nový trávník"
                    description="Nam porta neque vel lectus dictum"
                    icon="tree-stump"
                />
                <InfoBox
                    title="Zahrada na klíč"
                    description="Nam porta neque vel lectus dictum"
                    icon="tree-stump"
                />
                <InfoBox
                    title="Údržba zahrady"
                    description="Nam porta neque vel lectus dictum"
                    icon="tree-stump"
                />
                <InfoBox
                    title="Spousty dalších.."
                    description="Nam porta neque vel lectus dictum"
                    icon="tree-stump"
                />
            </Section>
            <Section title="Z našich realizací" classSelector="realizations">
                <GardensGallery />
            </Section>
            <OurJobBoxes />
        </AppLayout>
    );
};

export default Homepage;
