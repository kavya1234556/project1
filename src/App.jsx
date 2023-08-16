import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/header'
import {Routes, Route} from "react-router-dom";
import Home from './pages/home'
import Blog from './pages/blog'
import Work from './pages/works'
import Contact from './pages/contact'
import Workdetail from './pages/works/work_detail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/works' element={<Work/>}/>
        <Route  path = '/blogs' element = {<Blog/>}/>
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/works/:id' element={<Workdetail/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
