import React,{useState} from "react";
const Login =({start})=>{
  const [player1,setPlayer1]=useState("");
  const [player2,setPlayer2]=useState("");

return(

    <div className="logincontainer">
    <form onSubmit={(e)=>start(e,player1,player2)}>
      <div className="input1">
      <label className="lbl1" htmlFor="player1">PLayer 1 </label>
      <input name="player1" placeholder="Payer1" onChange={(e)=>{setPlayer1(e.target.value)}} required />
      </div>
      <div className="input2">
         <label  className="lbl2" htmlFor="player2">PLayer 2</label>
      <input name="player2" onChange={(e)=>{setPlayer2(e.target.value)}}  placeholder="Payer2" required />
      </div>
     

     <button type="submit">start</button>
      
    </form>
  </div>
)

}

export default Login;
