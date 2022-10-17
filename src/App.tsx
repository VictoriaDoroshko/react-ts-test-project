import React from 'react';
import {BrowserRouter, NavLink} from'react-router-dom';
import {Route} from 'react-router'

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