import React, { useRef, useState, useEffect } from "react";
import mobile from "../../../assets/mobile.jpg";
import desktop from "../../../assets/desktop.jpg";

const Starter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div>
      <div className="">
        <div className="py-6">
          <img src={windowWidth <= 768  ? mobile : desktop} alt="" className="rounded-sm" />
        </div>

        <div className="md:flex md:flex-row md:w-full">
          {/* header */}
          <div className=" items-center md:w-1/2">
            <h1 className="font-extrabold text-4xl md:text-6xl">
              The bright Future of WEB 3.0
            </h1>
          </div>

          <div className="md:w-1/2">
            {/* text */}
            <div className=" items-center my-2">
              <p className="text-lg font-bold opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                dolorum vel dicta porro, aperiam culpa similique maiores odio
                alias suscipit earum facilis ipsa quidem sunt molestiae sit,
                consectetur nam a.
              </p>
            </div>

            {/* button */}
            <div>
              <div className=" flex items-center py-2">
                <button className="w-48 h-10 bg-rose-400 text-white rounded-sm cursor-pointer hover:scale-105 ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
