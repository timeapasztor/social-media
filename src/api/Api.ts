export default class Api {

    public static fetchPosts = async () => {
        return await Api.fetch(Url.posts);
    };

    public static fetchUserId = async (userId: any) => {
        return await Api.fetch(`${Url.user}/${userId}`);
    };

    public static fetchAlbums = async (userId: string) => {
        return await Api.fetch(`${Url.user}/${userId}/albums`);
    };

    public static fetchPhotos = async (albumId: number) => {
        return await Api.fetch(`${Url.albums}/${albumId}/photos`)
    };

    public static fetchComments = async (userId: number) => {
        return await Api.fetch(`${Url.posts}/${userId}/comments`);
    };

    public static postPosts = async (url: string, payload: any) => {
        return await Api.post(url, payload);
    }

    private static fetch = async (url: string) => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (exception) {
            return exception;
        }
    };

    private static post = async (url: string, payload: any) => {
        try {
            let response = await fetch(url, {
                method: "post",
                mode: "cors",
                body: payload
            });
            return await response.json();
        } catch (exception) {
            return exception;
        }
    }
}

export const Url = {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    user: 'https://jsonplaceholder.typicode.com/users',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    photos: 'https://jsonplaceholder.typicode.com/albums/album_id/photos',
    post: 'https://jsonplaceholder.typicode.com/posts'
};
