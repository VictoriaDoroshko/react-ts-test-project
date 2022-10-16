// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from './components/Card';
// import UserList from './components/UserList';
import {IUser} from './types/types';
import {ITodo} from './types/types';
import axios from 'axios';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import List from './components/List';
import EventExample from './components/EventExample'


const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch(e) {
      alert(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <div>
      <EventExample />
      <Card 
        // onClick={(num) => console.log('click', num)} 
        variant={CardVariant.primary} 
        width='280px' 
        height='280px'
        >
        <button>Кнопка</button>
        gggg
      </Card>
      <List items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
      />
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    </div>
  );
};

export default App;
