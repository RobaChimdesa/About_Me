import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import { navLinksdata } from '../../constants';
// import { navLinksdata } from './constants';
import { navLinksdata } from '../../constants';
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed ml-4 md:mx-52 border-gray-700 py-2 md:py-5 z-20 
    transition-transform duration-500 border rounded-full px-3 md:px-5 hover:-translate-y-1 
    md:hover:scale-110 hover:scale-100 ${show ? '' : '-translate-y-full'}`}>
      <ul className='flex items-center gap-3 md:gap-10'>
        {navLinksdata.map(({ id, title, link }) => (
          <li key={id} className='cursor-pointer font-normal text-gray-300 tracking-wide'>
            <Link
              activeClass='text-sky-500'
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
