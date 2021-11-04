export type UserPostPropType = {
    userId: any;
    id: number;
    username?: "";
    comments?: "";
    title: string;
    body: string;
}

export type PostPropType = {
    userId: any;
    title: string;
    body: string;
}

export type ErrorPropType = {
    title: string;
    body: string;
}

export type CommentPropType = {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
}

export type NewsCardPropTypes = {
    title: string,
    body: string,
    username: string,
    userId: number,
    comments: CommentPropType[]
};
