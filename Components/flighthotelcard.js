import React from "react";
import {
  ArrowLongRightIcon,
  BeakerIcon,
  BuildingOffice2Icon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function flighthotelcard(props) {
  const {ticketNmbr, departure, destination, bookingDate, deportDate, arrival, passengers, hotelBookingNmbr, city, nmbrOfRooms, hotelBookingDate, hotelCheckIn, hotelDeport, guest } = props;

  return (
    <div className="flex flex-wrap my-2">
      {/* Flight */}
      <div className="items-center p-2 m-2 border-2 border-red-100 rounded-md w-80 lg:w-96 bg-red-50 ">
        <p className="flex items-center justify-between mb-2 text-xs text-zinc-600">
          Ticket No.- {ticketNmbr}
          <span className="items-center px-2 text-xs text-white bg-orange-400 rounded-sm">
            CURATION
          </span>
        </p>

        <div className="flex">
          <span className="items-center px-1 mr-2 border-2 border-orange-400 rounded-md">
            <Image
              className="items-center "
              src="/my_bookings_flight.svg"
              height="5"
              width="30"
              alt="flight image"
            ></Image>
          </span>
          <span>
            <p className="flex items-center my-2 font-semibold">
              {departure}
              <ArrowLongRightIcon className="w-10 h-5 text-orange-400" />
              {destination}
            </p>
          </span>
        </div>

        <div className="grid items-center grid-cols-4 mt-2">
          <span>
            <p className="py-1 text-xs text-neutral-400">Booking Date</p>
            <p className="text-xs font-semibold">{bookingDate}</p>
          </span>
          <span>
            <p className="py-1 text-xs text-neutral-400">Deport</p>
            <p className="text-xs font-semibold">{deportDate}</p>
          </span>
          <span>
            <p className="py-1 text-xs text-neutral-400">Arrive</p>
            <p className="text-xs font-semibold">{arrival}</p>
          </span>
          <span>
            <p className="py-1 text-xs text-neutral-400">Traveller</p>
            <p className="text-xs font-semibold">{passengers}</p>
          </span>
        </div>
      </div>

      {/* Hotel */}
      <div className="items-center p-2 m-2 border-2 rounded-md border-violet-100 w-80 lg:w-96 bg-violet-50">
        <p className="flex items-center justify-between mb-2 text-xs text-zinc-600">
          Ticket No.- {hotelBookingNmbr}
          <span className="items-center px-2 text-xs text-white rounded-sm bg-violet-500">
            CURATION
          </span>
        </p>
        <div className="flex">
          <span className="items-center p-2 mr-2 border-2 rounded-md border-violet-300">
            <BuildingOffice2Icon className="h-4 text-violet-500" />
          </span>
          <span>
            <p className="items-center font-semibold">{city}</p>
            <p className="text-[0.50rem] text-neutral-500">Destination</p>
          </span>
          <span className="items-center pt-1 ml-10">
            <p className="text-xs font-normal ">Rooms</p>
            <p className="text-xs text-neutral-500">{nmbrOfRooms}</p>
          </span>
        </div>

        <div className="grid items-center grid-cols-4 mt-2">
          <span>
            <p className="py-1 text-xs text-neutral-400">Booking Date</p>
            <p className="text-xs font-semibold">{hotelBookingDate}</p>
          </span>
          <span>
            <p className="py-1 text-xs text-neutral-400">Deport</p>
            <p className="text-xs font-semibold">{hotelDeport}</p>
          </span>
          <span>
            <p className="py-1 text-xs text-neutral-400">Arrive</p>
          <p className="text-xs font-semibold">{hotelCheckIn}</p>
          </span>
          <span>
            <p className="py-1 text-xs text-neutral-400">Guest</p>
            <p className="text-xs font-semibold">{guest}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
