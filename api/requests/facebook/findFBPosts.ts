import { apiInstance } from "../../index";
import { IFBPostsResponse } from "../../responses/facebook/fbPosts";

/**
 * Find facebook posts request
 */
export const findFBPostsRequest = async () => {
    const { data } = await apiInstance("facebook").get<IFBPostsResponse>(
        `/${process.env.PAGE_ID}/posts?fields=full_picture,message,message_tags,attachments{subattachments}`
    );

    return data;
};
