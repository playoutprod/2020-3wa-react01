import React from 'react';

class App extends React.Component{

  myRef = React.createRef();

  render(){
    return(
      <Router ref={this.myRef} className="app"></Router>
    )
  }

  componentDidMount(){
    console.log(this.myRef)
  }
  componentDidUpdate(){
    console.log(this.myRef)
  }

}
export default App;
