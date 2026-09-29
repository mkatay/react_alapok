import { Button } from '@heroui/react';
import React from 'react'
import { useState } from 'react';

import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MyImage } from './MyImage';


export const Counter = () => {
    const [counter,setCounter]=useState(0)

    console.log(counter);
    

    const h2Style={
        textAlign:"center",
        color:"blue"
    }

    const btnMinusStyle={
        opacity:counter<-5 ? 0.4 : 1,
        cursor:counter<=-5 ? 'not-allowed' : 'pointer',
        background:'transparent'
    
    }
    //önálló feladat: reset button
    //önálló: ha a counter pozitív legyen zöld betűszín, ha negatív legyen piros
  return (
    <div>
      <h2 style={h2Style}>My Counter component</h2>

      <div className="counter">
        <button onClick={()=>setCounter(prev=>prev-1)} disabled={counter<=-5} style={btnMinusStyle}>
            <CiCircleMinus size={48} color="#431cceff"/>
        </button>
    
        <div className="nr">{counter}</div>

        <button onClick={()=>setCounter(prev=>prev+1)} disabled={counter>=5}>
            <CiCirclePlus size={48} color="#431cceff"/>
        </button>
        <Button onClick={()=>setCounter(0)}>reset</Button>
      </div>
      {counter>0 && <MyImage counter={counter} maiNap='szerda'/>}
      
    </div>
  )
}

