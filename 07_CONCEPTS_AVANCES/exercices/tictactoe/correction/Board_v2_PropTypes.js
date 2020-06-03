import React,{useReducer} from 'react';
import Square from "./Square";
import usePlayer from "./Player";
import Message from "./Message";

const winPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]

export default (props) => {

  const players = [usePlayer('Player 1','X'),usePlayer('Player 2','O')]

  const initState = () => ({
    winner : null,
    board :[null,null,null,null,null,null,null,null,null],
    currentPlayer : 0
  });

  const getWinner = (board,player)=>{
    const isWinner = winPositions.some(winCombination => (winCombination.every(value =>{return(board[value] === player.symbol)}))
    )
    if(isWinner){
      return(player.name)
    }
    return null;
  }

  const updateBoard = (state,action) => {
    switch(action.type){
      case 'update' :
        const board = state.board;
        board[action.payload] = players[state.currentPlayer].symbol
        const winner = getWinner(board,players[state.currentPlayer]);
        const player = state.currentPlayer === 0 ? 1 : 0;
        return({...state,
          winner : winner,
          board : board,
          currentPlayer : player
        });

      case 'reset' :
        return(initState());
      default :
        throw new Error();
    }
  }

  const [state,dispatch] = useReducer(updateBoard,initState())
  const currentPlayer = players[state.currentPlayer];

  const play = (id) => {
    currentPlayer.addPlay(id);
    dispatch({
      type:'update',
      payload:id
    })
  }

  let id = 0;
  const playsLeft = state.board.filter(value=> value === null).length

  return (
    <div className="gameBoard">
      <header>
        <div className="playerStatus">
          <span className="playerName">{currentPlayer.name}</span>
          <span className="symbol mdl-button--fab mdl-button--colored">{currentPlayer.symbol}</span>
        </div>
      </header>
      <div className="board-squares">
        {
          state.board.map((line,l) => (
            l%3 === 0 && <div id={'line_'+l} key={l} className="board-row">
              {
                state.board.map((square,s)=>{
                  const attr={}
                  if(state.board[id]){
                    attr.symbol=state.board[id]
                  }
                  return(s%3 === 0 && <Square {...attr} id={id++} handleClick={play} key={s}/>)
                })
              }
            </div>
          ))
        }
      </div>
      <div className={"winPopin "+(state.winner === null && playsLeft > 0 ? 'disabled' : '')}>
        <Message winner={state.winner} playsLeft={playsLeft}></Message>
        <button onClick={()=>{dispatch({type:'reset'})}} className="mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect">Reset</button>
      </div>
    </div>
  );
}
