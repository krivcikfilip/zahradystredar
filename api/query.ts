import { QueryClient } from "react-query";

/**
 * Query client
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

export const queryKeys = {
    POSTS: "posts",
};
