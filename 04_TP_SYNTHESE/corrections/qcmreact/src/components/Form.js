import React from 'react';
import Choice from './Choice';
import PropTypes from 'prop-types';

const Form = (props) => {

  //onchange et onsubmit sont héritées depuis app (à travers le composant Question)

  return(
    <form onSubmit={props.onSubmit}>
      <Choice options={props.choices} name={`c_${props.currentQuestion}`} onChange={props.onChange}/>
      {props.result !== null ? <input type="submit" className="btn btn-primary mb-2" value="Réponse"/> : null}
      </form>
  )
}

Form.propTypes = {
  currentQuestion : PropTypes.number.isRequired,
  onSubmit : PropTypes.func.isRequired,
  onChange : PropTypes.func.isRequired
}

export default Form;
