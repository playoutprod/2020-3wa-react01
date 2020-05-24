# ASYNC STATE & PROPS

## Notions nécessaires


## Nouvelles notions
- React.Fragment
- previousState

## Codes a tester

### Async state, seulement le dernier setState est calculé
```
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={percentage : 0}
  }
  componentDidMount(){
    // 0%
    this.setState({percentage : 0.05});
    // 5% ?
    this.setState({percentage : this.state.percentage + 0.1 });
    // 15% ?
    this.setState({percentage : this.state.percentage + 0.05 });
    // 20% ?
  }
  render(){
    return (
      <React.Fragment>
        <p>Tax : {this.state.percentage} </p>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
```
### Sync state, le state est passé en argument d'une fonction pour récupérer les nouvelles valeurs et retourner un nouveau state.

```
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={percentage : 0}
  }
  componentDidMount(){
    // 0%
    this.setState((previousState, props) => {return({percentage : 0.05})});
    // 5%
    this.setState((previousState, props) => {return({percentage : previousState.percentage + 0.1})});
    // 15%
    this.setState((previousState, props) => {return({percentage : previousState.percentage + 0.05})});
    // 20%
  }
  render(){
    return (
      <React.Fragment>
        <p>Tax : {this.state.percentage} </p>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
```
