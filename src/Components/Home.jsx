import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
        <h1>Home</h1>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        <Link to='/posts'>Posts</Link>
    </>
    )
}
