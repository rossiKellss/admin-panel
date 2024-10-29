import Review from "./Reviews/Review"
import Updates from "./Updates/Updates"


function RightSide() {
  return (
    <div className="flex flex-col justify-evenly">
        <Updates/>
        <Review/>
        </div>
  )
}

export default RightSide