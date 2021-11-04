import React, {useEffect, useState} from 'react';
import {NewsCard} from "../Cards/NewsCard/NewsCards";
import Api, {Url} from "../../api/Api";
import {ErrorPropType, PostPropType, UserPostPropType} from "../../types/Post";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { ModalEntry } from "../Modal/Modal.css";
import { FeedWrapper } from "./Feed.css";
import { ModalButtonWrapper } from "../Modal/Modal.css";

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<Array<any>>([]);
    const [showInput, setShowInput] = useState(false);
    const [newPost, setNewPost] = useState<PostPropType>(
        {
            user_id: 1,
            title: "",
            body: ""
        }
    );
    const [inputErrors, setInputErrors] = useState<ErrorPropType>({
        title: "",
        body: ""
    });

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        let postList = await Api.fetch(Url.posts);
        let list = postList.map(async (item: UserPostPropType) => {
            await loadUser(item);
            return await loadComments(item);
        })
        let newsList: Array<any> = await Promise.all(list);
        setPosts(newsList);
    };

    const loadUser = async (item: UserPostPropType) => {
        let username = await Api.fetch(`${Url.user}/${item.userId}`);
        item["username"] = username.username;
        return item;
    }

    const loadComments = async (item: UserPostPropType) => {
        let comments = await Api.fetch(`${Url.posts}/${item.id}/comments`);
        item["comments"] = comments;
        return item;
    }

    const handleInputTitleChange = (evt: any, error: string) => {
        let value = evt.target.value || "", newErrors = {...inputErrors};
        if (!value) {
            newErrors.title = error;
        } else {
            if (newErrors.title !== "") {
                newErrors["title"] = "";
            }
        }
        setInputErrors(newErrors);
        setNewPost((post) => {
            return {
                ...post,
                title: value
            }
        })
    }

    const handleInputBodyChange = (evt: any, error: string) => {
        let value = evt.target.value || "", newErrors = {...inputErrors};

        if (!value) {
            newErrors.body = error;
        } else {
            if (newErrors.body !== "") {
                newErrors.body = "";
            }
        }
        setInputErrors(newErrors);
        setNewPost((post) => {
            return {
                ...post,
                body: value
            }
        })
    }

    const checkValidations = () => {
        let error = {title: "", body: ""}, hasError = false;
        if (newPost.title === "") {
            error["title"] = "Please add a title!";
            hasError = true;
        }
        if (newPost.body === "") {
            error["body"] = "Please add a body!";
            hasError = true;
        }
        if (!hasError) {
            return true;
        }
        setInputErrors(error);
        return false;
    }

    const handlePost = async () => {
        let validation = checkValidations();
        if (!validation) return;

        await Api.post(Url.post, newPost);
        setPosts((posts) => {
            return [
                newPost,
                ...posts,
            ]
        })
        setShowInput(false);
    }

    const addNewPost = () => {
        if (!showInput) return;

        return (
            <Modal title="Add new post" style={{fontSize: '32px'}}>
                <ModalEntry>
                    <input
                        className="input-title"
                        type="text"
                        placeholder="Please add title *"
                        name="title"
                        value={newPost.title}
                        onChange={(evt) => handleInputTitleChange(evt, "Please add a title!")}
                    />
                    {inputErrors.title !== "" && <label className="error">{inputErrors.title}</label>}
                </ModalEntry>
                <ModalEntry>
                    <input
                        className="input-body"
                        type="text"
                        placeholder="Please add body *"
                        name="body"
                        value={newPost.body}
                        onChange={(evt) => handleInputBodyChange(evt, "Please add a body!")}
                    />
                    {inputErrors.body !== "" && <label className="error">{inputErrors.body}</label>}
                </ModalEntry>
                <ModalButtonWrapper>
                    <Link
                        to=""
                        className="modal-button"
                        onClick={(evt) => {
                            evt.preventDefault();
                            setShowInput(false);
                            setNewPost({
                                user_id: 1,
                                title: "",
                                body: ""
                            })
                            setInputErrors({title: "", body: ""});
                        }}
                    >
                        Cancel
                    </Link>
                    <Link
                        to=""
                        className="modal-button"
                        onClick={(evt) => {
                            evt.preventDefault();
                            handlePost();
                        }}
                    >
                        Add
                    </Link>
                </ModalButtonWrapper>
            </Modal>
        );
    }

    const renderPosts = () => {
        return posts.map((post: UserPostPropType, index) => {
            return (
                <NewsCard key={index} title={post.title} body={post.body} username={post.username || ""} userId={post.userId} comments={post.comments || []}/>
            )
        });
    };

    return (
        <FeedWrapper>
            {addNewPost()}
            <button onClick={() => setShowInput(true)}>Add new post</button>
            {posts.length > 0 && renderPosts()}
        </FeedWrapper>
    );
};

export default Feed;
