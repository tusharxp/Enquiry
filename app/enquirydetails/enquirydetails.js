import React from "react";
import {
  ArrowLongRightIcon,
  BeakerIcon,
  BuildingOffice2Icon,
  ChevronLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Quotes from "@/Components/quotes";
// import Link from "next/link";

export default function enquirydetails(props) {
  const {
    ticketNmbr,
    departure,
    destination,
    bookingDate,
    deportDate,
    arrival,
    passengers,
  } = props;

  return (
    <div>
      {/* <Link href="/flighthotelcard"><ChevronLeftIcon className="h-4 text-black" /></Link> */}
      <span className="flex items-center justify-center pt-5 pb-4 lg:justify-normal bg-red-50 lg:bg-white">
      <ChevronLeftIcon className="h-4 text-black" />
        <h1 className="pl-2 text-lg font-semibold ">Enquiry Details</h1>
      </span>

      <div className="items-center p-4 rounded-md lg:mx-2 bg-red-50 ">
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

        <p className="text-[0.7rem] lg:text-[0.5rem] my-2 leading-loose w-[90%]">
          Lorem long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here
        </p>

        <hr className="border-orange-200" />

        <div className="grid items-center grid-cols-4 mt-2">
          <span>
            <p className="py-1 text-[0.7rem] lg:text-[0.5rem] text-neutral-400">Booking Date</p>
            <p className="text-xs font-semibold">{bookingDate}</p>
          </span>
          <span>
            <p className="py-1 text-[0.7rem] lg:text-[0.5rem] text-neutral-400">Deport</p>
            <p className="text-xs font-semibold">{deportDate}</p>
          </span>
          <span>
            <p className="py-1 text-[0.7rem] lg:text-[0.5rem] text-neutral-400">Arrive</p>
            <p className="text-xs font-semibold">{arrival}</p>
          </span>
          <span>
            <p className="py-1 text-[0.7rem] lg:text-[0.5rem] text-neutral-400">Traveller</p>
            <p className="text-xs font-semibold">{passengers}</p>
          </span>
        </div>
      </div>
      <h1 className="mt-6 mb-1 text-lg font-semibold text-black lg:text-gray-400 lg:pl-2 pl-7">
        Quotes
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-normal lg:flex-nowrap">
        <Quotes
          flightName={"spice jet"}
          departingFrom={"BOM"}
          departingCity={"Mumbai, India"}
          departingTime={"06:05"}
          departingDate={"Tue 19 feb, 22"}
          flightClass={"Economy"}
          arriveAt={"DEL"}
          arrivedCity={"Delhi, India"}
          arrivingTime={"09:35"}
          arrivingDate={"Tue 19 feb, 22"}
          price={"₹ 14,000"}
          totalDiscount={"-₹ 1,500"}
          totalPrice={"₹ 14,000"}
          flightDuration={"3hrs 30mins"}
        />
        <Quotes
          flightName={"spice jet"}
          departingFrom={"BOM"}
          departingCity={"Mumbai, India"}
          departingTime={"06:05"}
          departingDate={"Tue 19 feb, 22"}
          flightClass={"Economy"}
          arriveAt={"DEL"}
          arrivedCity={"Delhi, India"}
          arrivingTime={"09:35"}
          arrivingDate={"Tue 19 feb, 22"}
          price={"₹ 14,000"}
          totalDiscount={"-₹ 1,500"}
          totalPrice={"₹ 14,000"}
          flightDuration={"3hrs 30mins"}
        />
      </div>
    </div>
  );
}
