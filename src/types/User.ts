export type UserPropType = {
    name: string,
    user_id: string,
    address:
        {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string,
            }
        }
};
