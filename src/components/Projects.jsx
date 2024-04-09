import keebs from '../assets/keebs.png'
import idea from '../assets/idea.png'
import { Link } from 'react-router-dom'
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import '../css/index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


function Projects() {
  return (
    <div id='projects' className='projects-container z-10'>
        <div className="projects bg-neutral-200 dark:bg-neutral-600 h-auto w-full max-w-screen-xl flex px-20 py-16 rounded-3xl flex-col  ">
            <div className="title-container h-24 flex flex-row items-center justify-between">
                <p className="title text-black dark:text-white text-4xl font-inter font-semibold py-3 text-black">Recent Projects</p>
                <img className='h-40 px-5 -mr-9' src={idea} alt="" />
            </div>
            <div className="grids-container h-full flex flex-col justify-start my-5">
                <div className="row sm:flex-col h-[400px] w-full flex justify-around items-center lg:flex-row md:flex-col">
                    <div className="card bg-neutral-500 h-[260px] w-auto min-w-[370px] rounded-2xl drop-shadow-2xl p-0 m-0 overflow-hidden flex flex-col justify-start hover:h-[400px] transition: duration-500 ease-in-out">
                        <div className="body flex items-center justify-center">
                            <img className='h-[260px] rounded-2xl object-contain' src={keebs} alt="" />
                        </div>
                        <div className="text-container flex flex-col px-9">
                            <div className="title py-3 text-white font-inter font-semibold text-xl">
                                Keebs PH
                            </div>
                            <div className="info  text-neutral-300 font-inter font-meduim text-md">
                                React + Vite, Swiper JS, CSS
                            </div>
                        </div>
                        <div className="foot flex items-center justify-between px-9 pt-4">
                            <Link to="https://keebsph.netlify.app/" target='_blank'>
                                <button className='visit bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center'>
                                    <CiLink/> &nbsp; URL
                                </button>
                            </Link>
                            <Link to="https://github.com/Grim22/MP2" target='_blank'>
                                <button className="git bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center">
                                    <FaGithub /> &nbsp; Github
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="card bg-neutral-500 h-[260px] w-auto  min-w-[370px] rounded-2xl drop-shadow-2xl p-0 m-0 overflow-hidden flex flex-col justify-start hover:h-[400px] transition: duration-500 ease-in-out">
                        <div className="body flex items-center justify-center">
                            <img className='h-[260px] rounded-2xl object-contain' src={keebs} alt="" />
                        </div>
                        <div className="text-container flex flex-col px-9">
                            <div className="title py-3 text-white font-inter font-semibold text-xl">
                                Keebs PH
                            </div>
                            <div className="info  text-neutral-300 font-inter font-meduim text-md">
                                React + Vite, Swiper JS, CSS
                            </div>
                        </div>
                        <div className="foot flex items-center justify-between px-9 pt-4">
                            <Link to="https://keebsph.netlify.app/" target='_blank'>
                                <button className='visit bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center'>
                                    <CiLink/> &nbsp; URL
                                </button>
                            </Link>
                            <Link to="https://github.com/Grim22/MP2" target='_blank'>
                                <button className="git bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center">
                                    <FaGithub /> &nbsp; Github
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row sm:flex-col h-[400px] w-full flex justify-around items-center flex-row">
                    <div className="card bg-neutral-500 h-[260px] w-auto min-w-[370px] rounded-2xl drop-shadow-2xl p-0 m-0 overflow-hidden flex flex-col justify-start hover:h-[400px] transition: duration-500 ease-in-out">
                        <div className="body flex items-center justify-center">
                            <img className='h-[260px] rounded-2xl object-contain' src={keebs} alt="" />
                        </div>
                        <div className="text-container flex flex-col px-9">
                            <div className="title py-3 text-white font-inter font-semibold text-xl">
                                Keebs PH
                            </div>
                            <div className="info  text-neutral-300 font-inter font-meduim text-md">
                                React + Vite, Swiper JS, CSS
                            </div>
                        </div>
                        <div className="foot flex items-center justify-between px-9 pt-4">
                            <Link to="https://keebsph.netlify.app/" target='_blank'>
                                <button className='visit bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center'>
                                    <CiLink/> &nbsp; URL
                                </button>
                            </Link>
                            <Link to="https://github.com/Grim22/MP2" target='_blank'>
                                <button className="git bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center">
                                    <FaGithub /> &nbsp; Github
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="card bg-neutral-500 h-[260px] w-auto  min-w-[370px] rounded-2xl drop-shadow-2xl p-0 m-0 overflow-hidden flex flex-col justify-start hover:h-[400px] transition: duration-500 ease-in-out">
                        <div className="body flex items-center justify-center">
                            <img className='h-[260px] rounded-2xl object-contain' src={keebs} alt="" />
                        </div>
                        <div className="text-container flex flex-col px-9">
                            <div className="title py-3 text-white font-inter font-semibold text-xl">
                                Keebs PH
                            </div>
                            <div className="info  text-neutral-300 font-inter font-meduim text-md">
                                React + Vite, Swiper JS, CSS
                            </div>
                        </div>
                        <div className="foot flex items-center justify-between px-9 pt-4">
                            <Link to="https://keebsph.netlify.app/" target='_blank'>
                                <button className='visit bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out flex items-center'>
                                    <CiLink/> &nbsp; URL
                                </button>
                            </Link>
                            <Link to="https://github.com/Grim22/MP2" target='_blank'>
                                <button className="git bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
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