import type { NextApiRequest, NextApiResponse } from "next";
import { findFBPostsRequest } from "../../api/requests/facebook/findFBPosts";
import * as _ from "lodash";
import { IFBPost, IFBPostSubAttachment } from "../../api/responses/facebook/fbPosts";
import { IImage, IPost } from "../../api/responses/api/posts";
import { ParamsWithLimit } from "../../api/params";

/**
 * Api for posts
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") return res.status(405);

    const params = req.query as ParamsWithLimit;

    const { data } = await findFBPostsRequest();

    const checkIsPostAllowed = (post: IFBPost): boolean => {
        return _.some(post?.message_tags, (tag) => tag.name === "#realizace");
    };

    const extractAttachments = (post: IFBPost): IFBPostSubAttachment[] => {
        const attachments = _.first(post?.attachments.data);
        return attachments?.subattachments.data || [];
    };

    const posts = _.reduce(
        data,
        (acc, post) => {
            if (!checkIsPostAllowed(post)) return acc;

            const attachments = extractAttachments(post);

            const images: IImage[] = _.map(attachments, ({ target, media }) => ({
                id: target.id,
                src: media.image.src,
                width: media.image.width,
                height: media.image.height,
            }));

            return _.concat(acc, {
                id: post.id,
                description: post.message,
                preview: post.full_picture,
                images,
            });
        },
        [] as IPost[]
    );

    return res.status(200).json({ posts: posts.slice(0, params.limit || 50) });
};
