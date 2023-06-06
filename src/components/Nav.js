import React from 'react';
// import data
import { navData } from '../data';
import { Link } from 'react-scroll'


const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link activeClass="active" to={item.name} smooth={true} offset={50} duration={500}
                className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'
              >
                {item.name}
              </Link>
              {/* <a
                className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'
                href={item.href}
              >
                {item.name}
              </a> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
