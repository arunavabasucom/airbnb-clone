import React from "react";
import Image from "next/image";
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon} from '@heroicons/react/solid'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md 
    py-5 px-5 
    
    md:px-10
    "
      // or just use p-5 for padding
      //it sticks to the top
    >
      
      {/* left --> airbnb logo*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/* self closed component */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
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
       <input className="pl-5 outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400"
       type="text" placeholder="Start your search "
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
         <GlobeAltIcon className="h-6 cusrser-pointer " />
         
         
         
         <div className="flex item-center space-x-2 border-4 p-2 rounded-full border-wi">
           <MenuIcon className="h-6" />
           <UserCircleIcon className="h-6"/>
         </div>
       
       
       </div>
    </header>
  );
}
