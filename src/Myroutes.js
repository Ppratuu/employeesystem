import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './components/pages/Create'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Rejex from './components/pages/Rejex'
import Signup from './components/pages/Signup'
import UserDetails from './components/pages/userDetails'
import Read from './components/pages/Read'
import Crud from './components/pages/Crud'
import Update from './components/pages/Update'
import Delete from './components/pages/Delete'
import Search from './components/pages/Search'
import Test from './components/pages/Test'
import Dashboard from './components/pages/Dashboard'
import Graphchart from './components/pages/Graphchart'
import Card from './components/pages/Card'
//import Chart from './components/pages/chart'


const Myroutes = () => {
  return (
   <>
   <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/userdetails' element={<UserDetails/>}/>
            <Route path='/rejex' element={<Rejex/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/read' element={<Read/>}/>
            <Route path='/crud' element={<Crud/>}/>
            <Route path='update' element={<Update/>}/>
            <Route path='/delete' element={<Delete/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/graphchart' element={<Graphchart/>}/>
            <Route path='/card' element={<Card/>}/>

        </Routes>
    </BrowserRouter>
    
   </>
  )
}

export default Myroutes