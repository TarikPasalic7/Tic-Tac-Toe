const Board =()=>{
    

    const squares = [];
  
    for (let i=0;i<9;i++) {
      squares.push(<div className="square" key={i}>X</div>)
    }

    return(
        <div className="container">
            <div className="container2"> 
            {squares}
            </div>
           
          
        
        </div>
    )
   
   
   }
   
   export default Board;