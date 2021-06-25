import React,{useEffect,useState} from "react";
const Navbar =({plr1,plr2,getplr1})=>{
  const [player1,setPLayer1]=useState(0);

  
    const getplr2 =()=>{
        
        const history=JSON.parse(localStorage.getItem("history"));
        console.log("histr",history);
       let player2won= history.filter((element)=>{
            return element.won===plr2;
        })
         
        return player2won.length;
  
      }

      const tied =()=>{
        const history=JSON.parse(localStorage.getItem("history"));
        let draw= history.filter((element)=>{
             return element.won==="draw";
         })
          
         return draw.length;
   
       }
      

    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <span>{plr1}:{getplr1()}</span>
            <span>{plr2}:{ getplr2()}</span>
            <span>TIES:{tied()}</span>
        </div>
    )
   
   
   }
   
   export default Navbar;