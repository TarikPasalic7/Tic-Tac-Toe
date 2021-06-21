
const Login =({start})=>{

return(

    <div className="container">
    <form>
      <div className="input1">
      <label className="lbl1" htmlFor="player1">PLayer 1 </label>
      <input name="player1" placeholder="Payer1" required />
      </div>
      <div className="input2">
         <label  className="lbl2" htmlFor="player2">PLayer 2</label>
      <input name="player2" placeholder="Payer2" required />
      </div>
     

     <button onClick={start} >start</button>
      
    </form>
  </div>
)

}

export default Login;
