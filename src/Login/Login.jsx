import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="flex items-center justify-center">
    <div className="w-[80%] mt-10 p-4 rounded-md py-20 flex flex-col items-center justify-center bg-slate-200">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className=" p-4 rounded-full bg-lime-600">
          <FaLock className="text-5xl text-white " />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-xl font-semibold">Sign in</h1>
          <span className="text-gray">
            Welcome, please sign in to continue.
          </span>
        </div>
      </div>
      <form className="flex flex-col gap-5 w-[60%] mt-10">
        <div className="flex flex-col gap-1">
            <label className="">Email</label>
            <input type="email" className="bg-white p-2" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="" className=" tracking-tight">Password</label>
            <input type="password" className="bg-white p-2"></input>
        </div>
        <button className="self-start bg-lime-600 py-2 px-6 text-white text-lg">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
