import Sidebar from "../components/Sidebar"
import Dashboard from "../Main/Dashboard"
import RightSide from "../RightSide/RightSide"
import {Routes,Route} from 'react-router-dom'
import ShowProducts from '../Products/ShowProducts'
import Create from '../Products/Create'
import Update from '../Products/Update'

function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#ffe1bc] via-[#ffcfd1] to-[#f3c6f1] flex justify-center items-center">
      <div className="grid grid-cols-custom-layout w-[97%] min-h-[96vh] bg-glass rounded-lg overflow-hidden">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path='/products/list-all' element={<ShowProducts/>}/>
          <Route path='/products/add-products' element={<Create/>}/>
          <Route path='/products/update-products' element={<Update/>}/>
          
          
            
          
        </Routes>
        
        <RightSide/>
      </div>

    </div>
  )
}

export default Home