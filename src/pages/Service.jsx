import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FaCss3 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { GrReactjs } from 'react-icons/gr';
import {BiLogoNodejs } from 'react-icons/bi';
import { Slide } from 'react-awesome-reveal';
const Service = () => {
    
    return (
        <Slide duration={6000} direction='right'>
            <div className='container mx-auto bg-[#494b50] rounded-tl-[150px] rounded-br-[150px]'>
            <h1 className='text-3xl pt-12 text-center'>service</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-12 '>
                <div className='text-center border border-1 border-white p-6 hover:bg-[#46271a]'>
                    <BiCodeAlt className='mx-auto bg-red-400 text-6xl rounded-full p-4' ></BiCodeAlt>
                    <h1 className='text-3xl py-3'>HTML 5</h1>
                    <p className='text-md'>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach..</p>
                </div>
                <div className='text-center border border-1 border-white p-6 hover:bg-[#46271a]'>
                    <FaCss3 className=' mx-auto bg-red-400 text-6xl rounded-full p-4' ></FaCss3>
                    <h1 className='text-3xl py-3'>CSS3</h1>
                    <p className='text-md'>The biggest advantage of CSS is that it allows the separation of style and layout from the content of the document. Here are some more advantages, why one should start using CSS?</p>
                </div>
                <div className='text-center border border-1 border-white p-6 hover:bg-[#46271a]'>
                    <FaBootstrap  className='mx-auto bg-red-400 text-6xl rounded-full p-4'></FaBootstrap>
                    <h1 className='text-3xl py-3'>Bootstrap 5</h1>
                    <p className='text-md'>Bootstrap is a powerful front-end framework for faster and easier web development. It includes HTML and CSS based design templates for creating common user interface components like forms, buttons..</p>
                </div>
                <div className='text-center border border-1 border-white p-6 hover:bg-[#46271a]'>
                    <RiJavascriptFill  className='mx-auto bg-red-400 text-6xl rounded-full p-4'></RiJavascriptFill>
                    <h1 className='text-3xl py-3'>Javascript</h1>
                    <p className='text-md'>JavaScript is the most popular and widely used client-side scripting language. Client-side scripting refers to scripts that run within your web browser. JavaScript is designed to..</p>
                </div>
                <div className='text-center border border-1 border-white p-6 hover:bg-[#46271a]'>
                    <GrReactjs  className='mx-auto bg-red-400 text-6xl rounded-full p-4'></GrReactjs>
                    <h1 className='text-3xl py-3'>React js</h1>
                    <p className='text-md'>JavaScript is the most popular and widely used client-side scripting language. Client-side scripting refers to scripts that run within your web browser. JavaScript is designed to..</p>
                </div>
                <div className='text-center border border-1 border-white p-6 hover:bg-[#46271a]'>
                    <BiLogoNodejs  className='mx-auto bg-red-400 text-6xl rounded-full p-4'></BiLogoNodejs>
                    <h1 className='text-3xl py-3'>Node js</h1>
                    <p className='text-md'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code</p>
                </div>
            </div>
        </div>
        </Slide>
    );
};

export default Service;