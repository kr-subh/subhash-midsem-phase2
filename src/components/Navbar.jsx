import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            Hostel Room Booking...
        </div>

        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/room'>Room</Link>
          <Link to='/bookings'>Your Booking</Link>
        </div>
      
    </div>
  )
}

export default Navbar
