import Sidebar from "./components/Sidebar"

function App() {
  
  return (
    <>
    <div className="w-full min-h-screen bg-gradient-to-r from-[#ffe1bc] via-[#ffcfd1] to-[#f3c6f1] flex justify-center items-center">
      <div className="grid grid-cols-custom-layout w-[97%] min-h-[97%] bg-glass rounded-lg overflow-hidden">
        <Sidebar/>
      </div>

    </div>
    </>
  )
}

export default App
