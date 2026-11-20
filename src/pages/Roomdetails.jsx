import React from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/Data';

const Roomdetails = () => {
  const { id } = useParams();

  const room = rooms.find((room) => room.id === Number(id));


  return (
    <div className='room-details'>
      <h1>Room Details</h1>

      <h2>Room No: {room.roomNo}</h2>
      <h5>Block : {room.block}</h5>
      <h5>Floor : {room.floor}</h5>
      <p>Type: {room.type}</p>
      <p>Capacity: {room.capacity}</p>
      <p>Price: ₹{room.rentPerMonth}</p>
      <p>Facilities: {room.facilities}</p>
    </div>
  );
};

export default Roomdetails;