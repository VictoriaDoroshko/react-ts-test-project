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

import React from 'react';
import Card, {CardVariant} from './components/Card';
import UserList from './components/UserList';
import {IUser} from './types/types';

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      address: {city: 'San Francisco', street: 'San Francisco, 1', zipCode: 'CA'}
    },
    {
      id: 2,
      name: 'Alex',
      email: 'alex@example.com',
      address: {city: 'San', street: 'San Francisco, 2', zipCode: 'CB'}
    }
  ]
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
