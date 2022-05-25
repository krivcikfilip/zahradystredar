import "../scss/main.scss";
import "react-image-lightbox/style.css";

import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../api/query";
import Lightbox from "../components/Lightbox";
import { Provider } from "react-redux";
import { store } from "../redux/store";

/**
 * NextJs app
 */
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />

                <Lightbox />
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
