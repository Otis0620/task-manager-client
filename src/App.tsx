import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import Login from './components/auth/Login';
import PrivateRoute from './routes/PrivateRoute';
import Register from './components/auth/Register';
import TaskBoard from './components/task-board/containers/TaskBoard';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './routes/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/taskboard">
          <TaskBoard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
