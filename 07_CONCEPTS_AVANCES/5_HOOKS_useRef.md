# HOOKS

## Notions nécessaires

## Nouvelles notions
- useRef


## Codes a tester


### stateless component
```
const InputText = () => {

  const inputEl = React.useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <React.Fragment>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Donner le focus au champ</button>
    </React.Fragment>
  );
}
ReactDOM.render(<InputText/>, document.getElementById('root'));
```

### Class

```
class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }
  onButtonClick = () => {
    this.inputEl.current.focus();
  };
  render() {
    return (
      <React.Fragment>
        <input ref={this.inputEl} type="text" />
        <button onClick={this.onButtonClick}>Donner le focus au champ</button>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<InputText/>, document.getElementById('root'));
```
