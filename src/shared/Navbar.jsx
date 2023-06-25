import React from 'react';

const Navbar = () => {
    return (
        <nav className=' bg-[#22222a] py-2'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-52">
                            <li className='mr-12 cursor-pointer'><a>About</a></li>
                            <li className='mr-12 cursor-pointer'><a>Projects</a></li>
                            <li className='mr-12 cursor-pointer mb-4'><a>Contact</a></li>
                            <li ><a className="px-4 py-1 rounded-xl bg-[#ff451b] uppercase text-xl">Resume</a></li>
                        </ul>
                    </div>
                    <a className="btn bg-purple-200 rounded-2xl border-0 text-black normal-case text-xl italic font-bold">Ajoy Biswas</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-xl ">
                        <li className='mr-12 cursor-pointer'><a>About</a></li>
                        <li className='mr-12 cursor-pointer'><a>Projects</a></li>
                        <li className='mr-12 cursor-pointer'><a>Contact</a></li>
                        <li ><a className="px-4 py-1 rounded-xl bg-[#ff451b] uppercase text-xl">Resume</a></li>
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;