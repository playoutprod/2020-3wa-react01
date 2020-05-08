#JSX

##Notions nécessaires
- HTML / XML / DOM
- camleCase
- Map
- Set
- Escape

##Nouvelles notions
- JSX
- map()
- Fragment
- dangerouslySetInnerHTML


##Codes a tester

###XSS that does not work
```
const title = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";
class Xss extends React.Component {
  render() {
    return (
      <h1> Hello {title}!</h1>
    );
  }
}
ReactDOM.render(<Xss/>,document.getElementById('root'));
```

###XSS that work
```
const hack = "javascript:alert('Hacked!');";
class Xss extends React.Component {
  render() {
    return (
      <a href={hack}>My Website</a>
    )
  }
}
ReactDOM.render(<Xss/>,document.getElementById('root'));
```

```
const hack = "<img onerror='alert(\"Hacked!\");' src='invalid-image' />";

class Xss extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{"__html": hack}} />
    );
  }
}

ReactDOM.render(<Xss/>,document.getElementById('root'));
```
