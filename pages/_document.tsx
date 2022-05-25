import React from "react";
import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

/**
 * NextJs document
 */
const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Rubik:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" />
            </body>
        </Html>
    );
};

export default Document;
