import { useState } from "react"
import { cardsData } from "../Data/data"
import Card from "./Card"
function Cards() {
    const [expanded,setExpanded]=useState();
  return (
    <div className="flex gap-4  ">
     {cardsData.map((data,index)=>{
        return(
        <Card 
        title={data.title}
        color={data.color}
        barValue={data.barValue}
        png={data.png}
        key={index}

        />)
        


    })}
    </div>
  )
}

export default Cards