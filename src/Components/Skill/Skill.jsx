import { useState } from 'react'
import React from 'react'
import All from './All'
import Frontend from './Frontend'
import Backend from './Backend'
import Database from './database'
import Framework from './framework'
import Design from './design'
const Skill = () => {
  const [allData,setallData] = useState(true)
  const [frontDat,setfrontData] = useState(false)
  const [backData,setbackData] = useState(false)
  const [databaseData,setdatabaseData] = useState(false)
  const [frameworkData,setframeworkData] = useState(false)
  const [designData,setdesignData] = useState(false)
  

  
  return (
    <section id='skills' className='h-[800px] w-full md:py-1'>
    <div className=' justify-center items-center mx-2  md:mx-56'>
    <h1 className="text-white text-xl md:text-2xl  mt-11 mb-2 md:mb-5 md:font-bold ">
         Skill
        </h1>
     <ul className='gap-0  md:w-full grid grid-cols-6 mb-4'>
       <li className={`${allData ? 'text-sky-500 text-2xl ': ''} skill`}
       
       onClick={() => 
        setallData(true) & setfrontData(false) & setbackData(false) & setframeworkData(false) & setdesignData(false) & setdatabaseData(false)
        
        }>All</li>
       <li className={`${frontDat ? 'text-sky-500 text-2xl ': ''} skill`}
        onClick={() => 
       setallData(false) & setfrontData(true) & setbackData(false) & setframeworkData(false) & setdesignData(false) & setdatabaseData(false)
  
      }>Frontend</li>
       <li className={`${backData ? 'text-sky-500 text-2xl ': ''} skill`}
       onClick={()=>{

      setallData(false) & setfrontData(false) & setbackData(true) & setframeworkData(false) & setdesignData(false) & setdatabaseData(false)
     
       }}
       >Backend</li>
       
       <li className={`${frameworkData ? 'text-sky-500 text-2xl ': ''} skill`}
       onClick={()=>{
         setallData(false) & setfrontData(false) & setbackData(false) & setframeworkData(true) & setdesignData(false) & setdatabaseData(false)
     
       }
      }>Framework</li>
      <li className={`${databaseData ? 'text-sky-500 text-2xl ': ''} skill`} 
      onClick={()=>{
         setallData(false) & setfrontData(false) & setbackData(false) & setframeworkData(false) & setdesignData(false) & setdatabaseData(true)
     
       }}>Database</li>
       <li className={`${designData ? 'text-sky-500 text-2xl ': ''} skill`}
        onClick={() =>{

       setallData(false) & setfrontData(false) & setbackData(false) & setframeworkData(false) & setdesignData(true) & setdatabaseData(false)
     
       }}>Design</li>


      
      </ul>   
    </div>
    {allData && <All/>}
    {frontDat && <Frontend/>}
    {backData && < Backend/>}
    {databaseData && <Database/>}
    {frameworkData && <Framework/>}
    {designData && <Design/>}
    
    </section>
  )
}

export default Skill
