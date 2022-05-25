import React from "react";
import Section from "../layout/Section";
import InfoBox from "./InfoBox";

const OurJobBoxes = () => {
    return (
        <Section title="Co děláme?" classSelector="our-job">
            <InfoBox
                title="Návrhy"
                description="Pomůžeme Vám s navrhnutím Vaší nové, nebo úpravou již stávající zahrady. Vytvoříme realizační projekt pomocí počítačové simulace."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
            <InfoBox
                title="Realizace"
                description="Jsme připraveni zrealizovat sen o Vaší zahradě a přenést ho do reality podle námi připraveného projektu."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
            <InfoBox
                title="Údržba zeleně"
                description="Zajistíme odborné řezy okrasných dřevin ve Vaší zahradě, poradíme si s údržbou trávníků, zajistíme údržbu veřejné zeleně."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
            <InfoBox
                title="Okrasná jezírka"
                description="Postavíme jezírko které bude biologicky čisté, s možností využití ke koupání, nebo jen pro potěšení, bez používání chemie."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
            <InfoBox
                title="Trávníky"
                description="Založíme nový trávník nebo zrekonstruujeme starý, nebo poškozený trávník."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
            <InfoBox
                title="Kácení stromů"
                description="Zajistíme postupné skácení stromů v těžko přístupných podmínkách, samozřejmostí je odvoz a likvidace bioodpadu."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
            <InfoBox
                title="Automatické závlahy"
                description="Zajistíme kompletní dodávku, instalaci a nastavení automatického závlahového systému. Samozřejmostí je i následný servis."
                icon="tree-stump"
                layout="icon-top"
                size="full-width"
            />
        </Section>
    );
};

export default OurJobBoxes;
