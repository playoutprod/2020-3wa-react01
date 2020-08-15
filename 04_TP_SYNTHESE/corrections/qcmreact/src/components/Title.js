import React from 'react';
import '../styles/title.scss';

import PropTypes from 'prop-types';


class Title extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        over : false
      }
    }

    handleOver = (e) =>{
      //Mise à jour du state pour le mouseOver/ou
      if(e.type === "mouseover"){
        this.setState({over:true})
      }else{
        this.setState({over:false})
      }
    }

    handleClick = (e) =>{
      //Au click, apelle une fonction parent pour afficher la question
      this.props.clickHandler(this.props.index)
    }

    render(){

      //Attributes par defaut
      const open = this.props.status === 'open';
      const classes = ["list-group-item d-flex justify-content-between align-items-center"];
      const attr = {
        className : classes.join(" "),
        index : this.props.index
      }

      if(open){
        //Si la réponse n'a pas été donnée, l'element est clickable et on gère le over.
        classes.push(this.state.over ? "title__over" : "title__default");
        attr.className = classes.join(" ");
        attr.onClick = this.handleClick;
        attr.onMouseOver = this.handleOver;
        attr.onMouseOut = this.handleOver;
      }

      return(
        <li {...attr}>
          {this.props.title}
            <span className="badge badge-primary badge-pill">{this.props.badge}</span>
        </li>
      );
    }
}

Title.propTypes = {
  title : PropTypes.string.isRequired,
  badge : PropTypes.string
}

Title.defaultProps = {
  title:"title",
  badge : "easy"
}

export default Title;
