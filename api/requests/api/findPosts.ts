import { apiInstance } from "../../index";
import { IPostsResponse } from "../../responses/api/posts";
import { createSearchParams } from "../../../utils";
import { ParamsWithLimit } from "../../params";

/**
 * Find posts request
 */
export const findPostsRequest = async (params?: ParamsWithLimit) => {
    const { data } = await apiInstance().get<IPostsResponse>(`/posts${createSearchParams(params)}`);

    return data;
};
