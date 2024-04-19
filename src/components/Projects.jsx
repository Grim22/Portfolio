import keebs from '../assets/keebs.png'
import idea from '../assets/idea.png'
import chat from '../assets/chat.png'
import { Link } from 'react-router-dom'
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Projects() {
  return (
    <div id='projects' className='projects-container z-10'>
        <div className="projects bg-neutral-200 dark:bg-neutral-600 h-auto w-full flex p-10 md:max-w-screen-xl md:px-20 md:py-16 rounded-3xl flex-col  ">
            <div className="title-container w-full flex flex-col-reverse items-center text-center lg:flex-row lg:text-start">
                <p className="title w-full text-green-500 text-5xl font-SFbold py-3 drop-shadow-xl ">Recent Projects.</p>
                <div className="img-container w-full flex items-center justify-center h-40 lg:justify-end">
                    <img className='object-contain h-48 drop-shadow-xl ' src={idea} alt="" />
                </div>
            </div>
            <div className="grids-container h-full flex flex-col justify-start mt-10">
                <div className="row h-auto w-full flex flex-col justify-around items-center lg:flex-row">
                    <div className="card bg-neutral-500 h-auto pb-5 w-[370px] mb-10 rounded-2xl drop-shadow-2xl p-0 m-0 overflow-hidden flex flex-col justify-start ">
                        <div className="body flex items-center justify-center">
                            <img className='h-[260px] rounded-2xl object-contain' src={keebs} alt="" />
                        </div>
                        <div className="text-container flex flex-col px-9 h-[120px]">
                            <div className="title py-3 text-white font-SFmedium text-xl">
                                Keebs PH
                            </div>
                            <div className="info  text-neutral-300 font-SFregular text-md">
                                React + Vite, Swiper JS, CSS
                            </div>
                        </div>
                        <div className="foot flex items-center justify-between px-9 pt-4">
                            <Link to="https://keebsph.netlify.app/" target='_blank'>
                                <button className='visit bg-[#30db5b] px-5 py-2 rounded-full text-white font-SFmedium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center'>
                                    <CiLink/> &nbsp; URL
                                </button>
                            </Link>
                            <Link to="https://github.com/Grim22/KEEBS" target='_blank'>
                                <button className="git bg-[#30db5b] px-5 py-2 rounded-full text-white font-SFmedium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center">
                                    <FaGithub /> &nbsp; Github
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="card bg-neutral-500 h-auto pb-5 w-[370px] mb-10 rounded-2xl drop-shadow-2xl p-0 m-0 overflow-hidden flex flex-col justify-start ">
                        <div className="body bg-neutral-100 flex items-center justify-center rounded-2xl">
                            <img className='h-[260px] rounded-2xl object-contain' src={chat} alt="" />
                        </div>
                        <div className="text-container flex flex-col px-9 h-[120px]">
                            <div className="title py-3 text-white font-SFmedium text-xl">
                                CONVO
                            </div>
                            <div className="info  text-neutral-300 font-SFregular text-md">
                                React , Tailwind CSS, DaisyUI Themes 
                                Firebase
                            </div>
                        </div>
                        <div className="foot flex items-center justify-between px-9 pt-4">
                            <Link to="https://convo-ochre.vercel.app/" target='_blank'>
                                <button className='visit bg-[#30db5b] px-5 py-2 rounded-full text-white font-SFmedium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center'>
                                    <CiLink/> &nbsp; URL
                                </button>
                            </Link>
                            <Link to="https://github.com/Grim22/Chat-App" target='_blank'>
                                <button className="git bg-[#30db5b] px-5 py-2 rounded-full text-white font-SFmedium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center">
                                    <FaGithub /> &nbsp; Github
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects