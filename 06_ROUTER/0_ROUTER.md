# ROUTER

## Notions nécessaires
- npm install

## Nouvelles notions
- Router
- Switch
- Route
- Link


## Codes a tester

### [react-router-dom](https://www.npmjs.com/package/react-router-dom)
```
npm install --save react-router-dom
```

### Simple route

```
import React from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

const Home = ()=>{return(<div>Home</div>)};
const Dashboard = ()=>{return(<div>Dashboard</div>)};
const Login = ()=>{return(<div>Login</div>)}
//App component
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
```
