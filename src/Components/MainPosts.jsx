import { useParams ,Navigate } from "react-router-dom"
import PostsData from "./Datas"
import { useState } from "react"
export default function MainPosts() {
  
    let params=useParams()
    const [posts,setPosts]=useState(PostsData)
    
    let hasPost=posts.some((post) => post.id == params.postId)
    
    console.log(hasPost)
    return (
    <>
    {!hasPost ? (
        <>
        <Navigate to='/'/>
        </>
    ) : (
    <>
    <h3>Main Post :{posts.find((post)=> post.id == params.postId).title} </h3>
    </>
    )

    }
    </>
    
    )
}
