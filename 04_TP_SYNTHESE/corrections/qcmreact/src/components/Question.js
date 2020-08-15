import React from 'react';
import Result from './Result.js';
import Form from './Form';

import '../styles/question.css';

export default class Question extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      result:null
    }
  }

  handleChange = (choice) => {
    //Chaque fois que on selectionne un choix, on enreigistre dans le state si c'est la bonne réponse ou pas.
    this.setState({
      result : this.props.datas.qcm[this.props.currentQuestion].response === choice
    })
  }

  handleSubmit = (e) => {
    //Lorsqu'on clique sur le bouton, on passe la question courante ainsi que le state
    e.preventDefault();
    this.props.onSubmit(this.props.currentQuestion,this.state.result);
  }

  no_content = () => {
    //Avant qu'une question soit selectionnée
    return(<span className="alert alert-primary">Aucune question sélectionnée pour l’instant</span>)
  }

  content = () => {
    //Un question a été selectionnée
    const datas = this.props.datas.qcm[this.props.currentQuestion];
    return(
        <React.Fragment>
          <h2>{datas.question}</h2>
          {datas.commandes && <code>{datas.commandes}</code>}
          {this.props.submited ? this.content_after_submit(datas) : this.content_before_submit(datas)}
        </React.Fragment>
    )
  }

  content_before_submit = (datas) => {
    //Contenu d'un question avant submit (Formulaire)
    const choices = {c1:datas.c1,c2:datas.c2}
    return(
      <Form choices={choices} currentQuestion={this.props.currentQuestion} onChange={this.handleChange} onSubmit={this.handleSubmit}/>)
  }


  content_after_submit = (datas) => {
    //Contenu d'un question après submit (affichage du résultat)
    return(
      <Result result={this.state.result} response={datas[datas.response]}/>
    )
  }

  render (){
    return(
      <div className="question">
      {
        this.props.currentQuestion === null ? this.no_content() : this.content()
      }
      </div>
    )
  }

}
