export default function DetailsPlayer({player})
{
    return(
        <div style={{
            padding:"15px",
            border:"2px solid gray",
            borderRadius:"25px",
            backgroundColor:"salmon",
            listStyle:"none",
            margin:"5px 0px"
        }}>
            <li>Player Name : {player.name}</li>
            <h5>User name : {player.username}</h5>
        </div>
    )
}