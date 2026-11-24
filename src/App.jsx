import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'
import Roomdetails from './pages/Roomdetails'
import Saved from './pages/Saved'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
         <Route path="/room/:id" element={<Roomdetails/>} />
        <Route path='/bookings' element={<Saved/>}/>


      </Routes>
      
    </div>
  )
}

export default App
