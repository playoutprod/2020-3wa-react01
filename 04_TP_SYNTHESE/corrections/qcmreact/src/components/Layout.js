import React from 'react';
import '../styles/layout.css';

//Permet d'englober le menu et la question dans une div avec un class layout

export default (props) => {
  return(
    <div className="layout">
    {
      props.children
    }
    </div>
  )
}
