# PROPS

## Notions nécessaires
- Class
- function
- this
- setTimeout
- setInterval

## Nouvelles notions
- React.Component
- fonction composant
- super(props)

Les fonctions composants capturent les valeurs du rendu  
Les classes ont une fonction render()  


## Codes a tester


### Super
```
class App extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    console.log(this.props)
  }
}

//VS

class App extends React.Component {
  constructor(props){
    super();
    console.log(this.props)
  }
  render() {
    console.log(this.props)
  }
}

```


### Lecture seule
```
// Component
const Hello = (props) => {
  props.title="Goodbye React";
  return (
    <div className="heading" >
        <h1>{props.message}</h1>
        <p>{props.subtitle}</p>
      </div>
  )
}

// Rendu dans le DOM
ReactDOM.render(
  <Hello message = "Hello React" subtitle="Enjoy ! "/>,
  document.getElementById('root')
);
```
### Passage props par un objet
```
const Hello = (props) => {
  return (
    <div className="heading" >
        <h1>{props.message}</h1>
        <p>{props.subtitle}</p>
      </div>
  )
}

const Message = () =>{

  const attr = {
    message :"Hello React",
    subtitle : "Enjoy ! "
  }

  return(<Hello {...attr}/>)
}

// Rendu dans le DOM
ReactDOM.render(
  <Message/>,
  document.getElementById('root')
);
```
