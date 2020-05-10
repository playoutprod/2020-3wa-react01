# HOOKS

## Notions nécessaires


## Nouvelles notions
- UseCallback

## Codes a tester
```
React.useEffect(onUpdateFunction(){return cleanFunction},varArray)
```

```
const triggerFunc = new Set();
const App = (props) => {

  const [count, setCount] = React.useState(1);
  const [pos, setPos] = React.useState(0);

  const incrementCount = () => setCount(count => count + 1);
  const incrementPos = () => setPos(pos => pos + 1);


  triggerFunc.add(incrementCount);
  triggerFunc.add(incrementPos);

  return (
    <div>
      <p> Count : {count} </p>
      <p> Pos : {pos} </p>
      <p>
        <button onClick={incrementCount}>count</button>
      </p>
      <p>
        <button onClick={incrementPos}>pos</button>
      </p>
      <p> Creation de fonction(s) & nouvelles fonctions: {triggerFunc.size} </p>
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));
```
