import React from "react";
import Section from "../layout/Section";
import InfoBox from "./InfoBox";

const OurJobBoxes = () => {
    return (
        <Section title="Co děláme?" classSelector="our-job">
            <InfoBox
                title="Návrhy"
                description="Pomůžeme Vám s navrhnutím Vaší nové, nebo úpravou již stávající zahrady. Vytvoříme realizační projekt pomocí počítačové simulace."
                icon="flower"
                layout="icon-top"
            />
            <InfoBox
                title="Realizace"
                description="Jsme připraveni zrealizovat sen o Vaší zahradě a přenést ho do reality podle námi připraveného projektu."
                icon="stones"
                layout="icon-top"
            />
            <InfoBox
                title="Údržba zeleně"
                description="Zajistíme odborné řezy okrasných dřevin ve Vaší zahradě, poradíme si s údržbou trávníků, zajistíme údržbu veřejné zeleně."
                icon="spray"
                layout="icon-top"
            />
            <InfoBox
                title="Okrasná jezírka"
                description="Postavíme jezírko které bude biologicky čisté, s možností využití ke koupání, nebo jen pro potěšení, bez používání chemie."
                icon="waterfall"
                layout="icon-top"
            />
            <InfoBox
                title="Trávníky"
                description="Založíme nový trávník nebo zrekonstruujeme starý, nebo poškozený trávník."
                icon="grass"
                layout="icon-top"
            />
            <InfoBox
                title="Kácení stromů"
                description="Zajistíme postupné skácení stromů v těžko přístupných podmínkách, samozřejmostí je odvoz a likvidace bioodpadu."
                icon="tree"
                layout="icon-top"
            />
            <InfoBox
                title="Automatické závlahy"
                description="Zajistíme kompletní dodávku, instalaci a nastavení automatického závlahového systému. Samozřejmostí je i následný servis."
                icon="sprinkler-grass"
                layout="icon-top"
            />
        </Section>
    );
};

export default OurJobBoxes;
