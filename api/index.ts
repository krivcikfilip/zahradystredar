import axios, { AxiosRequestConfig } from "axios";

type ApiType = "facebook" | "api";

/**
 * Axios instance
 * @param type
 */
export const apiInstance = (type: ApiType = "api") => {
    const config: AxiosRequestConfig = {
        baseURL: "/api",
    };

    if (type === "facebook") {
        config.baseURL = "https://graph.facebook.com";
        config.params = {
            access_token: process.env.PAGE_ACCESS_TOKEN,
        };
    }

    return axios.create(config);
};
