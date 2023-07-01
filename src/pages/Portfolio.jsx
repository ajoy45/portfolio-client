import React from 'react';
import image1 from '../assets/meditatiob1 (1).png'
import image2 from '../assets/toy.png'
import image3 from '../assets/recipe.png'
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return (
        <Slide duration={6000}>
            <div className='container mx-auto bg-[#494b50] rounded-tl-[150px] rounded-br-[150px] mb-6'>
            <div>
                <h1 className='text-center text-3xl pt-12'>Portfolio</h1>
            </div>
            <div className='md:flex gap-6 p-12 justify-center flex-wrap'>
                <div className='border-white border md:w-1/4  mb-4 hover:bg-[#46271a]'>
                    <div className='p-6'>
                        <img  src={image1} alt="" />
                        <h1 className='text-3xl my-4 font-bold'>Meditation Website</h1>
                        <Link to='/details'><button className='px-3 py-2 bg-[#ff451b] rounded-lg text-xl'>Details</button></Link>
                    </div>
                </div>
                <div className='border-white border md:w-1/4 mb-4 hover:bg-[#46271a]'>
                    <div className='p-6'>
                        <img src={image2} alt="" />
                        <h1 className='text-3xl my-4 font-bold'>Toys Website</h1>
                        <Link to='/details' className='px-3 py-2 bg-[#ff451b] rounded-lg text-xl'>Details</Link>
                    </div>
                </div>
                <div className='border-white border md:w-1/4 mb-4 hover:bg-[#46271a]'>
                    <div className='p-6'>
                        <img src={image3} alt="" />
                        <h1 className='text-3xl my-4 font-bold'>Food Recipe Website</h1>
                        <Link to='/details' className='px-3 py-2 bg-[#ff451b] rounded-lg text-xl'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
        </Slide>
    );
};

export default Portfolio;