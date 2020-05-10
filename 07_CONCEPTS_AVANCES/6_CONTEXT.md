# CONTEXT

## Notions nécessaires

## Nouvelles notions
- createContext
- Provider


## Codes a tester

```
import React,{useContext} from 'react';

const MyContext = React.createContext({ value : '' });

const new_value = { value : "Hello Contexte" } ;

const A = () => (
    <MyContext.Consumer>
      { ({value}) => {
        return((<p>{value}</p>))
      }}
    </MyContext.Consumer>
)


const UserContext = React.createContext({ctx_key:"ctx_value"});

const B = () => {
  const context = useContext(MyContext);

  return(<p>{context.value}</p>)
}

const App = (props) =>{
  return(
    <MyContext.Provider value={new_value}>
      <A/>
      <B/>
    </MyContext.Provider>
  )
}

export default App;

```
