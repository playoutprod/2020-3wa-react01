# REDUX

## Notions nécessaires

## Nouvelles notions
- Action

## Codes a tester

### dans `index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```


### Dans `store.js`
```
import { createStore } from 'redux';
import questionsReducer from './reducers';

//Creation du store
let store = createStore(questionsReducer);

// A importer dans index.js
export default store;
```

### Dans `reducers.js`
```
// Définition de la source de vérité
let stateInit = {count : 0,questions : []}

// Définition du Reducer
let questionsReducer = (state = stateInit, action = {}) => {
  // gestion des actions du Reducer
  switch(action.type){
    case 'ADD_QUESTION':
      let questions = {
          questions : [ ...state.questions, action.question],
          count : state.count + 1
      };
      // Attention il ne faut pas faire muter vos objets, vous devez retourner
      // une copie du state modifié :
      return { ...state, ...questions };
      // Si aucun changement de state
    default:
      return state;
  }
}
export default questionsReducer;
```

### Dans `actions.js`

```
export const add_question = (question){
  type : 'ADD_QUESTION',
  question : question
}
```

### Dans `app.js`

```
import React,{useEffect} from 'react';
//Importer connect
import { connect } from "react-redux";
//Importer les actions necessaires
import {add_question} from "./actions";

//Créer un objet pour transmettre le state du store en props
const mapStateToProps = (state) => {
  return({
    questions : state.questions
  })
}

//Créer un objet pour transmettre les dispatchs en props
const mapDispatchToProps = (dispatch) => {
  return({
    add_question : (payload) => dispatch(add_question(payload))
  })
}

const App = (props,dispatch) =>{
  useEffect(() =>{
    //Grâce à la connection on accède au dispatch a travers les props
    props.add_question("Comment compiler React ?");
  },[])
  //Grâce à la connection on accède aux questions (dans le state) a travers les props
  return(
    <div>
    {
      props.questions.map( (question,key) => (<p key={key}>{question}</p>))
    }
    </div>
  )
}

//On exporte notre composant connecté
const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);

export default ConnectedApp;
```
