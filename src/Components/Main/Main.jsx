import React from "react";
import Cards from "./Cards/Cards";
import New from "./New-cont/New";
import Starter from "./Starter/Starter";
const Main = () => {
  return (
    <div className="lg:mx-20 m-1026:pl-20 m-1026:pr-10 2xl:px-48">
      <div className="lg:flex lg:flex-row">
        <div className=" lg:w-3/4 lg:mr-3">
          <Starter />
        </div>
        <div className="2 lg:w-4/12 lg:h-full ">
          <New />
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Main;
