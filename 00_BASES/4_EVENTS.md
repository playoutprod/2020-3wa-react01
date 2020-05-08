# LIFE CYCLE

## Notions nécessaires
- onClick
- preventDefault
- Event

## Nouvelles notions
- bind

## Codes a tester

### bouton fonction composant
```
const Action = () => {
  function handleClick(event) {
    event.preventDefault();
    console.log('Stopped !');
  }
  // React render
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

### bouton class

```
class Button extends React.Component{
  constructor(props){
    super(props);
  }
  click(event){
    console.log(event.currentTarget.innerHTML);
  }
  render(){
    return (
      <button name="Hello React" onClick={this.click}>{this.props.title}</button>
    )
  }
}
ReactDOM.render(<Button title="Click me!"/>, document.getElementById('root'));
```

### fonction flechée

```
class Button extends React.Component{
  constructor(props){
    super(props);
    // lié la méthode au this de la classe
    this.click = this.click.bind(this);
  }
  // arrow function
  click = (event) => {
    console.log(this.props);
  }
  render(){
    return (
      <button name="Hello React" onClick={this.click}>Clike Me !</button>
    )
  }
}
ReactDOM.render(<Button title="Click me!"/>, document.getElementById('root'));
```

### bind

```
class Button extends React.Component{
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  click(event){
    console.log(this.props.title);
  }
  render(){
    return (
      <button name="Hello React" onClick={this.click}>{this.props.title}</button>
    )
  }
}
ReactDOM.render(<Button title="Click me!"/>, document.getElementById('root'));
```
