import Login from "./Login/Login"
import {Routes,Route} from 'react-router-dom'
import Home from "./Home/Home"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/login" element={ <Login/>}/>
    x

    </Routes>
    
   
    </>
  )
}

export default App
