import { useState } from "react"
import { Link } from "react-router-dom"
import PostsData from './Datas'
export default function Posts() {
  
    const [posts,setPosts]=useState(PostsData)
  
    return (
    <>
        {posts.map((post)=> (
            <>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <hr/>
            </>
        ))}
    </>
    )
}
