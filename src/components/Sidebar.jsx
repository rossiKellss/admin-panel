import logo from "../assets/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { lists } from "../Data/data";
import { useState } from "react";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className=" py-8 ">
      {/* logo */}
      <div className="px-4 flex flex-col transition ease duration-300 ">
        <div className="flex  items-center font-bold text-2xl gap-4  w-full">
          <img src={logo} alt="logo" srcset="" className="w-10 h-10 " />
          <span>GKS</span>
        </div>
      </div>

      {/* menu */}
      <div className="relative mt-12 gap-10 flex flex-col   w-full">
        {lists.map((item, index) => {
          return (
            <div
              className={`relative flex items-center gap-4 rounded-r-md  cursor-pointer  py-2 px-4 w-full ${
                index == selected ? "bg-red-200" : ""
              } `}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <div
                className={`absolute h-full ${
                  index == selected ? "bg-pink" : ""
                } left-0 w-2`}
              ></div>

              <div>
                <item.icon />
              </div>
              <span className=" ">{item.name}</span>
            </div>
          );
        })}
        <div className="flex items-center relative cursor-pointer bottom-0 ml-4 transition-all duration-300">
          <UilSignOutAlt className="absolute -bottom-4" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
