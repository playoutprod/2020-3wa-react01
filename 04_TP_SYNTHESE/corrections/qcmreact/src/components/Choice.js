import React from 'react';
import PropTypes from 'prop-types';

 const Choice = (props) => {

  const handleChange = (e) =>{
    //Récupère la valuer selectionnée et la passe au parent
    props.onChange(e.target.value)
  }

  //Props.options : un object avec les keys c1 = value de c1 et c2 = value de c2

  return(
    <React.Fragment>
    {
      Object.keys(props.options).map((keyName,k) => {
        return(
          <div key={k} className="form-check">
            <input onChange={handleChange} className="form-check-input" type="radio" name={`choix_${props.name}`} id={`choix_${props.name}_${k}`} value={keyName}/>
            <label className="form-check-label" htmlFor={`choix_${props.name}`}>{props.options[keyName]}</label>
          </div>
        )
      })
    }
    </React.Fragment>
  )
}

//Vérifiie si props.options est un objet avec  les clés c1 et c2
const customValidator = (props, propName, componentName) => {
    const keys = Object.keys(props[propName]);

    if(keys.filter((k)=>k==='c1').length === 0){
      return new Error("c1 key is missing for props.options");
    }
    if(keys.filter((k)=>k==='c2').length === 0){
      return new Error("c2 key is missing for props.options");
    }

  }

Choice.propTypes={
  options : customValidator,
  name : PropTypes.string
}




export default Choice
