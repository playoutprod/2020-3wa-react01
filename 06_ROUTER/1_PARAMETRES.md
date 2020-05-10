# ROUTER

## Notions nécessaires

## Nouvelles notions
- useParams

## Codes a tester


```
import React, { Component } from 'react';
import { BrowserRouter, Route,Switch,Link,useParams} from 'react-router-dom';


const posts = [
  { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
  { id: 11, title: "React Native", content: "Mobile React" },
  { id: 100, title: "Angular", content: "Super ..." },
  { id: 7, title: "Symfony", content: "Framework expressif ..." },
  { id: 27, title: "MongoDB", content: "Base de données NoSQL" },
];

const Post = (props) => {
  console.log(props)
  let { postid } = useParams();
  return(
    <div>
      <p>ID : {postid}</p>
    </div>
  )
}

//App component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
        {
            posts.map((post, i) => (<li key={i}><Link to={`/post/${post.id}`}>{post.title}</Link></li> ))
        }
        </ul>
        <Switch>
            <Route path={`/post/:postid`} component={Post} />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
```
