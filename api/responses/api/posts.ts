// Types for posts response

interface IPostsResponse {
    posts: IPost[];
}

interface IPost {
    id: string;
    preview: string;
    description: string;
    images: IImage[];
}

interface IImage {
    id: string;
    src: string;
    width: number;
    height: number;
}

export type { IPostsResponse, IPost, IImage };
