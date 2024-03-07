import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    //without usememo this isEven() function was called evenon incrementTwo button click so now useMemo will be called when there is a change in counterOne state
    //useMemo calls a function when dependencies change, and memoizes (remembers) the result of the function between renders.
    const isEven =useMemo(() => {
        console.log("isEven is called");
        let i=0;
        while(i<2000000000) i++
        return counterOne % 2 === 0;
    },[counterOne]) 
  return (
    <div>
        <div>
            <button onClick={()=>incrementOne()}>Count one - {counterOne} </button>
            <span>
                {isEven ? 'Even' : 'Odd'}
            </span> 
        </div>
        <div>
            <button onClick={()=>incrementTwo()}>Count two - {counterTwo} </button>
        </div>
    </div>
  )
}

export default Counter
