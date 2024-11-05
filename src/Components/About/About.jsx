// import { useState } from 'react'
// import { Typewriter } from 'react-simple-typewriter'
// import { about } from '../../assets'

// const About = () => {
//   const [showmore, setShowmore] = useState(false);
//   const discriptin = (
//     <p>
//       My passion for learning and my drive to succeed make me a dedicated and
//       motivated computer science and engineering student. With my strong
//       foundation in web development and competitive programming, I’m
//       well-positioned to excel in his future career as a computer science.
//     </p>
//   );
//   const handleshow = () => {
//     setShowmore(!showmore);
//   };
//   return (
    
//     <section id='about' className='w-full h-[800px] px-20 items-center  '>
       

        
//         <div className=' md:flex md:gap-36 '>
//         <div className=" w-1/2 ">
//           <div className=" md:mt-48 text-xl">
//           <h1 className="text-xl md:text-2xl font-bold mt-4 md:mx-36 mb-10">
//           About Me
//         </h1>
//             <div className='flex sm:w-[350px]'>
//             <p className="text-left flex-grow ">
//               My name is Roba Chimdesa. I'm a 4th-year computer science and engineering student at Adama Science and Technology University. I
//               have a strong interest in web development and competitive
//               programming, and am constantly seeking to improve my skills in
//               these areas.
//             </p>
//             <p className="flex-grow text-left  hidden">
//               {" "}
//               I'm a self-motivated learner who is eager to explore new
//               technologies and programming languages. I enjoy taking on new
//               challenges and solving complex problems, which has led me to
//               develop a keen interest in competitive programming.
//             </p>{" "}
//             </div>
//             <button
//               onClick={handleshow}
//               className=" bg-sky-700 hover:bg-sky-500 sm:hidden px-10 md:p-2 md:px-6 rounded-3xl my-4 mx-28 "
//             >
//               {showmore ? "Hide" : "Show"} Details
//             </button>
//             {showmore && discriptin}
//           </div>
         
//         </div>
  

 
//         <div className="mt-10 md:mt-48">
         
        
//          <img src={about} alt="aboutimage" className="h-[250px] w-full md:w-4/5 md:h-4/6  rounded-2xl  transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-y-110  duration-500" />
//        </div>

//         </div>
      
//         </section>
  
//   );
     
  
   
  
// }

// export default About



import { useState } from 'react';  
import { Typewriter } from 'react-simple-typewriter';  
import { about } from '../../assets';  

const About = () => {  
  const [showMore, setShowMore] = useState(false);  

  const description = (  
    <p className='mt-4'>  
      My passion for learning and my drive to succeed make me a dedicated and  
      motivated computer science and engineering student. With a strong  
      foundation in web development and competitive programming, I’m  
      well-positioned to excel in my future career in computer science.  
    </p>  
  );  

  const handleShow = () => {  
    setShowMore(!showMore);  
  };  

  return (  
    <section id='about' className='w-full py-16 px-4 md:px-20'>  
      <div className='flex flex-col md:flex-row md:gap-10 items-center'>  
        <div className="w-full md:w-1/2">  
          <h1 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">  
            About Me  
          </h1>  
          <p className="text-left mb-4">  
            My name is Roba Chimdesa. I'm a 4th-year computer science and  
            engineering student at Adama Science and Technology University. I  
            have a strong interest in web development and competitive  
            programming, and am constantly seeking to improve my skills in  
            these areas.  
          </p>  
          {showMore && (  
            <p className="flex-grow text-left mb-4">  
              I'm a self-motivated learner who is eager to explore new  
              technologies and programming languages. I enjoy taking on new  
              challenges and solving complex problems, which has led me to  
              develop a keen interest in competitive programming.  
            </p>  
          )}  
          <button  
            onClick={handleShow}  
            className="bg-sky-700 hover:bg-sky-500 transition px-6 py-2 rounded-full mx-auto md:mx-0"  
          >  
            {showMore ? "Hide" : "Show"} Details  
          </button>  
        </div>  
        <div className="mt-10 md:mt-0 md:w-1/2">  
          <img  
            src={about}  
            alt="About Me"  
            className="h-64 w-full object-cover rounded-2xl   
                       transition ease-in-out delay-150 hover:-translate-x-1   
                       hover:scale-y-110 duration-500"  
          />  
        </div>  
      </div>  
      <div className="w-full mt-8 text-center">  
        <Typewriter  
          words={['Always Learning', 'Always Improving']}  
          loop={Infinity}  
          cursor  
          cursorStyle='|'  
          typeSpeed={70}  
          deleteSpeed={50}  
          delaySpeed={1000}  
        />  
      </div>  
    </section>  
  );  
};  

export default About;

