import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  return (
    <div>
         <div className='ml-10 md:ml-[480px] pb-6 flex md:gap-32  md:text-2xl'>
      <div className=''> <h2> © 2024 Roba Chimdesa</h2> </div>
      <div>
             <ul className='flex gap-2 mx-16 '>
              
             <li>
              <a href="https://m.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-500 ">
                <FacebookIcon size={50} /></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/roba-chimdesa-0a2bab2a8/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <LinkedInIcon size={50} /></a>
              </li>
              <li>
              <a href="https://t.me/Anoo_Chim" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <TelegramIcon size={50}  /></a>
              </li>
              <li>
              <a href="https://github.com/RobaChimdesa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-700 rounded-full">
                <GitHubIcon size={50}/> </a>
              </li>


              
             </ul>
        </div>

  
      </div>
    </div>
  )
}

export default Footer
