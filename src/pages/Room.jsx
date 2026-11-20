import React from 'react'
import rooms from "../data/Data";
import { Link } from 'react-router-dom';

const Room = () => {
  return (
    <div>
      <h1>List of Rooms</h1>

      <ul className='room-list'>
        {rooms.map((rooms) => (
          <li key={rooms.id}>
            <h2>Room.No : {rooms.roomNo}</h2>
            <h4>Tpye : {rooms.type}</h4>
            <p>Capacity: {rooms.capacity}</p>
            <Link to={`/room/${rooms.id}`}>More Details</Link>

          </li>
        ))}

      </ul>
    </div>
  );
};

export default Room;