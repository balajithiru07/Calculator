import React, { useState } from "react";
import "./calc.css";
function Calc(){
    const [n1 ,setNum1]=useState(0);
    const [n2 ,setNum2]=useState(0);
    const [result ,setResult]=useState(0);
    
    const number1=(e)=>{
        setNum1(Number(e.target.value));
    };
    const number2=(e)=>{
        setNum2(Number(e.target.value));
    };
    const Result=()=>{
        setResult(n1+n2);
    };

    return(
        <div className="calc" >
          
      
            <div className="inner">
            <h1>CALCULATOR</h1>
            <input type="number" className="add1" value={n1} onChange={number1}/><br></br>
            <input type="number" className="add2" value={n2} onChange={number2}></input>
            <button className="add" onClick={Result}>ADD</button>
            <span className="rst">RESULT = {result}</span>
            </div>
        </div>
    );
    
    

}
export default Calc;
