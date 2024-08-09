// import React from 'react'
// import { design } from '../Skill/StoreSkill'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HtmlIcon from '@mui/icons-material/Html';
// import CssRoundedIcon from '@mui/icons-material/CssRounded';
// import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
// import { Myproject } from '../../constants/Myprojects';

// const Project = () => {
//   return (
//     <section id='projects' className='w-full h-[800px] px-20 items-center py-10'>
//     <h1 className="text-white text-2xl mx-3 mt-16 mb-7 font-bold ">
//          Project
//         </h1>
//       <div className='  gap-12 flex mb-10'>
     
         

//        {
//         Myproject.map((item)=>
//         <div key={item.id} className="ml-10 border-l-2 border-sky-500 border-solid  hover:border-yellow-500 p-4  w-[370px] h-3/5  
//       rounded-xl  bg-zinc-900 transition ease-in-out delay-150 hover:bg-black hover:-translate-y-1 
//       hover:scale-105  duration-300 ...">
        
//          <div className="relative w-full h-64 bg-zinc-900">
//          <img src={item.img} alt="Overlay" className="w-full h-full object-cover" />
//          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
//            <a className='hover:text-xl text-bold' href={item.link} target="_blank">{item.link}</a>
//          </div>
  
//       </div>
        
          

//          <div>
//           <div>
//             <h1 className='text-2xl'>{item.title}</h1>
//             <p>{item.description}</p>
//           </div>
//           <div className='flex gap-60 '>
//              <div className='ml-3 flex '>
//              <a href="" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-700  rounded-full">
//                 <HtmlIcon size={20}/> </a>
//              <a href="" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-700 rounded-full">
//                 <CssRoundedIcon size={20}/> </a>  
//               <a href="" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-700 rounded-full">
//                 <JavascriptRoundedIcon size={20}/> </a>    
//              </div>
             
//               <div className='mr-3'>
//               <a href={item.git} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
//                  <GitHubIcon size={50} /> </a>
//               </div>
             
            
//           </div>
//          </div>
         
//       </div>
//         )}


         
          
//        </div>  

    
       
//     </section>
//   )
// }

// export default Project
import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Myproject } from '../../constants/Myprojects';
 

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id='projects' className='w-full md:h-[800px] px-20 items-center py-10 overflow-hidden'>
      <h1 className="text-white text-2xl md:mx-3  md:mt-16 mb-7 font-bold">Project</h1>
      <div
        className={`grid grid-cols-1 md:relative md:flex gap-12 mb-10 ${isHovered ? 'md:animation-paused' : 'md:animate-scroll'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Myproject.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 border-l-2 border-sky-500 border-solid hover:border-yellow-500
             p-4 w-[250px] md:w-[370px]  md:h-3/5 rounded-xl bg-zinc-900 transition ease-in-out delay-150
             hover:bg-black hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <div className="relative w-full h-24 md:h-64 bg-zinc-900">
              <img src={item.img} alt="Overlay" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a className='hover:text-xl text-bold' href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-2xl'>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <div className='flex justify-between'>
                <div className='ml-3 flex'>
                  <img src={item.tech1} alt="" className='w-5 h-5 rounded-full '/>
                 
                  <img src={item.tech2} alt="" className='w-5 h-5 rounded-full '/>
                 
                  <img src={item.tech3} alt="" className='w-5 h-5 rounded-full '/>
                
                
                </div>
                <div className='mr-3'>
                  <a href={item.git} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                    <GitHubIcon size={50} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
