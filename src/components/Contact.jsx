import { Link } from 'react-router-dom';
import { useState } from 'react';

import callme from '../assets/callme.png'
import like from '../assets/like.png'
import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import gmail from '../assets/gmail.png'
import resume from '../assets/RESUME.pdf'
import down from '../assets/down.png'
import resumee from '../assets/resume.png'
import email from '../assets/email.png'
import number from '../assets/number.png'

function Contact() {

   const [isNumberClicked, setIsNumberClicked] = useState(false);

   const handleNumberClick = () => {
    setIsNumberClicked(!isNumberClicked)
   }

   const [isGmailClicked, setIsGmailClicked] = useState(false);

   const handleGmailClick = () => {
    setIsGmailClicked(!isGmailClicked)
   }

  return (
    <div id="contact" className="contact-container sticky">
        <div className="contact bg-transparent  h-auto w-full  flex flex-col p-10 md:max-w-screen-xl lg:p-20 rounded-3xl ">
            <div className="title-container h-auto w-full flex  flex-col-reverse items-center text-center lg:flex-row lg:justify-between">
                <div className="title text-green-500 flex items-center text-5xl font-SFbold py-3 drop-shadow-xl ">
                    Contact me.
                </div>
                <div className="pic-container ">
                    <img className='h-40 contain drop-shadow-xl ' src={callme} alt="" />
                </div>
            </div>
            <div className="grid h-auto grid-rows-5 grid-cols-2 sm:h-[1400px] md:h-[50vh] xl:h-[747px] w-full mt-24 sm:grid-rows-6 sm:grid-cols-2  md:grid-rows-3 md:grid-cols-4 gap-5">
                <Link to="https://linkedin.com/in/allen-bandian-096685169/" target='_blank' className="bg-blue-600 rounded-3xl col-span-2 md:col-span-2 drop-shadow-lg flex items-center justify-center hover:bg-blue-700 transition duration-150">
                    <CiLinkedin  className='h-[40%] w-auto text-white'/>
                </Link>
                <div className="bg-violet-700 rounded-3xl row-span-2 md:row-span-2 drop-shadow-lg flex items-center justify-center" onClick={handleNumberClick}>
                    {isNumberClicked ? 
                    <div className='number-container text-white font-SFmedium'>+63945 853 3063 </div>
                    : 
                    <div className="pic-container h-[80%] flex items-center justify-center ">
                            <img className='object-contain h-[9vh]' src={number} alt="" />
                        </div>}
                </div>
                <div className="bg-stone-800 rounded-3xl drop-shadow-lg flex flex-col items-center justify-center">
                        <img className='h-[40%]' src={resumee} alt="" />
                    <a className="button-container absolute bottom-5 right-5" href={resume} download='Allen_Bandian_Resume.pdf'>
                        <button className='bg-zinc-950/50 p-2 rounded-[50%] hover:p-3 hover:bg-zinc-700/50 transition duration-300  ease-in-out'>
                            <img  className='h-4 sm:h-8 md:h-6' src={down} alt="" />
                        </button>
                    </a>
                </div>

                <Link to="https://github.com/Grim22" target='_blank' className="bg-neutral-900 rounded-3xl col-span-1 md:col-span-1 drop-shadow-lg flex items-center justify-center hover:bg-neutral-950 transition duration-150">
                    <FaGithub className='h-[30%] w-auto text-white'/>
                </Link>
                <div className="bg-neutral-400 rounded-3xl drop-shadow-lg flex items-center justify-center">
                        <img className='h-[60%] drop-shadow-xl object-contain' src={like} alt="" />
                </div>
                <div className="bg-neutral-300 sm:h-[238px
                ] row-span-2 md:row-span-2 rounded-3xl drop-shadow-lg flex items-center justify-center content-center" onClick={handleGmailClick}>
                        {isGmailClicked ? 
                        <div className="pic-container h-[80%] w-full flex items-center justify-center content-center text-wrap">
                            <a href='mailto:allenbandian2203@gmail.com' className='text-black font-SFmedium text-sm'><p className='h-24 w-[60%] text-nowrap flex items-center'>allenbandian2203 <br className='lg:hidden'/> @gmail.com</p></a>
                        </div>
                         :
                        <div className="pic-container h-[80%] w-full flex items-center justify-center">
                            <img className='object-contain h-[11vh]' src={gmail} alt="" />
                        </div>}
                </div>
                <Link to="https://github.com/Grim22" target='_blank' className="bg-neutral-100  rounded-3xl drop-shadow-lg flex items-center justify-center hover:bg-neutral-200 transition duration-150">
                    <SiIndeed className='h-[30%] w-auto text-blue-900'/>
                </Link>
                <Link to="/email" className="bg-green-400 col-start-2 md:col-span-2 rounded-3xl drop-shadow-lg flex items-center justify-center hover:bg-green-500 transition duration-150">
                    <img className='h-[35%] drop-shadow-xl object-contain' src={email} alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact