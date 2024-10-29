import Sidebar from "./components/Sidebar"
import Dashboard from "./Main/Dashboard"
import RightSide from "./RightSide/RightSide"

function App() {
  
  return (
    <>
    <div className="w-full min-h-screen bg-gradient-to-r from-[#ffe1bc] via-[#ffcfd1] to-[#f3c6f1] flex justify-center items-center">
      <div className="grid grid-cols-custom-layout w-[97%] min-h-[96vh] bg-glass rounded-lg overflow-hidden">
        <Sidebar/>
        <Dashboard/>
        <RightSide/>
      </div>

    </div>
    </>
  )
}

export default App
