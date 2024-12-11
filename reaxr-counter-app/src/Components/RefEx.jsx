import React from "react";
const RefEx=()=>{
    const count=useRef(0);
    function Increament(){
        count++
        console.log("refcount="+count)
    }
    return (
        <div>
            <h1>Ref Counter:{count}</h1>
            <button onClick={Increament}>Increament</button>
        </div>
    )
}
export default RefEx