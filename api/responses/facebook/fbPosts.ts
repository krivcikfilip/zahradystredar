// Types for facebook posts response

interface IFBPostsResponse {
    data: IFBPost[];
    paging: {
        cursors: {
            before: string;
            after: string;
        };
    };
}

interface IFBPost {
    id: string;
    full_picture: string;
    message: string;
    message_tags?: IFBPostMessageTag[];
    attachments?: {
        data: {
            subattachments: {
                data: IFBPostSubAttachment[];
            };
        }[];
    };
}

interface IFBPostMessageTag {
    id: string;
    name: string;
    offset: number;
    length: number;
}

interface IFBPostSubAttachment {
    media: {
        image: {
            height: number;
            src: string;
            width: number;
        };
    };
    target: {
        id: string;
        url: string;
    };
    type: string;
    url: string;
}

export type { IFBPost, IFBPostMessageTag, IFBPostsResponse, IFBPostSubAttachment };
