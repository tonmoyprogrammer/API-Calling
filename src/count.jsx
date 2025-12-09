import { useState } from "react"
import './App'

export default function Count()
{
    const [count,setCount] = useState(0)

    function countAdd()
    {
         const addCount = count+1
         setCount(addCount);
    }

    function countLess()
    {
         const lessCount = count-1;
         setCount(lessCount);
    }

    function reset()
    {
        setCount(0);
    }
    function myName(name)
    {
        alert(name);
    }
    return(
        <div className="post">
            <h2>See your Result : {count}</h2>
            <button onClick={countAdd} className="btn">Escalate</button>
            <button onClick={countLess} className="btn">Deduct</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>myName("Tonmoy Chandra Sarker")}>See my name please </button>
        </div>
        
    )

    

}