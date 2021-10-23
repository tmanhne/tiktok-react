import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Effecct_Timer() {
   const [cd, setcd] = useState(10);

   useEffect(() => {
     const timerId =  setInterval(() => {
         setcd(preState => preState - 1);
      }, 1000);
      if(cd ===0 ){
        setInterval(() =>{
            setcd(0)
        }, 1000)
      }
      return () => clearInterval(timerId)
   }, [cd]);

   return (
      <div>
         <h1>Timer countdown: {cd}</h1>
      </div>
   );
}
