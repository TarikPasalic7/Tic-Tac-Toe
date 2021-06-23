import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

function Board(props) {
  const { squares, onClick } = props;
  const s=[];
     for (let i=0;i<squares.length;i++) {
      s.push(<div className="square" onClick={()=>onClick(i)} key={i}>{squares[i]}</div>)
    }
  return (
    <div className="container2">
      {s}
    </div>
  );
}

export default Board;

 