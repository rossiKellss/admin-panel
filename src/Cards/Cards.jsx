import { useState } from "react"
import { cardsData } from "../Data/data"
import Card from "./Card"
function Cards() {
    const [expanded,setExpanded]=useState();
  return (
    <div className="flex ">
     {cardsData.map((data,index)=>{
        return(
        <Card 
        title={data.title}
        color={data.color}
        barValue={data.barValue}
        png={data.png}

        />)
        


    })}
    </div>
  )
}

export default Cards