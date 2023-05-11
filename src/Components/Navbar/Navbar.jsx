import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div>
        <div
          className={
            !menu
              ? "flex flex-row items-center py-4 justify-around md:py-1 w-full"
              : "flex flex-row items-center py-4 justify-around md:py-1 w-full opacity-100"
          }
        >
          {/* logo */}
          <div>
            <h1 className="text-6xl font-extrabold">W.</h1>
          </div>

          {/* items */}
          <div>
            <div className="md:hidden">
              <AiOutlineBars
                className={!menu ? "text-5xl" : "hidden"}
                onClick={() => setMenu(true)}
              />
            </div>

            {menu ? (
              <Menu onClick={() => setMenu(false)} isOpen={menu} />
            ) : null}

            <div className="md:flex md:flex-row md:items-center md:justify-between hidden">
              <h1 className="mx-2 text-2xl lg:mx-4 cursor-pointer hover:scale-105 hover:shadow-sm">
                <Link to={"/"}>Home</Link>
              </h1>
              <h1 className="mx-2 text-2xl lg:mx-4 cursor-pointer hover:scale-105 hover:shadow-sm">
                <Link to={"/New"}>New</Link>
              </h1>
              <h1 className="mx-2 text-2xl lg:mx-4 cursor-pointer hover:scale-105 hover:shadow-sm">
                Popular
              </h1>
              <h1 className="mx-2 text-2xl lg:mx-4 cursor-pointer hover:scale-105 hover:shadow-sm">
                Trending
              </h1>
              <h1 className="mx-2 text-2xl lg:mx-4 cursor-pointer hover:scale-105 hover:shadow-sm">
                Categories
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
