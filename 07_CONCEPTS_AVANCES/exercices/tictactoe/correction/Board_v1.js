import React,{useContext,useReducer} from 'react';
import Square from "./Square";
import ThemeContext from '../config/themes.js';

export default (props) => {
  const theme = useContext(ThemeContext);

  const initState = () => ({
    winner : false,
    board :[null,null,null,null,null,null,null,null,null],
    currentPlayer : 'X'
  });

  const updateBoard = (state,action) => {

    switch(action.type){

      case 'update' :

        const board = state.board;
        board[action.payload] = 'X';
        return({board : board});

      case 'reset' :

        return(state);
      default :
        throw new Error;
    }
  }

  const play = (id) =>{
    dispatch({
      type:'update',
      payload:id
    })
  }

  const [state,dispatch] = useReducer(updateBoard,initState())


  console.log(state);

  let id = 0;
  return (
    <div className="gameBoard">
      <header>
        <div className="playerStatus"><span className="playerName">Player One</span><span className="symbol mdl-button--fab mdl-button--colored" style={{backgroundColor:theme.color1}}>X</span></div>
      </header>
      <div className="board-squares">
        {
        state.board.map((line,l) => (
          l%3 === 0 && <div key={l} className="board-row">
            {
              state.board.map((square,s)=> s%3 === 0 && <Square id={id++} handleClick={play} key={s}/>)
            }
          </div>
        ))
        }
      </div>
      <div className="winPopin disabled">
        <div className="message">Congratulations Player 1 ! you've won !!</div>
        <button onClick={()=>{dispatch({type:'reset'})}} className="mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect">Reset</button>
      </div>
    </div>
  );
}
