import React from "react";
import Image from "next/image";

export default function quotes(props) {
  const {
    totalPrice,
    totalDiscount,
    price,
    flightName,
    departingFrom,
    departingCity,
    departingTime,
    departingDate,
    flightClass,
    arriveAt,
    arrivedCity,
    arrivingTime,
    arrivingDate,
    flightDuration,
  } = props;

  return (
    <div>
      <div className="p-2 m-2 border rounded-md">
        <p className="text-xs font-medium text-center">
          Mumbai to Delhi Flights
        </p>
        <hr className="m-2 border-gray-200" />
        <span className="grid justify-around grid-cols-3">
          <span className="text-left">
            <p className="mb-2 text-xs">{flightName}</p>
            <p className="text-sm font-semibold ">{departingFrom}</p>
            <p className="text-[0.5rem] text-gray-400">{departingCity}</p>
            <p className="font-semibold ">{departingTime}</p>
            <p className="text-[0.5rem] text-gray-400">{departingDate}</p>
          </span>
          <span className="items-center text-center">
            <p className="text-xs font-semibold">
              <Image
                className="items-center pt-5 lg:pt-10 lg:pl-10"
                src="https://images.travelxp.com/images/txpin/voucher/flights/flight_voucher_fromandto.png"
                height="10"
                width="100"
                alt="flight image"
              />
              {flightDuration}
            </p>
          </span>
          <span className="text-right">
            <p className="mb-2 text-xs">{flightClass}</p>
            <p className="text-sm font-semibold ">{arriveAt}</p>
            <p className="text-[0.5rem] text-gray-400">{arrivedCity}</p>
            <p className="font-semibold ">{arrivingTime}</p>
            <p className="text-[0.5rem] text-gray-400">{arrivingDate}</p>
          </span>
        </span>

        <span className="flex justify-center mt-2">
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
            <p className="flex justify-between py-1 my-1 text-xs font-semibold">
              Price Per Adult<span>{price}</span>
            </p>
            <p className="flex justify-between py-1 my-1 text-xs font-semibold">
              Total Discount
              <span className="text-green-400">{totalDiscount}</span>
            </p>
            <hr className="my-2 border-gray-200" />
            <p className="flex justify-between text-xs font-semibold">
              Price Per Adult<span>{totalPrice}</span>
            </p>
            <hr className="my-2 border-gray-200" />
            <p className="text-[0.5rem] bg-red-50 p-2 border border-red-100 w-[99%] rounded-md">
            This is cheapest option available in indigo for {departingCity} to {arrivedCity} on
              24th.
            </p>
            <button className="h-8 my-2 lg:m-2 text-xs text-center text-white bg-orange-400 rounded-md w-[48%] lg:w-52">
              Accept
            </button>
            <button className="h-8 my-2 pl-2 lg:m-2 text-xs text-center text-orange-400 lg:w-52 w-[45%]">
              Ask for another Quote
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
