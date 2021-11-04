import React, {useEffect, useState} from "react";
import { RouteComponentProps } from "react-router-dom";
import Api, {Url} from "../api/Api";
import {UserCard} from "./Cards/UserCard/UserCard";
import {UserPropType} from "../types/User";

const UserProfile: React.FC<RouteComponentProps<{ user_id: string }>> = (props) => {
    const userId = props.match.params.user_id;

    const [user, setUser] = useState<UserPropType>({
        name: "",
        user_id: "",
        address:
            {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: "",
                }
            }
    });

    useEffect(() => {
        loadUserProfile();
    },[]);

    const loadUserProfile = async () => {
        let user = await Api.fetch(`${Url.user}/${userId}`);
        let helper: UserPropType = {
            name: user?.name,
            user_id: user?.id,
            address:
                {
                    street: user?.address?.street || "",
                    suite: user?.address?.suite || "",
                    city: user?.address?.city || "",
                    zipcode: user?.address?.zipcode || "",
                    geo: {
                        lat: user?.address?.geo?.lat || "",
                        lng: user?.address?.geo?.lng || "",
                    }
                }
        }
        await setUser(helper);
    }

    return (
        <div>
            {user.name !== "" && <UserCard name={user.name} user_id={user.user_id} address={user.address}/>}
        </div>
    )

}

export default UserProfile;
