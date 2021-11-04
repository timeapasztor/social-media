import React, { useEffect, useState } from 'react';
import {
    UserCardWrapper,
    UserCardHeader,
    UserCardTitle,
} from './UserCard.css';
import {UserPropType} from "../../../types/User";
import Api, {Url} from "../../../api/Api";
import {PhotoPropType} from "../../../types/Photo";

export const UserCard: React.FC <UserPropType> = ({user_id, name, address}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        loadUserAlbum();
    },[]);

    const loadUserAlbum = async () => {
        let albums = await Api.fetch(`${Url.user}/${user_id}/albums`);
        let albumId;
        if (albums.length > 0) {
            albumId = albums[0].id;
        }
        loadUserPhoto(albumId);
    };

    const loadUserPhoto = async (albumId: number) => {
        let photos = await Api.fetch(`${Url.albums}/${albumId}/photos`);
        let imageList = [];
        if (photos.length > 0) {
            imageList = photos.map((photoObj: PhotoPropType) => {
                return photoObj.thumbnailUrl
            })
        }
        setImages(imageList);
    };

    const renderGallery = () => {
        let helper: JSX.Element[] = [];
        images.forEach((thumbnailUrl: string) => {
            helper.push(
                <img src={thumbnailUrl} alt={thumbnailUrl}/>
            )
        })
        return helper;
    }

    return (
        <UserCardWrapper>
            <UserCardHeader>
                <UserCardTitle>{name}</UserCardTitle>
            </UserCardHeader>
            <div>Street: {address.street}</div>
            <div>Suite: {address.suite}</div>
            <div>City: {address.city}</div>
            <div>Zipcode: {address.zipcode}</div>
            <div>Geo: {`${address.geo.lat},${address.geo.lng}`}</div>
            <div>{images?.length > 0 && renderGallery()}</div>
        </UserCardWrapper>
    );
};
