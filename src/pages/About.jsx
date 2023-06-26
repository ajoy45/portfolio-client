import React from 'react';
import img from '../assets/ajoy.png'
import { Slide } from 'react-awesome-reveal';
const About = () => {
    return (
       <Slide duration={6000} direction='left'>
         <div className=' md:flex justify-between items-center bg-[#494b50] rounded-tl-[150px] rounded-br-[150px] py-24 gap-8 lg:gap-0 mb-6'>
            <div className='md:relative px-12'>
                <div className='hidden lg:block'>
                    <img className='w-[70%] h-[70%] rounded-2xl bg-[#2d2a2a] ' src={img} alt="" />
                </div>
                <div className=' lg:absolute lg:top-[25px] lg:left-[219px] xl:top-[80px] xl:left-[273px] bg-[#ff451b] pl-12 md:p-12 rounded-xl '>
                    <h3>Name</h3>
                    <h1>Ajoy Biswas</h1>
                    --------------------
                    <h3>Email</h3>
                    <h1>ajoypust@gmail.com</h1>
                    --------------------
                    <h3>Phone</h3>
                    <h1>+8801746922593</h1>
                    --------------------
                    <h3>Address</h3>
                    <h1>Narail,Bangladesh</h1>
                    --------------------
                </div>
            </div>
            <div className='px-12 mt-5 lg:mt-0 lg:pr-12 lg:ml-24'>
                <h3 className='text-[#ff451b] text-5xl'>About Me</h3>
                <h1 className='text-4xl py-5'>World Leading Web Developer</h1>
                <p className='text-xl'>I am Ajoy Biswas. I am a front-End developer.<br/> I can create website with Javascript and React js <br /> I have obtained B.Sc in EEE from Pabna university of science and technology</p>
                <a href="https://drive.google.com/file/d/1guqROH4G_VQmsw933G7Il3KuFMbZyXMK/view?usp=sharing" target='_blank'><button className='px-3 py-2 bg-[#ff451b] uppercase mt-5 rounded-lg' >download Resume</button></a>
            </div>
        </div>
       </Slide>
    );
};

export default About;