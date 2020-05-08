# FORMULAIRE

## Notions nécessaires
- Form
- Input
- onChange
- onSubmit

## Nouvelles notions


## Codes a tester

```
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    console.log( `New User : ${this.state.value}`);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Username:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Add" />
      </form>
    );
  }
}
ReactDOM.render(<UserForm/>, document.getElementById('root'));
```
