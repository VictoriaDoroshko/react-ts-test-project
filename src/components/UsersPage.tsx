import React, {FC, useState, useEffect} from 'react';
import { useHistory } from 'react-router-use-history';
import {IUser} from '../types/types';
import axios from 'axios';
import UserItem from './UserItem';
import List from './List';

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch(e) {
            alert(e)
        }
    }
    return (
        <List items={users}
            renderItem={(user: IUser) => 
            <UserItem 
                onClick={(user) => history.push('/users/' + user.id)} 
                user={user} 
                key={user.id}
            />}
        />
    );
};

export default UsersPage;