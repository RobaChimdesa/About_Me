import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skill from './Components/Skill/Skill';
import Contact from './Components/Contact/contact';
import Project from './Components/Project/project';
import Footer from './Components/footer/Footer';



const App = () => {
  return (
   
    <div className="w-full h-auto   bg-zinc-950 text-white  font-serif">
        
      
       <div className='max-w-screen-xl px-1  md:px-80  p-10 md:text-xl  '>
         <Navbar/>
        
          </div>
          <HomePage/>
            <About/>
         <Education/>
           <Skill/>
          <Project/>
          {/* <Cat/> */}
           <Contact/>
          <Footer/> 
         
        
         
       </div>
  );
};



export default App; 
