
import React from 'react';
import Layout from './Layout';
import Menu from './Menu';
import Question from './Question';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component{

  constructor(props){
    super(props);

    /*
    datas contient les données du JSON
    currentQUestion : La question sélectionnée
    submited : True au moment du submit
    end : True si l'utilisateur a répondu a toutes les questions
    */

    this.state = {
      datas:null,
      currentQuestion : null,
      submited : false,
      end:false
    }
  }

  handleSelect = (index) => {
    //Appelée lorsqu'un title est cliqué, récupère l'index de 0 a 5
    this.setState({
      currentQuestion : index,
      submited:false
    })
  }

  handleSubmit = (questionIndex,result) => {
    //Appelée lorsqu'un formulaire de question est envoyé, récupère l'index et le resultat (fail ou success)
    const newDatas = {...this.state.datas};
    //Update du status de la question dans les datas
    newDatas.qcm[questionIndex].status = result ? "success" : "fail";

    const openQuestions = newDatas.qcm.filter(elmt => elmt.status === 'open');
    //Le nombre question ayant un status open est 0 : c'est la fin
    //On met a jour les datas dans le state (pour les nouveaux status des questions)
    if(openQuestions.length === 0){
      this.setState({
        submited:true,
        datas : newDatas,
        end:true
      })
    }else{
      this.setState({
        submited:true,
        datas : newDatas
      })
    }
  }

  showEnd = () => {
    //Affiche l'écran de fin
    //On récupère nombre de questions ayant un status success
    const good = this.state.datas.qcm.filter(elmt => elmt.status === 'success')

    return(
      <div className="jumbotron">
          <h1 className="display-4">Votre résultat</h1>
          <p className="lead">Vous avez bien répondu à {good.length} questions sur {this.state.datas.qcm.length}</p>
        </div>

    )
  }

  showQuestions = () => {
    //Affiche le layout menu | question
    return(
      <Layout>
        <Menu datas={this.state.datas} clickHandler={this.handleSelect}/>
        <Question ref={this.qRef} datas={this.state.datas} currentQuestion={this.state.currentQuestion} submited={this.state.submited} onSubmit={this.handleSubmit}/>
      </Layout>
    )
  }

  render(){
    return(
      <div className="app">
      {
        this.state.end ? this.showEnd() : this.showQuestions()
      }
      </div>
    )
  }



  componentDidMount(){
    //On mount on va chercher les datas
    fetch('/datas/qcm.json')
    .then(resp => {return(resp.json())})
    .then(datas => {
      this.setState({
        datas:datas
      })
    })
  }
}

export default App;
