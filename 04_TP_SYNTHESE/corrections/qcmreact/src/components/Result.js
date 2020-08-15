import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {

  //Affichage du résultat pour chaque question

  const success = () => {
    return(
      <p className="result success">
        <span className="alert alert-success">Bravo</span>
      </p>
    )
  }

  const fail = () => {
    return(
      <p className="result success">
        <span className="alert alert-danger">Perdu</span><br/>
        <span className="info">La bonne réponse était : {props.response}</span>
      </p>
    )
  }
  return(
    <React.Fragment>
      {props.result ? success() : fail() }
    </React.Fragment>
  )

}

Result.propTypes = {
  result : PropTypes.bool
}

export default Result;
