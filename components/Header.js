"use client"

import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react'; 
import useThemeStore from '../store/themeStore';
import { useState } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  const [toggle, setToggle] = useState(false)

  return (
    <>


      <header className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} z-20 fixed w-full`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex ' >
          {theme === 'light' ?<img src={`/static/Icon1.svg`} className='text-white pb-2' alt="Icon1.svg" /> : 
          <img src={`/static/Icon2.svg`} className='text-white h-6 mt-1 ' alt="Icon2.svg" />
          }
            
            <span className={`p-2 ${theme === 'light' ? "text-black" : "text-white"} font-bold md:text-2xl text-xl pt-1`}>Nexcent</span>

          </div>

          <nav className="md:flex  hidden items-center justify-center gap-16 ">
            <Link href="/">
              Home
            </Link>
            <Link href="/">
              Service
            </Link>
            <Link href="/">
              Feature
            </Link>
            <Link href="/">
              Product
            </Link>
            <Link href="/">
              Testimonial
            </Link>
            <Link href="/">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="md:flex hidden items-center gap-4">
              <Link href="/" className="text-green-600">Login</Link>
              <button className="bg-green-600 py-2 px-4 rounded-md text-sm text-white">Sign up</button>
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 ${theme === 'light' ? "text-gray-700" : "text-white"} rounded flex items-center`}>
              {theme === 'light' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}

            </button>


            <div className=' items-center md:hidden flex'>
              <button onClick={() => setToggle(s => !s)}>
                {
                  toggle ? <X className="h-8 w-8 " /> : <Menu className="h-8 w-8 " />
                }
              </button>
            </div>
          </div>

        </div>


        <nav className={`md:hidden  ${toggle ? "flex" : "hidden"} pt-4  flex-col pb-8  pl-3 border-t border-b  gap-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
          <Link href="/" >
            Home
          </Link>
          <Link href="/">
            Service
          </Link>
          <Link href="/">
            Feature
          </Link>
          <Link href="/">
            Product
          </Link>
          <Link href="/">
            Testimonial
          </Link>
          <Link href="/">
            FAQ
          </Link>

          <div className=" flex items-center gap-4">
              <Link href="/" className="text-green-600">Login</Link>
              <button className="bg-green-600 py-2 px-4 rounded-md text-sm text-white">Sign up</button>
            </div>

            
        </nav>
      </header>
    
       

     

    </>
  );
};

export default Header;
