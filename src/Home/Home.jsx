import Sidebar from "../components/Sidebar"
import Dashboard from "../Main/Dashboard"
import RightSide from "../RightSide/RightSide"
import {Routes,Route} from 'react-router-dom'
import ShowProducts from '../Products/ShowProducts'
import Create from '../Products/Create'
import Update from '../Products/Update'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLazyCheckAuthQuery } from "../api/authApiSlice";

function Home() {
  const navigate=useNavigate();
  const [checkAuth]=useLazyCheckAuthQuery();

  useEffect(()=>{
    const isLoggedIn = async () => {
      try {
        const res = await checkAuth().unwrap();
        
        
        
        
      } catch (err) {
       
        if(!err?.data?.success){
          navigate('/login')
        }
      }
    };
    isLoggedIn();
  },[]);
  return (
    <div className="flex justify-center items-center pt-4 ">
      <div className="grid grid-cols-custom-layout w-[97%] min-h-[96vh] bg-glass rounded-lg overflow-hidden">
        <Sidebar/>
        {/* <Dashboard/> */}
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path='/products/list-all' element={<ShowProducts/>}/>
          <Route path='/products/add-products' element={<Create/>}/>
          <Route path='/products/update-products/:id' element={<Update/>}/>
          
          
            
          
        </Routes>
        
        <RightSide/>
      </div>

    </div>
  )
}

export default Home