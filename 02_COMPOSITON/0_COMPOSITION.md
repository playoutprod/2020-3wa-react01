# COMPOSITION

## Notions nécessaires


## Nouvelles notions
- props.children

## Codes a tester

```
const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <Widget color="red" >
        <nav>
          <a href="#" >Red sidebar</a>
        </nav>
      </Widget>
      <Widget color="yellow" >
        <nav>
          <a href="#" >Yellow sidebar</a>
        </nav>
      </Widget>
    </aside>
  );
}

const Widget = (props) => {
  return (
    <div className={'sidebar' + props.color} style={{backgroundColor:props.color}}>
      {props.children}
    </div>
  );
}
ReactDOM.render(<Sidebar/>, document.getElementById('root'));
```

```
const Widget = (props) => {
  return (
    <div className={'sidebar' + props.color} style={{backgroundColor:props.color}}>
      This content is {props.color}
    </div>
  );
}

const Split = (props) => {
  return (
    <div className="side">
      <div className="side-left">
        {props.left}
      </div>
      <div className="side-right">
        {props.right}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Split left={<Widget color="red"/>} right={<Widget  color="yellow"/>} />
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));
```

```
const Post = (props) => {
  return (
    <Widget color="yellow">
      <h1 className="title">
        {props.title}
      </h1>
      <p className="content">
        {props.content}
      </p>
    </Widget>
  );
}
const App = () =>{

return (
  <Post title="Hello React" content="React c'est génial !" />
);
```
