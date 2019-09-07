import React, { useState } from "react";
import "./style.css";
import Box from "../Box/index";

function Game() {
  const [turn, setTurn] = useState("x");
  const board = [[], [], []]

  function changeTurn(row, col) {
      board[row][row] = turn
      setTurn(turn => turn === 'x' ? 'o' : 'x'  )
    //   console.log(board)

    checkForWin()
  }

  function checkForWin() {
      // row test
      for(let i=0;i<board.length;i++) {
          const row = board[i]
          if(row[0] === row[1] && row[1] === row[2] && row[0]) {
            return true
          }
      }

      // column test
      for(let i=0;i<board.length;i++) {
          const el1 = board[0][i]
          const el2 = board[1][i]
          const el3 = board[2][i]

          if(el1 === el2 && el2 === el3 && el1) {
              return true
          }
      }
    // diagonal test

    const d1 = board[0][1]
    const d2 = board[0][1]
    const d3 = board[0][1]

    if(d1 === d2 && d2 === d3 && d1) {
        return true
    }
  }

  return (
    <div id="game">
      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  );
}

export default Game;
