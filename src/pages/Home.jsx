import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaLinkedinIn} from 'react-icons/fa';
import image from '../assets/ajoy.png';
import { Zoom } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <div className=' md:flex justify-between items-center py-12'>
            <div className='text-center md:text-start'>
                <h1 className='font-extrabold text-6xl leading-relaxed'>I'm <br />AJOY <br />BISWAS</h1>

                <h1 className='text-5xl mb-5 text-purple-400'>
                    <Typewriter className='text-3xl'
                        options={{
                            strings: ['Web Designer', 'Front-End Developer','React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

                <div className='flex justify-center md:justify-start mb-6 md:mb-0'>
                    <a className='text-3xl mr-3 text-blue-500 ' href="https://www.facebook.com/ajoy.biswas.18041/"><FaFacebook></FaFacebook></a>
                    <a className='text-3xl mr-3 text-blue-500 ' href="https://github.com/ajoy45"><FaGithub></FaGithub></a>
                    <a className='text-3xl mr-3 text-blue-500 ' href="https://www.linkedin.com/in/ajoy-biswas-942b1b211/"><FaLinkedinIn></FaLinkedinIn></a>
                    
                </div>
            </div>
            <Zoom duration={5000}>
                <div className='bg-[#ff451b] flex justify-center p-4 rounded-3xl '>
                    <img className='w-[70%] h-[70%] rounded-2xl bg-[#2d2a2a] ' src={image} alt="" />
                </div>
            </Zoom>
        </div>
    );
};

export default Home;