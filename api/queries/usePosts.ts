import { useQuery } from "react-query";
import { queryKeys } from "../query";
import { findPostsRequest } from "../requests/api/findPosts";

/**
 * Query hook for posts
 */
export const usePosts = () => {
    const { data, ...props } = useQuery(queryKeys.POSTS, () => findPostsRequest());
    return { posts: data?.posts, ...props };
};
