import React from 'react';
import Title from './Title';

export default (props) => {
  return(
    <ul className="menu">
      {
        props.datas && props.datas.qcm.map(
          (elmt,k) => {
            //Les attributs (props) sont écrites dans une object pour plus de clarté
            const attr = {
              key:k,
              index:k,
              clickHandler:props.clickHandler,
              id:`q_${elmt.id}`,
              title:elmt.title,
              badge:elmt.badge,
              status:elmt.status
            }
            //Il sont ensuites ajoutés au composant grâce à un spread
            return(<Title {...attr}/>)
          }
        )
      }
    </ul>
  )
}
