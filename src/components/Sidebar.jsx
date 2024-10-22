import logo from '../assets/logo.png'
import {UilEstate} from '@iconscout/react-unicons'
const Sidebar = () => {
  return (
    <div className='p-4'>
       
        {/* logo */}
        <div className="flex flex-col  transition ease duration-300  ">
            <div className='flex justify-center items-center font-bold text-2xl gap-4  w-full'>
            <img src={logo} alt="logo" srcset="" className='w-12 h-12 ' />
            <span>GKS</span>
            </div>
         </div>

         {/* menu */}
         <div className='mt-4 gap-2 flex flex-col '>
            <div className="menuItem flex  items-center gap-3 ">
               <UilEstate/>
                <span>
                    Home
                </span>
            </div>
            
         </div>

    </div>
  )
}

export default Sidebar