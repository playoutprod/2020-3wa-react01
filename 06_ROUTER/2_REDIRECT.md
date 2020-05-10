# ROUTER

## Notions nécessaires

## Nouvelles notions
- Redirect


## Codes a tester

```
import React, { Component } from 'react';
import { BrowserRouter, Route,Switch,Redirect,Link } from 'react-router-dom';

//islogin function
const isLogin = () => {
  //Change the result here to allow access
  return(false)
}

//Private route component
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />

            : <Redirect to={{pathname:"/signin",state: 'Please sign in'}} />
        )} />
    );
};

//Dashboard component
const Dashboard = (props) => {
  return(<div>Ici le dashboard</div>)
}

//Sign in component
const SignIn = (props) => {
  return(<div>Ici le signin ({props.location.state})</div>)
}

//App component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/signin">Sign in</Link></li>
        </ul>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route exact path="/signin" component={SignIn}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
```
