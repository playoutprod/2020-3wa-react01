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

Les fonctions composants capturent les valeurs du rendu
Les props des fonctions composants ne peuvent pas changer au cours du temps dans la fonction


## Codes a tester

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

### Function vs Class

[source](https://overreacted.io/fr/how-are-function-components-different-from-classes/)

Le principe est de tester une action en modifiant les props avant l'éxécution
- Cliquer sur follow, changer le nom, analyser le résultat.

```
function ProfilePageFunction(props) {
  const showMessage = () => {
    alert('Vous suivez désormais ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Suivre</button>
  );
}
class ProfilePageClass extends React.Component {
  showMessage = () => {
    alert('Vous suivez désormais ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Suivre</button>;
  }
}
class App extends React.Component {
  state = {
    user: 'Dan',
  };
  render() {
    return (
      <div>
        <label>
          <b>Choose profile to view: </b>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunction user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClass user={this.state.user} />
          <b> (class)</b>
        </p>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
```

### Fonction composant (alert = props)
```
function ProfilePageFunction(props) {
  const showMessage = () => {
    alert('Vous suivez désormais ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Suivre</button>
  );
}
```
### Classe (alert != props)
```
class ProfilePageClass extends React.Component {
  showMessage = () => {
    alert('Vous suivez désormais ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Suivre</button>;
  }
}
```
