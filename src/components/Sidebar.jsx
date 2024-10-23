import logo from "../assets/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import {lists} from '../Data/sidebar'
const Sidebar = () => {
  return (
    <div className="px-4 py-8">
      {/* logo */}
      <div className="flex flex-col  transition ease duration-300  ">
        <div className="flex  items-center font-bold text-2xl gap-4  w-full">
          <img src={logo} alt="logo" srcset="" className="w-10 h-10 " />
          <span>GKS</span>
        </div>
      </div>

      {/* menu */}
      <div className="mt-12 gap-11 flex flex-col">
          {lists.map((item,index)=>{
            return(<div className="menuItem flex items-center gap-5 rounded-md cursor-pointer active:bg-pink hover:bg-pink py-2 px-1 w-full" key={index}>
              <div>
                <item.icon />
              </div>
              <span className=" ">{item.name}</span>
            </div>)
            
          })}
          <div className="ml-2">
            <UilSignOutAlt/>

          </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
