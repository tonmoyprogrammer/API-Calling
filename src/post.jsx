export default function Details({detail})
{
    const {id,userid}=detail;
    console.log(detail);
    return(
        <div style={{
            padding:"7px",
            border:'1px solid blue',
            borderRadius:"20px",
            backgroundColor:"wheat",
            color:"red",
            boxShadow:"2px 2px 2px solid gray",
            margin:"5px 0px"
        }}>
            <p>Id : {id}</p>
            <p>User Id : {userid}</p>

        </div>
    )
}