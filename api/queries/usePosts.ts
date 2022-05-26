import { useQuery } from "react-query";
import { queryKeys } from "../query";
import { findPostsRequest } from "../requests/api/findPosts";
import { ParamsWithLimit } from "../params";

/**
 * Query hook for posts
 */
export const usePosts = (params?: ParamsWithLimit) => {
    const { data, ...props } = useQuery([queryKeys.POSTS, params], () => findPostsRequest(params));
    return { posts: data?.posts, ...props };
};
