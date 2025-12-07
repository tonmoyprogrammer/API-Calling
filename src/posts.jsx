import { use } from "react"
import './App'
import Details from "./post";
export default function Post({post})
{
    const postall = use(post);
    console.log(postall)
    return(
        <div className="post">
            <h1>Post</h1>
            <p>Post length : {postall.length}</p>
            <h3>Details</h3>
            {
                postall.map(post=><Details key ={post.id} detail={post}></Details>)
            }

        </div>
    )
}