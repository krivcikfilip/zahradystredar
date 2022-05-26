import React from "react";
import AppLayout from "../layout/AppLayout";
import Hero from "../layout/Hero";
import Section from "../layout/Section";
import Text from "../components/Text";

/**
 * Contact page
 */
const Kontakt = () => {
    return (
        <AppLayout title="Kontakt" mainClass="contact">
            <Hero variant="page" title="Kontakt" description="" />
            <Section classSelector="contact">
                <Text value="Radim Středa" size="small-title" classSelector="name" />
                <Text value="<strong>Tel:</strong> +420 777 227 768" />
                <Text value="<strong>Email:</strong> stredar@seznam.cz" />
                <Text value="<strong>Adresa:</strong> Bohuslavice 405" />
                <Text value="<strong>Obec:</strong> Bohuslavice nad Metují, 549 06" />
                <Text value="<strong>IČO:</strong> 60895136" />
            </Section>
        </AppLayout>
    );
};

export default Kontakt;
