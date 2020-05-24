# LIFE CYCLE

## Notions nécessaires
- décomposition (spread)
- fonction fléchée (arrow function)

## Nouvelles notions
- constructor
- componentDidMount
- componentDidUpdate
- componentWillUnmount


Le cycle de vie n'est valable que pour les classes.

## Codes a tester


### Demontage par condition d'affichage
```
// Component

//La classe parente controle le cycle
class App extends React.Component{
  constructor(props){
    super(props);

    //On utilise le state pour changer les valeurs
    this.state = {unmount : false,...this.props}

    //On crée un compteur pour supprimer le composant au deuxième passage.
    let count = 0;

    //Toutes les 2s, le state est mis a jour
    //Si le compteur est égal a 2, 3eme passage, alors on arrête la boucle
    const int = setInterval(()=>{
      this.setState({
        message : "Goodbye React",
        unmount : count >0 ? true : false
      });
      count++;
      if(count == 2){
        clearInterval(int);
      }
    },2000)
  }

  //L'ensemble du state est passé en props à l'enfant
  //La première fois (unmount : false), l'enfant est monté
  //La seconde fois (unmount : false) l'enfant est mis à jour
  //La troisième fois (unmount : true), alors l'enfant n'est pas rendu donc démonté.

  render(){
    return(!this.state.unmount && <Hello {...this.state}/>)
  }
}

class Hello extends React.Component{

  constructor(props){
    super(props);
    console.log('Class is created');
  }
  render(){
    console.log('Render');
    return (
      <div className="heading" >
        <h1>{this.props.message}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log('Component is mounted');
  }
  componentDidUpdate(){
    console.log('Render is updated');
  }
  componentWillUnmount(){
    console.log('Component is unmounted');
  }
}

// Rendu dans le DOM
ReactDOM.render(<App message = "Hello React" subtitle="Enjoy ! "/>,document.getElementById('root'));

```

### Demontage par ReactDOM.unmountComponentAtNode(container)

```
class Hello extends React.Component{
  constructor(props){
    super(props);
    console.log('Class is created');
    this.state = {
      message : this.props.message,
      subtitle : this.props.subtitle
    }
    this.intervalId = null;
  }
  render(){
    console.log('Render');
    return (
      <div className="heading" >
        <h1>{this.state.message}</h1>
        <p>{this.state.subtitle}</p>
      </div>
    )
  }
  unmountApp(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }
  componentDidMount(){
    console.log('Component is mounted');
    let intervalCount = 0
    this.intervalId = setInterval(()=>{
      console.log('Interval called n°'+intervalCount)
      switch(intervalCount){
        case 0 :
          this.setState({
            message : "Goodbye React"
          });
          break;
        case 1 :
          this.unmountApp();
          break;
        default :
          this.unmountApp();
      }
      intervalCount++;
    },2000)
  }
  componentDidUpdate(){
    console.log('Render is updated');
  }
  componentWillUnmount(){
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
    console.log('Component is unmounted');
  }
}

// Rendu dans le DOM
ReactDOM.render(<Hello message = "Hello React" subtitle="Enjoy ! "/>,document.getElementById('root'));




```
