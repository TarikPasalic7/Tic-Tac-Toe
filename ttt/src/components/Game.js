
import React, { useState } from "react";
import Board from "./Board";



const Game=({plr1,plr2,update})=> {


  return (
    <div className="container"> 

      <Board  plr1={plr1} update={update} plr2={plr2}/>
     
    </div>
  );
}

export default Game;