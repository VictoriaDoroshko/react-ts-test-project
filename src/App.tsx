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
import UserList from './components/UserList';
import {IUser} from './types/types';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);

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
    <div>
      <Card 
        // onClick={(num) => console.log('click', num)} 
        variant={CardVariant.primary} 
        width='280px' 
        height='280px'
        >
        <button>Кнопка</button>
        gggg
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
