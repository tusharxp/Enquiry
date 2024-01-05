import React from "react";
import Flighthotelcard from "./flighthotelcard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function enquirytickets() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 lg:from-white lg:to-white">
      <span className="flex mt-4 mb-6">
      <ChevronLeftIcon className="flex w-5 h-6 text-black md:hidden" />
      <h1 className="pl-2 text-lg font-bold tracking-wide ">Enquiry Tickets</h1>
      </span>
      
      <div className="items-center p-4 bg-white rounded-t-3xl md:p-0">
      <Flighthotelcard
        ticketNmbr={"36650"}
        departure={"CCU"}
        destination={"BOM"}
        bookingDate={"24 Dec, 22"}
        deportDate={"24 Dec, 22"}
        arrival={"24 Dec, 22"}
        passengers={"2"}
        hotelBookingNmbr={"000"}
        city={"Mumbai"}
        nmbrOfRooms={"2"}
        hotelBookingDate={"24 Dec, 22"}
        hotelDeport={"24 dec, 22"}
        hotelCheckIn={"24 dec, 22"}
        guest={"2"}
      />

      <Flighthotelcard
        ticketNmbr={"36650"}
        departure={"CCU"}
        destination={"BOM"}
        bookingDate={"24 Dec, 22"}
        deportDate={"24 Dec, 22"}
        arrival={"24 Dec, 22"}
        passengers={"2"}
        hotelBookingNmbr={"000"}
        city={"Mumbai"}
        nmbrOfRooms={"2"}
        hotelBookingDate={"24 Dec, 22"}
        hotelDeport={"24 dec, 22"}
        hotelCheckIn={"24 dec, 22"}
        guest={"2"}
      />

      <Flighthotelcard
        ticketNmbr={"36650"}
        departure={"CCU"}
        destination={"BOM"}
        bookingDate={"24 Dec, 22"}
        deportDate={"24 Dec, 22"}
        arrival={"24 Dec, 22"}
        passengers={"2"}
        hotelBookingNmbr={"000"}
        city={"Mumbai"}
        nmbrOfRooms={"2"}
        hotelBookingDate={"24 Dec, 22"}
        hotelDeport={"24 dec, 22"}
        hotelCheckIn={"24 dec, 22"}
        guest={"2"}
      />
      </div>
    </div>
  );
}
