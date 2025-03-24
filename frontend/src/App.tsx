import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Article from './routes/Article'
import Error from './routes/Error'
import IndexPage from './routes/IndexPage'
import Post from './routes/Post'

function App() {

  return (
    <div className='main'> 
       <Navbar/>
       <div className="route-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<IndexPage/>}/>
          <Route path="/blog/:slug" element={<Post/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
       </div>
    </div>
  )
}

export default App
