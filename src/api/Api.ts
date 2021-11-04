export default class Api {
    public static fetch = async (url: string) => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (exception) {
            return exception;
        }
    };

    public static post = async (url: string, payload: any) => {
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
