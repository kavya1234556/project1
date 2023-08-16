import { useState } from 'react';
// import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Home from './pages/home';
import Work from './pages/works';
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
