import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const SkillCard = ({ skill }) => {
    console.log(skill)
    return (
        <Zoom duration={1000}>
            <>
                <div className='border border-1 border-white hover:bg-[#46271a]  p-12'>
                    <img className='w-[120px] h-[120px] ' src={skill.logo} alt='logo'></img>
                    <h1 className='text-center pt-6'>{skill.name}</h1>
                </div>
            </>
        </Zoom>
    );
};

export default SkillCard;