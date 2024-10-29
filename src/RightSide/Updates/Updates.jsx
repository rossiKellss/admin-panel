import user from "../../assets/user.png";
import { updatesData } from "../../Data/data";
function Updates() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Updates</h1>
      </div>
      <div className="w-[90%] flex flex-col gap-5 bg-white px-3 py-4 rounded-lg">
        {updatesData.map((data, index) => {
          return (
            <div className="flex items-start gap-5">
              <img src={user} alt="" className="w-14 rounded-full" />

              <div className="flex flex-col gap-1">
                <p className="text-sm text-slate-800 ">{data.message}</p>
                <span className="text-xs font-semibold text-slate-500">25 secs ago</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Updates;
