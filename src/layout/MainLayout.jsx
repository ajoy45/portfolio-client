import React from 'react';
import Navbar from '../shared/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skills></Skills>
       
        </div>
    );
};

export default MainLayout;