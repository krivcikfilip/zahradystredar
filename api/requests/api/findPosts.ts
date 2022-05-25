import { apiInstance } from "../../index";
import { IPostsResponse } from "../../responses/api/posts";

/**
 * Find posts request
 */
export const findPostsRequest = async () => {
    const { data } = await apiInstance().get<IPostsResponse>(`/posts`);

    return data;
};
