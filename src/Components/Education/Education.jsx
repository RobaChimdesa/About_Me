import React,{ useRef,useEffect,useState } from 'react'
import { Certificates } from '../../constants/certificate'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Education = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  

  return (
    <section id='education' className='gap-10 w-full h-[800px] items-center px-20 pt-10 '>
       <h1 className="text-white text-2xl md:mx-56 md:mt-16 mb-7 font-bold ">
          Education
        </h1>
      <div className=' md:ml-52 gap-12 md:flex md:mb-10'>
      <div className="border-l-2 border-sky-500 border-solid  hover:border-yellow-500  p-4 mb-3  md:w-2/5 w-2/2  rounded-xl  bg-zinc-900 transition ease-in-out delay-150 hover:bg-black hover:-translate-y-1 hover:scale-105  duration-300 ...">
            <p className="text-xl md:text-2xl text-red-500">2016-2020</p>
            <h1 className="text-white text-xl md:text-2xl">High School Diploma</h1>
            <p className="">
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>
          <div className="border-l-2 border-sky-500 border-solid  hover:border-yellow-500 p-4  md:w-2/5  rounded-xl bg-zinc-900 hover:bg-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 ...">
            <p className="text-xl md:text-2xl text-red-500">2020-present</p>
            <h1 className="text-white text-xl md:text-2xl">Bachelor's Degree</h1>
            <p className="">
            I am currently attending a five-year computer science and
              engineering course at Adama Science and Technology University. As
              a 4'th-year student, I have already completed a significant
              portion of the program.
            </p>
          </div>
          
       </div>  
       {" "}
            <h1 className=" md:mx-56 mt-2 md:mb-3 font-bold text-2xl">
              Certificates
            </h1>  
      <div className='relative w-full max-w-screen-lg mx-auto flex items-center'>
        {/* <KeyboardDoubleArrowLeftIcon onClick={() => scroll('left')}/> */}
        <button onClick={() => scroll('left')}
         className={` p-1 rounded-full z-10 ${canScrollLeft ? 'text-green-500' : 'text-red-500'}`}
       
         disabled={!canScrollLeft}
        
        ><ArrowBackIosNewIcon/></button>
        <div  className=' flex overflow-x-scroll space-x-4 p-4 scrollbar-hide' 
        ref={scrollContainerRef} >
        
        {Certificates.map((item )=>(
          <div key={item.id} className="border-l-2 border-sky-500 border-solid  hover:border-yellow-500 rounded-xl min-w-[300px] md:min-w-[450px] md:h-[220px] h-[120px] bg-zinc-900  hover:bg-black items-center  hover:scale-105 ease-in-out duration-500">
            <p className='pl-6'>{item.name}</p>
             <a href={item.img} target='_blank'>
             <img
           src={item.img} alt='hello'

           className=' w-[445px] h-[100px] md:h-[200px] p-2 cursor-pointer ml-1'

          />
             </a>
          
          </div>
          
         
       ))}
        </div>
        <button onClick={() => scroll('right')} 
         className={`rounded-full p-1 ${canScrollRight ? 'text-green-500' : 'text-red-500'}`}
         
         disabled={!canScrollRight}
        
        
        ><ArrowForwardIosIcon /></button>
        
          {/* <KeyboardDoubleArrowRightIcon onClick={() => scroll('right')}/> */}
     
      </div>
    </section>
  )
}

export default Education
