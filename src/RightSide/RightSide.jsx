import Review from "./Reviews/Review"
import Updates from "./Updates/Updates"


function RightSide() {
  return (
    <div className="flex flex-col gap-2 justify-evenly py-4">
        <Updates/>
        <Review/>
        </div>
  )
}

export default RightSide