import { useEffect, useState } from "react"
import './App'
import DetailsPlayer from "./detailsPlayer";
export default function Players()
{
    const [player,setPlayer] = useState ([])
    useEffect(()=>
    {
       async function player1()
        {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data  = await res.json();
            setPlayer(data)

        }
        player1();
    },[]);
    return(
        <div className="post">
            <h1>Total Players : {player.length}</h1>
            <ul className="">
                {
                    player.map(player=><DetailsPlayer player={player}></DetailsPlayer>)
                }
            </ul>
        </div>
    )
}