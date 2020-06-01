# TIC TAC TOE


## Notions nécessaires
- hooks perso pour joueurs

## Nouvelles notions
- useReducer

## Codes a tester

### Square Component
```
const Square = (props) => {
  return (
    <div className="square"></div>
  );
}
```

### Player Component
```
const usePlayer = (userName) => {
  const addPlay = (play) =>{
    //Do something
  }
  return([userName,addPlay])
}
```

### Board component
```
const Board = (props) => {
  return (
    <div className="gameBoard">
      <header>
        <div className="playerStatus"><span className="playerName">Player One</span><span className="symbol mdl-button--fab mdl-button--colored">X</span></div>
      </header>
      <div className="board-squares">
          <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
          </div>
          <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
          </div>
          <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
          </div>
      </div>
      <div className="winPopin disabled">
        <div className="message">Congratulations Player 1 ! you've won !!</div>
        <button className="mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect">Reset</button>
      </div>
    </div>
  );
}
```

### Game Component (Main component)
```
const Game = (props) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
```

### index.html
```
<link rel="stylesheet" href="./material.min.css">
<script src="./material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;900&display=swap" rel="stylesheet">

```

### style.css
```
html,body{
  margin:0;
  padding: 0;
  width:100%;
  height:100%;
}
#root{
  width:100%;
  height:100%;
  background-color:rgb(0,188,212);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
}

.game{
  background-color: #EFEFEF;
  box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24);
}

.gameBoard{
  position: relative;
}

.board-row{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
header{
  background-color: rgb(158, 158, 158);
  padding: 1em;
}
header .playerStatus{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.playerStatus .symbol{
  margin:0;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: 100;
}
.playerStatus .playerName{
  text-transform: uppercase;
  font-weight: 500;
}
.board-squares{
  padding: 1em;
}

.mdl-button--raised.mdl-button--colored,
.mdl-button--fab.mdl-button--colored{
  background-color: rgb(0,188,212);
}

.mdl-button--raised.mdl-button--colored:hover{
  background-color: rgb(255, 215, 64);
}
.square{
  width:2em;
  height:2em;
  background-color: rgb(255, 215, 64);
  margin: .5em;
  box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24);
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em
}
.winPopin{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgb(255, 215, 64);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
  pointer-events: all;
}
.winPopin.disabled{
  display: none;
  pointer-events: none;
}
.winPopin.disabled .mdl-button{
  pointer-events: all;
}
.winPopin .message{
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 1.5em;
  text-transform: uppercase;
  font-weight: 900
}

```
