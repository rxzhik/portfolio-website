import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Thoughts from './routes/Thoughts'
import { Contact } from './routes/Contact'
import About from './routes/About'
import Article from './routes/Article'
import Error from './routes/Error'

function App() {

  return (
    <> 
       <Navbar/>
       <div className="route-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/thoughts" element={<Thoughts/>}/>
          <Route path="/thoughts/:title" element={<Article/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
       </div>
    </>
  )
}

export default App
