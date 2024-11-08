import Login from "./Login/Login"
import {Routes,Route} from 'react-router-dom'
import Home from "./Home/Home"
import ShowProducts from "./Products/ShowProducts"

function App() {
  
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-[#ffe1bc] via-[#ffcfd1] to-[#f3c6f1]">
        <Routes>
          <Route  path="*" element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App
