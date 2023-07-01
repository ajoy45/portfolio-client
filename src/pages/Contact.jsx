import React from 'react';
import { SlCallOut } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { CiLocationArrow1 } from 'react-icons/ci';
const Contact = () => {
    return (
        <div className='container mx-auto bg-[#494b50] rounded-tl-[150px] rounded-br-[150px]'>
            <h1 className='text-center text-3xl p-12'>Contact me for your work</h1>
            <div className='flex justify-evenly items-center p-12'>
                <div>
                    <div className='flex  items-center mb-6'>
                        <div>
                            <SlCallOut className=' bg-red-400 text-6xl rounded-full p-4' ></SlCallOut>
                        </div>
                        <div className='ml-4'>
                            <h1 className='text-3xl'>Call Me</h1>
                            <p className='text-xl'>+8801746922593</p>
                        </div>
                    </div>
                    <div className='flex  items-center mb-6'>
                        <div>
                            < HiOutlineMail className=' bg-red-400 text-6xl rounded-full p-4' ></ HiOutlineMail >
                        </div>
                        <div className='ml-4'>
                            <h1 className='text-3xl'>Email Me</h1>
                            <p className='text-xl'>ajoypust@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div>
                            <CiLocationArrow1 className=' bg-red-400 text-6xl rounded-full p-4' ></CiLocationArrow1>
                        </div>
                        <div className='ml-4'>
                            <h1 className='text-3xl'>Address</h1>
                            <p className='text-xl'>Narail,Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form >
                        <input type="text" placeholder="Name" className="input input-bordered  w-full max-w-xs bg-transparent mb-4" />
                        <br />
                        <input type="email" placeholder="Email" className="input input-bordered  w-full max-w-xs bg-transparent mb-4" />
                        <br />
                        <textarea className="textarea input-bordered w-full bg-transparent" placeholder="Write Details"></textarea>
                        <input className='px-4 py-3 bg-red-400 w-full rounded-lg' type="submit" value="Contact" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;