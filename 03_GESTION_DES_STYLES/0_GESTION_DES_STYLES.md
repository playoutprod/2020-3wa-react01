# GESTION DES STYLES

## Notions nécessaires
- CSS
- Inline
- `${var}`

## Nouvelles notions
- props.children

## Codes a tester

### inline-css

```
const Message = (props) => {
  const myStyle = {
    color: 'green',
    backgroundColor: `#${props.color}`,
  }
  return (
    <div style={myStyle}>Hello World!</div>
  )
}
ReactDOM.render(<Message color="9999FF"/>, document.getElementById('root'));

```

### css classes

```
</script>
<style>
  .message{
    color: green;
    background-color: #9999FF;
  }
</style>
<script type="text/babel">

const Message = (props) => {
  return (
    <div className="message">Hello World!</div>
  )
}
ReactDOM.render(<Message/>, document.getElementById('root'));

```
