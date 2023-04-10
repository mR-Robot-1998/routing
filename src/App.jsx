import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Product from './Components/Product';
import About from './Components/About';
import MainPosts from './Components/MainPosts';
import Posts from './Components/Posts';
import Page404 from './Components/NotFound';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/posts'  element={<Posts/>}/>
      <Route path='/post/:postId'  element={<MainPosts/>}/>
      <Route path='*'  element={<Page404/>}/>

    </Routes>
    </>
    )
}

export default App
