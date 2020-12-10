import React from 'react';
import './App.css';
import Login from "./pages/login"
import SignUp from "./pages/signUp"
import Dashboard from "./pages/dashboard"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



function App() {
  return (
    <Router>
        <Switch>
          <Route path="/register" component={SignUp}/>
          <Route path="/login" component={Login} />
          <PrivateRoute  path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route exact path="/" component={Login} />
        </Switch>
    </Router>
  );
}

const  PrivateRoute = ({ children, ...rest }) => {
  const authenticated = localStorage.getItem('authenticated');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
