import React from 'react'

import { motion } from 'framer-motion';
import { database } from './StoreSkill'
const Database = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{ opacity:1,transition:{duration:1} }}
      className='h-[625px] mt-10'>
      <div className='grid grid-cols-6 mx-8 md:mx-64 gap-2'>
        {database.map ((item)=>(
          <div  key={item.id} className='mt-5 w-[150px] h-[150px] bg-black hover:bg-slate-500 hover:text-black
           items-center justify-center rounded-xl  hover:scale-105 ease-in-out duration-500'>
            <p className='pl-9'>{item.name}</p>
            <img src={item.title} alt="" className='h-32 w-40 p-5 pt-1 '/>
          </div>
        )
        
        )}
     
      </div>
     
    </motion.section>
  )
}

export default Database
