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
import {BrowserRouter, NavLink, Route} from'react-router-dom';
// import axios from 'axios';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Пользователи</NavLink>
          <NavLink to='/todos'>Список дел</NavLink>
        </div>
        <Route path={'/users'} exact>
            <UsersPage/>
        </Route>
        <Route path={'/todos'} exact>
            <TodosPage/>
        </Route>
        <Route path={'/user/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todo/:id'}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;