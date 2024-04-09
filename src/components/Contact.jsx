import { Link } from 'react-router-dom';

import callme from '../assets/callme.png'
import like from '../assets/like.png'
import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import gmail from '../assets/gmail.png'
import arrowRight from '../assets/arrow-right.png'
import resume from '../assets/RESUME.pdf'
import down from '../assets/down.png'
import resumee from '../assets/resume.png'
import email from '../assets/email.png'
import number from '../assets/number.png'

function Contact() {
  return (
    <div id="contact" className="contact-container sticky top-0">
        <div className="contact  bg-white dark:bg-neutral-700 md:h-auto h-auto w-full max-w-screen-xl flex flex-col p-20 rounded-3xl ">
            <div className="title-container flex justify-between">
                <div className="title text-black dark:text-white flex items-center text-5xl font-inter font-semibold py-3">
                    Contact me.
                </div>
                <div className="pic-container ">
                    <img className='h-32' src={callme} alt="" />
                </div>
            </div>
            <div className="grid sm:h-[1400px] md:h-[50vh] lg:h-[80vh] xl:h-[747px] w-full mt-24 sm:grid-rows-6 sm:grid-cols-2  md:grid-rows-3 md:grid-cols-4 gap-5">
                <div className="bg-blue-600 h-[238px
                ] rounded-3xl sm:col-span-2 md:col-span-2 drop-shadow-lg flex items-center justify-center">
                    <CiLinkedin  className='h-[40%] w-auto text-white'/>
                    <div className="button-container absolute bottom-5 right-5">
                    <button className='bg-zinc-950/50 p-2 rounded-[50%] hover:p-3 hover:bg-zinc-700/50 transitiion duration-300  ease-in-out'> 
                        <Link to="https://linkedin.com/in/allen-bandian-096685169/" target='_blank'>
                            <img className='h-8' src={arrowRight} alt="" />
                        </Link>
                    </button>
                    </div>  
                </div>
                <div className="bg-violet-700 h-[238px
                ] rounded-3xl sm:row-span-2 md:row-span-2 drop-shadow-lg flex items-center justify-center">
                    <div className="hover-container overflow-hidden h-[30%] w-[90%] over hover:py-10 duration-300 ease-in-out">
                        <div className="pic-container h-[80%] flex items-center justify-center ">
                            <img className='object-contain h-[9vh]' src={number} alt="" />
                        </div>
                        <div className="email flex items-center justify-center font-inter font-medium text-violet-200 mt-6">
                            +639 454 1234
                        </div>
                    </div>
                </div>
                <div className="bg-stone-800  h-[238px
                ] rounded-3xl drop-shadow-lg flex flex-col items-center justify-center">
                        <img className='h-[40%]' src={resumee} alt="" />
                    <a className="button-container absolute bottom-5 right-5" href={resume} download='Allen_Bandian_Resume.pdf'>
                        <button className='bg-zinc-950/50 p-2 rounded-[50%] hover:p-3 hover:bg-zinc-700/50 transitiion duration-300  ease-in-out'>
                            <img  className='h-8' src={down} alt="" />
                        </button>
                    </a>
                </div>

                <div className="bg-neutral-900 h-[238px
                ] rounded-3xl sm:col-span-1 drop-shadow-lg flex items-center justify-center">
                    <FaGithub className='h-[30%] w-auto text-white'/>
                    <div className="button-container absolute bottom-5 right-5">
                        <button className='bg-zinc-950/50 p-2 rounded-[50%] hover:p-3 hover:bg-zinc-700/50 transitiion duration-300  ease-in-out'> 
                            <Link to="https://github.com/Grim22" target='_blank'>
                                <img className='h-8' src={arrowRight} alt="" />
                            </Link>
                        </button>
                    </div>  
                </div>
                <div className="bg-neutral-400 h-[238px
                ] rounded-3xl drop-shadow-lg flex items-center justify-center">
                        <img className='h-[60%] drop-shadow-xl object-contain' src={like} alt="" />
                </div>
                <div className="bg-neutral-300 h-[238px
                ] sm:row-span-2 md:row-span-2 rounded-3xl drop-shadow-lg flex items-center justify-center">
                    <div className="hover-container overflow-hidden h-[30%] w-[90%] over hover:py-10 duration-300 ease-in-out">
                        <div className="pic-container h-[80%] flex items-center justify-center ">
                            <img className='object-contain h-[11vh]' src={gmail} alt="" />
                        </div>
                        <div className="email flex items-center justify-center font-inter font-medium text-neutral-700 mt-6">
                            allenbandian2203@gmail.com
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-100 h-[238px
                ] rounded-3xl drop-shadow-lg flex items-center justify-center">
                    <SiIndeed className='h-[30%] w-auto text-blue-900'/>
                    <div className="button-container text- absolute bottom-5 right-5">
                        <button className='bg-zinc-950/50 p-2 rounded-[50%] hover:p-3 hover:bg-zinc-700/50 transitiion duration-300  ease-in-out'> 
                            <Link to="https://github.com/Grim22" target='_blank'>
                                <img className='h-8' src={arrowRight} alt="" />
                            </Link>
                        </button>
                    </div>  
                </div>
                <div className="bg-green-400 h-[238px
                ] sm:col-span-2 md:col-span-2 rounded-3xl drop-shadow-lg flex items-center justify-center">
                    <img className='h-[35%] drop-shadow-xl object-contain' src={email} alt="" />
                    <div className="button-container text- absolute bottom-5 right-5">
                        <button className='bg-zinc-950/50 p-2 rounded-[50%] hover:p-3 hover:bg-zinc-700/50 transitiion duration-300  ease-in-out'> 
                            <Link to="/email">
                                <img className='h-8' src={arrowRight} alt="" />
                            </Link>
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact