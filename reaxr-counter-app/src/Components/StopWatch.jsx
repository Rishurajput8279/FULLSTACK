import React, { useEffect, useState } from "react"

const Stopwatch=()=>{
    const [isRunning,setIsRunning]=useState(
        false
    )
    const [isValid,setisValid]=useState(
        null
    )
    const [time,setTime]=useState(0);
    function handleStartStop(){
        setIsRunning((prev)=>!prev)
    }
    function handleRestart(){
        setTime(0)
        setIsRunning(false)
    }
    useEffect(()=>{
        if(isRunning){
            const id=setInterval(()=>{
                setTime((time)=>(time+1))
            },1000)
            setisValid(id)
        }else{
            if(isValid) clearInterval(isValid)
        }
        return ()=>clearInterval(isValid)
    },[isRunning])
    function timeformate(time){
        const hours=Math.floor(time/3600)
        const mintues=Math.floor((time/3600)/60)
        const seconds=time%60
        return `${hours}:${mintues}:${seconds}`
    }

    return(
        <div>
            <h1>StopWatch App</h1>
            <h1>{timeformate(time)}</h1>
            <button onClick={handleStartStop}><h2>{isRunning?'Stop':'start'}</h2></button>
            <button onClick={handleRestart}><h2>Reset</h2></button>
        </div>
    )
}
export default Stopwatch