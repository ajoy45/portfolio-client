import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' bg-[#22222a] py-2 fixed top-0 left-0 w-full z-20'>
            <div className="navbar container mx-auto  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-52">
                            <li className='mr-12 cursor-pointer'><a>About</a></li>
                            <Link to='/details'> <li className='mr-12 cursor-pointer'><a>Projects</a></li></Link>
                            <li className='mr-12 cursor-pointer mb-4'><a>Contact</a></li>
                            <li ><a className="px-4 py-1 rounded-xl bg-[#ff451b] uppercase text-xl">Resume</a></li>
                        </ul>
                    </div>
                   <Link to='/'> <a className="btn bg-purple-200 rounded-2xl border-0 text-black normal-case text-xl italic font-bold">Ajoy Biswas</a></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-xl ">
                       <Link to='/about'> <li className='mr-12 cursor-pointer'><a >About</a></li></Link>
                      <Link to='/details'> <li className='mr-12 cursor-pointer'><a>Projects</a></li></Link>
                        <li className='mr-12 cursor-pointer'><a>Contact</a></li>
                        <li ><a className="px-4 py-1 rounded-xl bg-[#ff451b] uppercase text-xl">Resume</a></li>
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;