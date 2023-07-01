import React from 'react';
import Sliders from '../components/Sliders';
import SecondSlider from '../components/SecondSlider';
import ThirdSlider from '../components/ThirdSlider';


const PortfolioDetails = () => {
    return (
        <div className='container mx-auto  p-12'>
            <h1 className='text-center text-3xl mb-5'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                
               
                <div>
                    <Sliders></Sliders>
                </div>
                <div className='ml-5'>
                    <h1 className='text-3xl'>Meditation Website</h1>
                    <li>Users can Enroll class if they want, in which case they must login first. After enroll, user will go to the dashboard and see it. If he wants, he can delete it.</li>
                    <li>Users can Pay Money for Class</li>
                    <li> An admin can make a user as a instructor and admin . Admin can Approve,Deny and Feedback.</li>
                    <h1><span className='text-3xl'>Technology:</span> React.js, Bootstrap, MongoDB, Express.js, Node.js, Private route, Firebase Authentication.</h1>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4'><a href='https://iridescent-pithivier-338552.netlify.app/' target='_blank'>Live Link</a></button>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4 ml-3'><a href='https://github.com/ajoy45/ananda-meditation' target='_blank'>Code Link</a></button>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4 ml-3'><a href='https://github.com/ajoy45/ananda-meditation-server' target='_blank'>Server Link</a></button>
                </div> 
               

                <div>
                    <SecondSlider></SecondSlider>
                </div>
                <div className='ml-5'>
                    <h1 className='text-3xl'>Toy Website</h1>
                    <li>Users can add toy, in which case they must login first.User can see my toys that is protected</li>
                    <li>All toys that can search </li>
                    <li>Added authentication by firebase</li>
                    <h1><span className='text-3xl'>Technology:</span> React.js, Bootstrap, MongoDB, Express.js, Node.js, Private route, Firebase Authentication.</h1>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4'><a href='https://funny-kleicha-608cc8.netlify.app/' target='_blank'>Live Link</a></button>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4 ml-3'><a href='https://github.com/ajoy45/toy-client' target='_blank'>Code Link</a></button>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4 ml-3'><a href='https://github.com/ajoy45/toy-server' target='_blank'>Server Link</a></button>
                </div> 

                <div>
                    <ThirdSlider></ThirdSlider>
                </div>
                <div className='ml-5'>
                    <h1 className='text-3xl'>Food Recipe Website</h1>
                    <li>Login and Registration page</li>
                    <li> View Recipe that is protected without login can not view ant that would be favorite</li>
                    <h1><span className='text-3xl'>Technology:</span> React.js, Bootstrap, MongoDB, Express.js, Node.js, Private route, Firebase Authentication.</h1>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4'><a href='https://warm-brioche-4773ec.netlify.app/' target='_blank'>Live Link</a></button>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4 ml-3'><a href='https://github.com/ajoy45/chef-receipe' target='_blank'>Code Link</a></button>
                    <button className='px-3 py-2 bg-[#ff451b] rounded-xl text-xl mt-4 ml-3'><a href='https://github.com/ajoy45/chef-recipe-server' target='_blank'>Server Link</a></button>
                </div> 
               
            </div>
        </div>
    );
};

export default PortfolioDetails;