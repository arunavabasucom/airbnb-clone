import React, { useState } from "react";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

export default function Header({placeholder}) {
  const [searchInput, setsearchInput] = useState("");
  // console.log(searchInput);
  const [startDate, setstartDate] = useState( new  Date());
  const [endDate, setendDate] = useState( new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

 

  const handleSelect = (ranges) => {
    //the key --> selection --> the basically trackets the user input
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };

  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setsearchInput("");
  };

  //  finctionality for search button in calender view
  const searchquery = () => {
    //nextJS gives a built in page base router when it clicked the pages save in the history and we have just pushes the page from history
    // router.push("/search");
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky z-50 top-0  grid grid-cols-3 bg-white shadow-lg 
    py-5 px-5    md:px-10     "

      // or just use p-5 for padding
      //it sticks to the top
    >
      {/* left --> airbnb logo*/}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        {/* self closed component */}
        <Image
          src="/assets/airbnb_logo.svg"
          //
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* left --> airbnb logo*/}

      {/* middle --> serch seaction section */}
      <div className=" flex items-center md:border-2 rounded-full py-2">
        {/* when we hi tthe medium screen show the border */}
        <input
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          className="pl-5 outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search "}
          //placeholder is a hint text
        />
        <SearchIcon
          className="  text-white h-8 bg-red-400 rounded-full p-2 cursor-pointer hidden md:inline-flex  md:mx-2"
          // inline-flex
        />
      </div>
      {/* Right */}
      <div className=" flex space-x-4  items-center justify-end text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className=" h-6 cursor-pointer h-6" />

        <div className="flex item-center space-x-2 border-4 p-2 rounded-full border-wi">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col mx-auto col-span-3 py-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400 pl-1"
            />
          </div>
          <div className="flex ">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={searchquery} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
