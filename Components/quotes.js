import React from "react";
import Image from "next/image";

export default function quotes() {
  return (
    <div>
      <div className="p-2 m-2 border rounded-md">
        <p className="text-xs font-medium text-center">
          Mumbai to Delhi Flights
        </p>
        <hr className="m-2 border-gray-200" />
        <span className="grid justify-around grid-cols-3">
          <span className="text-left">
            <p className="mb-2 text-xs">spice jet</p>
            <p className="text-sm font-semibold ">BOM</p>
            <p className="text-[0.5rem] text-gray-400">Mumbai, India</p>
            <p className="font-semibold ">06:05</p>
            <p className="text-[0.5rem] text-gray-400">Tue 19 feb, 22</p>
          </span>
          <span className="items-center text-center"></span>
          <span className="text-right">
            <p className="mb-2 text-xs">Economy</p>
            <p className="text-sm font-semibold ">DEL</p>
            <p className="text-[0.5rem] text-gray-400">Delhi, India</p>
            <p className="font-semibold ">09:35</p>
            <p className="text-[0.5rem] text-gray-400">Tue 19 feb, 22</p>
          </span>
        </span>

        <span className="flex justify-center">
          <p className="flex px-1 text-[0.5rem] items-center">
            <Image
              className="items-center mx-1"
              src="https://images.travelxp.com/images/txpin/voucher/flights/flight_checkin_baggage.png"
              height="5"
              width="7"
              alt="flight image"
            />
            15Kg/person
          </p>
          <p className="flex px-1 text-[0.5rem] items-center">
            |
            <Image
              className="items-center mx-1"
              src="	https://images.travelxp.com/images/txpin/voucher/flights/flight_free_baggage.png"
              height="5"
              width="10"
              alt="flight image"
            />
            7Kg/person
          </p>
          <p className="flex px-1 text-[0.5rem] items-center">
            |
            <Image
              className="items-center mx-1"
              src="https://images.travelxp.com/images/txpin/voucher/flights/flight_free_meal.png"
              height="5"
              width="15"
              alt="flight image"
            />
            No Meals
          </p>
        </span>

        <hr className="my-3 border-gray-200" />

        <div>
          <p className="my-2 text-xs font-semibold text-orange-400">
            Fee Breakdown
          </p>
          <span>
            <p className="flex justify-between my-1 text-xs font-semibold">
              Price Per Adult<span>₹ 14,000</span>
            </p>
            <p className="flex justify-between my-1 text-xs font-semibold">
              Total Discount<span className="text-green-400">-₹ 1,500</span>
            </p>
            <hr className="my-2 border-gray-200" />
            <p className="flex justify-between text-xs font-semibold">
              Price Per Adult<span>₹ 14,000</span>
            </p>
            <hr className="my-2 border-gray-200" />
            <p className="text-[0.5rem] bg-red-50 p-2 border border-red-100 rounded-md">
              This is cheapest option available in indigo for Mumbai to Delhi on
              24th.
            </p>
            <button className="h-8 m-2 text-xs text-center text-white bg-orange-400 rounded-md w-52">
              Accept
            </button>
            <button className="h-8 m-2 text-xs text-center text-orange-400 w-52">
              {" "}
              Ask for another Quote
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
