import React, {FC, useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import {useHistory} from 'react-router-use-history';
import axios from 'axios';
import { IUser } from '../types/types';

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch(e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipCode}
            </div>
        </div>
    );
};

export default UserItemPage;