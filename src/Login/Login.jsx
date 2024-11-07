import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { useLoginAdminMutation } from "../api/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCred } from "../features/auth/authSlice";
import { Alert } from "../Alert/Alert";


function Login() {
  const navigate=useNavigate();
  const [cred, setCred] = useState({});
  const [loginAdmin] = useLoginAdminMutation();
  const dispatch=useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const password = e.target.value;

    setCred({
      ...cred,
      [name]: password,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const result = await loginAdmin(cred).unwrap();
      
      
      if(result?.success){
      
        
        

        navigate('/');
      }
      
      
    } catch (err) {
      console.log("the error is",err);
      const message=err.data.message;
      Alert(message,"error")
      
    }

  }

  
  return (
    <div className="flex items-center justify-center">
      <div className="w-[70%] mt-7 p-4 rounded-md py-20 flex flex-col items-center justify-center bg-glass drop-shadow-xl">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className=" p-4 rounded-full bg-pink">
            <FaLock className="text-5xl  text-white" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  ">Sign in</h1>
            <span className="">
              Welcome, please sign in to continue.
            </span>
          </div>
        </div>
        <form
          className="flex flex-col gap-5 w-[60%] mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label className=" ">Email:</label>
            <input
              type="email"
              className="bg-white p-2 rounded-md"
              name="phoneOrEmail"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className=" tracking-tight">
              Password:
            </label>
            <input
              type="password"
              className="bg-white p-2 rounded-md"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <button
            type="submit"
            className="self-start bg-pink rounded-md hover:bg-red-400 py-2 px-6 text-white text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
