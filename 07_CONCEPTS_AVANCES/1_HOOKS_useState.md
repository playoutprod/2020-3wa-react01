# HOOKS

## Notions nécessaires


## Nouvelles notions
- UseState

## Codes a tester


```
const [variable, updateFunction] = React.useState(defaultValue);

```

```
const TestState = (props) =>{

  // Définition du state avec useState 2 paramètres respectivement:
  // 1. Variable pour le state.
  // 2. Fonction qui mettra à jour le state.
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Hello World {count}</p>
      <button onClick={() => setCount(count + 1) } >
      click me
      </button>
    </div>
  );
}
ReactDOM.render(<TestState />,document.getElementById('root'));
```
