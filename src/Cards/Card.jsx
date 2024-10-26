import { useState } from "react"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Card(props) {
  const [expanded,setExpanded]=useState(false);

  return (
    <AnimatePresence>
      {
        expanded?("expanded"):(<CompactCard param={props}/>)
      }
    </AnimatePresence>
  )
}

function CompactCard({param}){
  console.log(param)
  const Png=param.png;
  return(
      // compact card
      <div className="relative flex w-full rounded-lg p-5 gap-4" style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }}>
        <div className="flex-1 flex flex-col  items-center justify-end gap-1  text-white h-[8rem]  ">
          <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} className=" stroke-white drop-shadow-xl  w-fit"/>
          <span className="self-start text-lg font-semibold ml-3">{param.title}</span>
          
        </div>
        
        <div className="flex flex-1 flex-col  text-white items-end gap-6 justify-end ">
          <Png className="w-12"/>
          <span className="text-2xl font-semibold">$123</span>
          <span className="text-sm font-semibold">Last 24 hours</span>
        </div>
      </div>
    
  )

}

export default Card