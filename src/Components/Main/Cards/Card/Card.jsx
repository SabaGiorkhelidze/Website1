import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-11/12 flex justify-center flex-row items-center shadow-xl my-3 cursor-pointer hover:shadow-2xl md:w-8/12 lg:mx-4 lg:w-11/12 ">
          {/* img  */}
          <div className="w-4/5 h-full">
            <img src={props.url} alt="" className="w-48 h-40 " />
          </div>

          {/* content */}

          <div className=" w-full flex justify-center items-center mx-2 my-4">
            <div className="flex justify-center items-center flex-col">
              <div className="flex items-center justify-center my-1">
                <h1 className="text-xl font-bold text-gray-600">{props.id}</h1>
              </div>

              <div className="flex items-center justify-center my-1">
                <h1 className="text-xl font-bold ">{props.header}</h1>
              </div>

              <div className="flex items-center justify-center w-full flex-wrap my-1">
                <h4 className="text-base text-gray-600">{props.caption}</h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Card;
