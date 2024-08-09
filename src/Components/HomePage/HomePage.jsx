import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import DownloadIcon from '@mui/icons-material/Download';

import { back1 } from '../../assets';

import { roba } from '../../assets'
function homepage() {
  const email = "robachimdesa123@gmail.com";
  
  return (
    <section id='home' className='bg-cover bg-center w-full  h-[800px]  md:px-20 items-center  md:flex  
         ' 
         style={{
          backgroundImage: `url(${back1})`,
          backgroundSize: "cover"
          
             
         }}
         >
      
        <div className=' '>

          <div className=" md:flex   mx-[200px] md:gap-[230px] 
          md:items-center items-start space-y-28">

          <div className="mt-7  items-start md:items-center md:w-4/5 md:px-5">
            <h1 className="font-serif mt-28	 text-2xl md:text-4xl ">Hi, </h1>
            <h1 className="font-serif text-2xl md:text-4xl "><b>I'm,</b>{' '} Roba 
            Chimdesa</h1>
             <h1 className=" font-serif text-2xl md:text-4xl text-red-500">
                
              <span >{' '}
              <Typewriter
              words={['Computer Engineer','Web Developer','Web Designer']}
              loop={10}
              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
              />

              </span>
            </h1>
           
          </div>

          <div className="  h-1/2 ">
        
        <div className='w-40 md:w-4/5'>
        <img src={roba} alt=""className="  rounded-full   md:w-4/5 
        transition-transform duration-500 ease-in-out transform hover:scale-150
        " />
        </div> 
        
        <div mx-4>
             <ul className='flex gap-1 mx-8 md:mx-16  '>
              <li>
              <a href="https://m.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-500 ">
                <FacebookIcon size={20} /></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/roba-chimdesa-0a2bab2a8/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <LinkedInIcon size={20} /></a>
              </li>
              <li>
              <a href="https://t.me/Anoo_Chim" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <TelegramIcon size={20} /></a>
              </li>
              <li>
              <a href="https://github.com/RobaChimdesa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <GitHubIcon/> </a>
              </li>
              <li>
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <EmailIcon/> </a>
              </li>
            
             </ul>
        </div>
                    
        
     </div>
          </div>

         <div>
         <a href="/cv.pdf"
          target='_blank'
          
          >
          <button className='bg-sky-700 hover:bg-sky-500  items-center py-1 px-3  md:py-2  md:px-6  rounded-full ml-[194px] mt-10 md:ml-[600px]
          transition-transform duration-500 ease-in-out transform hover:scale-110
          '> <DownloadIcon/>
            download CV</button>
        </a>
         </div>
       
      </div>
     
      
    
    </section>
  )  
}

export default homepage



