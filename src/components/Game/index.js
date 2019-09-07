import React, { useState } from "react";
import "./style.css";
import Box from "../Box/index";

function Game() {
  const [turn, setTurn] = useState("x");

  function changeTurn() {
      setTurn(turn => turn === 'x' ? 'o' : 'x'  )
  }

  return (
    <div id="game">
      <div className="row">
        <Box id={0} currentState={turn} changeTurn={changeTurn} />
        <Box id={1} currentState={turn} changeTurn={changeTurn} />
        <Box id={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box id={3} currentState={turn} changeTurn={changeTurn} />
        <Box id={4} currentState={turn} changeTurn={changeTurn} />
        <Box id={5} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box id={6} currentState={turn} changeTurn={changeTurn} />
        <Box id={7} currentState={turn} changeTurn={changeTurn} />
        <Box id={8} currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  );
}

export default Game;
