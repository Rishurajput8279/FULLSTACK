import { useEffect, useState } from "react"

const Counter=()=>{
    const [Count,setcount]=useState(0);
    const [Count1,setcount1]=useState(0);
    function handleIncreament(){
        setcount(Count+1)
    }
    function handleDecreament(){
        setcount(Count-1)
    }
    useEffect(()=>{
        setcount1(Count*5)
    })
    return(
        <div>
            <h1>Counter App</h1>
            <h1>Counter:{Count}</h1>
            <h1>Counter1:{Count1}</h1>
            <br />
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecreament}>Decreament</button>
        </div>
    )
}
export default Counter