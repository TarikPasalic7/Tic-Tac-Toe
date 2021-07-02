import React,{useEffect,useState} from "react";
const Navbar =({plr1,plr2,getplr1})=>{
 

  
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
            <h1 className="hdr">Tic Tac Toe</h1>
            <span className="navlbl">{plr1}: {getplr1()} </span>
            <span className="navlbl">{plr2}: { getplr2()} </span>
            <span className="navlbl">TIES: {tied()}</span>
        </div>
    )
   
   
   }
   
   export default Navbar;