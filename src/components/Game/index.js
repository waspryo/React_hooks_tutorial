import React, { useState } from "react";
import "./style.css";
import Box from '../Box/index'

function Game() {

    const [turn, setTurn] = useState('X')

  return (
    <div id="game">
      <div className="row">
        <Box id={0}/>
        <Box id={1}/>
        <Box id={2}/>
      </div>

      <div className="row">
        <Box id={3}/>
        <Box id={4}/>
        <Box id={5}/>
      </div>

      <div className="row">
        <Box id={6}/>
        <Box id={7}/>
        <Box id={8}/>
      </div>
    </div>
  );
}

export default Game;
