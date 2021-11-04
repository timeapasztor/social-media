import React, {FC, useState} from 'react';
import {
    NewsCardWrapper,
    NewsCardHeader,
    NewsCardTitle,
    NewsCardDescription
} from './NewsCard.css';
import {Link} from "react-router-dom";
import {NewsCardPropTypes} from "../../../types/Post";
import Modal from "../../Modal/Modal";
import {ModalButtonWrapper, ModalEntry } from "../../Modal/Modal.css";

export const NewsCard: FC<NewsCardPropTypes> = ({
    title,
    body,
    username,
    userId,
    comments
}) => {

    const [showComments, setShowComments] = useState(false);

    const renderComments = () => {
        let list:any = [];

        if (comments.length > 0) {
            comments.forEach((comment, index) => {
                list.push(
                    <ModalEntry key={index}>
                        <li>{comment.email} says:</li>
                        <p>{comment.body}</p>
                    </ModalEntry>
                )
            })
        } else {
            list.push(
                <ModalEntry>
                    <p>No comments for this post yet.</p>
                </ModalEntry>
            )
        }

        return list;
    }

    const renderCommentsModal = () => {
        if (!showComments) return;

        return (
            <Modal title="Comments">
                {renderComments()}
                <ModalButtonWrapper>
                    <Link
                        to=""
                        className="modal-button"
                        onClick={(evt) => {
                            evt.preventDefault();
                            setShowComments(false);
                        }}
                    >
                        Ok
                    </Link>
                </ModalButtonWrapper>
            </Modal>
        )
    }

    return (
        <NewsCardWrapper>
            <NewsCardHeader>
                <NewsCardTitle>{title}</NewsCardTitle>
            </NewsCardHeader>
            <NewsCardDescription>{body}</NewsCardDescription>
            {renderCommentsModal()}
            <NewsCardDescription>
                <span>Author: </span>
                <Link to={`/user_profile/${userId}`}>{username}</Link>
                <div>
                    <Link to="" onClick={(evt: any) => {
                        evt.preventDefault();
                        setShowComments(true);
                    }}>
                        Comments
                    </Link>
                </div>
            </NewsCardDescription>
        </NewsCardWrapper>
    );
};
