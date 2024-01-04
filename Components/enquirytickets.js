import React from 'react'
import Flighthotelcard from "./flighthotelcard";

export default function enquirytickets() {
  return (
    <div className=''>
        <h1 className='pl-2 mt-4 mb-6 text-lg font-semibold'>Enquiry Tickets</h1>
        
      <Flighthotelcard ticketNmbr={'36650'} departure={'CCU'} destination={'BOM'} bookingDate={'24 Dec, 22'} deportDate={'24 Dec, 22'} arrival={'24 Dec, 22'} passengers={'2'} hotelBookingNmbr={'000'} city={'Mumbai'} nmbrOfRooms={'2'} hotelBookingDate={'24 Dec, 22'} hotelDeport={'24 dec, 22'} hotelCheckIn={'24 dec, 22'} guest={'2'} />

      <Flighthotelcard ticketNmbr={'36650'} departure={'CCU'} destination={'BOM'} bookingDate={'24 Dec, 22'} deportDate={'24 Dec, 22'} arrival={'24 Dec, 22'} passengers={'2'} hotelBookingNmbr={'000'} city={'Mumbai'} nmbrOfRooms={'2'} hotelBookingDate={'24 Dec, 22'} hotelDeport={'24 dec, 22'} hotelCheckIn={'24 dec, 22'} guest={'2'} />

      <Flighthotelcard ticketNmbr={'36650'} departure={'CCU'} destination={'BOM'} bookingDate={'24 Dec, 22'} deportDate={'24 Dec, 22'} arrival={'24 Dec, 22'} passengers={'2'} hotelBookingNmbr={'000'} city={'Mumbai'} nmbrOfRooms={'2'} hotelBookingDate={'24 Dec, 22'} hotelDeport={'24 dec, 22'} hotelCheckIn={'24 dec, 22'} guest={'2'} />
    </div>
  )
}
