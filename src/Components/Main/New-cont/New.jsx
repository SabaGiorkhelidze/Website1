import React from "react";

const New = () => {
  return (
    <div>
      <div className="my-6 md:flex md:justify-center md:items-center">
        <div className=" bg-slate-900 md:w-8/12 m-1026:w-9/12 m-1026:px-2">
          {/* header */}
          <div className="items-center py-4 px-3">
            <h1 className="text-orange-500 font-extrabold text-2xl">NEW</h1>
          </div>

          {/* content */}
          <div className="">
            {/* first */}
            <div className="px-5 my-4 py-2 cursor-pointer hover:scale-110 md:flex md:justify-around md:items-center md:flex-col">
              <h1 className="text-white font-bold text-2xl">
                Hydrogen vs Electric Car
              </h1>

              <p className="text-white my-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <hr className="text-white mx-4 text-xl" />

            {/* second */}
            <div className="px-5 my-4 py-2 hover:cursor-pointer hover:scale-110 md:flex md:justify-around md:items-center md:flex-col">
              <h1 className="text-white font-bold text-2xl">
                The downside of AI arts
              </h1>

              <p className="text-white my-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <hr className="text-white mx-4 text-xl" />

            {/* third */}
            <div className="px-5 my-4 py-2 hover:cursor-pointer hover:scale-110 md:flex md:justify-around md:items-center md:flex-col">
              <h1 className="text-white font-bold text-2xl">
                Is VC funding drying up?
              </h1>

              <p className="text-white my-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
