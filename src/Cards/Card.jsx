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
  const Png=param.png;
  return(
      // compact card
      <div className="relative flex  h-[7rem] rounded-lg" style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }}>
        <div className="flex-1 flex  border">
          <CircularProgressbar value={param.barValue} text={`${param.barValue}%`}/>
        </div>
        <div>
          <Png/>
          <span>{param.value}</span>
          <span>Last 24 hours</span>
        </div>
      </div>
    
  )

}

export default Card