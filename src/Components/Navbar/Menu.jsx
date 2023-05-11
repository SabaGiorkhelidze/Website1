import React from "react";
import { BiArrowBack } from "react-icons/bi";
const Menu = (props) => {
  // {props.isOpen ? 'animate-fade-in' : ''} ???
  return (
    <div className="">
      <div className="w-10/12 fixed p-15 z-30 overflow-hidden shadow-2xl md:hidden h-full bg-white top-0 right-0 flex justify-start py-20 duration-700">
        <div className="mr-16 ml-6 mt-5">
          <BiArrowBack
            className="text-4xl cursor-pointer"
            onClick={props.onClick}
          />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className=" text-2xl my-5 hover:scale-105 hover:shadow- hover:cursor-pointer">
            Home
          </h1>
          <h1 className=" text-2xl my-5 hover:scale-105 hover:shadow- hover:cursor-pointer">
            New
          </h1>
          <h1 className=" text-2xl my-5 hover:scale-105 hover:shadow- hover:cursor-pointer">
            Popular
          </h1>
          <h1 className=" text-2xl my-5 hover:scale-105 hover:shadow- hover:cursor-pointer">
            Trending
          </h1>
          <h1 className=" text-2xl my-5 hover:scale-105 hover:shadow- hover:cursor-pointer">
            Categories
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Menu;
