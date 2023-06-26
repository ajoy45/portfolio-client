import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';
import { Slide } from 'react-awesome-reveal';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const handelAll=()=>{
        axios.get('http://localhost:5000/skills')
            .then(data => setSkills(data.data))
    }
    const handelFrontEnd=()=>{
        axios.get('http://localhost:5000/frontend')
        .then(data=>setSkills(data.data))
    }
    const handelBackEnd=()=>{
        axios.get('http://localhost:5000/backend')
        .then(data=>setSkills(data.data))
    }
    const handelTools=()=>{
        axios.get('http://localhost:5000/tools')
        .then(data=>setSkills(data.data))
    }
    useEffect(() => {
        axios.get('http://localhost:5000/skills')
            .then(data => setSkills(data.data))
    }, [])
   
    return (
      <Slide duration={6000} direction='right'>
          <div className='bg-[#494b50] rounded-tl-[150px] rounded-br-[150px] py-24'>
            <div className='flex justify-center '>
                <div className='text-center '>
                    <h1 className='text-3xl'>Programming Skills</h1>
                    
                        <button onClick={handelAll} className='mb-4 md:mb-0 px-7 py-2 bg-[#ff451b] mr-5 text-2xl mt-12 rounded-2xl'>All</button>
                        <button onClick={handelFrontEnd} className='px-7 py-2 bg-[#ff451b] mr-5 text-2xl rounded-2xl'>Front End</button>
                        <button onClick={handelBackEnd} className='px-7 py-2 bg-[#ff451b] mr-5 text-2xl rounded-2xl'>Back End</button>
                        <button onClick={handelTools} className='px-7 py-2 bg-[#ff451b] mr-5 text-2xl rounded-2xl'>Tools</button>
                    
                </div>
            </div>
            <div className='flex flex-wrap px-12 mt-5 gap-5 '>
                {
                    skills.map(skill=><SkillCard
                     key={skill._id}
                     skill={skill}
                    ></SkillCard>)
                }
            </div>
        </div>
      </Slide>
    );
};

export default Skills;