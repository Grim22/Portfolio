
import '../css/About.css'
import welcome  from '../assets/welcome.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import figma from '../assets/figma.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';



function About() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
  return (
    <div id='about' className="about-container w-full h-auto flex justify-center content-center items-center sticky top-0">
        <div className="about  bg-white dark:bg-neutral-700 md:h-4/6 h-4/6 w-full max-w-screen-xl flex p-20 rounded-3xl flex-row-reverse">
            <div className="left w-8/12 ml-24">
                <div className="text-container w-full flex flex-col justify-center items-start">
                    <div className="img-container h-40 flex -ml-4">
                            <img className='object-contain h-40' src={welcome} alt="" />
                        </div>
                    <div className="title text-black dark:text-white text-5xl font-inter font-semibold py-3">
                        About me.
                    </div>
                    <div className="sub text-black dark:text-white text-2xl font-inter font-medium py-3">
                        I'm a Creative Web Designer and Front End Developer from Batangas, Philippines.
                    </div>
                    <div className="about-me text-black dark:text-white text-md font-inter font-medium py-3">
                        Hello! My name is Allen. I am a graduate of Bachelor of Science in Aviation Electronics Technology and Full Stack Web Development at KodeGo.
                        <br />
                        I enjoy taking complex problems and turning them into simple and beautiful interface designs.
                        <br /><br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti vitae at consequuntur, rerum perferendis repudiandae quae natus quas dolorem voluptas ad rem reiciendis, optio obcaecati aut. Earum, eveniet! Excepturi, quam.
                    </div>
                </div>
               
            </div>
            <div className="right w-4/12 flex justify-center items-center">
                <div className="stacks-container bg-neutral-500 h-fit w-full pt-5 rounded-2xl">
                    <div className='bar-container h-4 flex justify-center items-center'>
                        <p className="bar bg-neutral-300 h-1 w-8 rounded-full"></p>
                    </div>
                    <div className="title ml-16 pt-3 font-inter text-xl font-medium text-white">
                        Tech Stack
                    </div>
                    <div className="card-container h-auto pt-9">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="row h-auto flex justify-center gap-12 mb-10">
                                    <div className="cards bg-neutral-600 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={tailwind} alt="" />
                                    </div>
                                    <div className="cards bg-green-500 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={bootstrap} alt="" />
                                    </div>
                                </div>
                                <div className="row h-auto flex justify-center gap-12 mb-10">
                                    <div className="cards bg-neutral-600 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={figma} alt="" />
                                    </div>
                                    <div className="cards bg-neutral-600 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={react} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row h-auto flex justify-center gap-12 mb-10">
                                    <div className="cards bg-neutral-600 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={html} alt="" />
                                    </div>
                                    <div className="cards bg-green-500 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={css} alt="" />
                                    </div>
                                </div>
                                <div className="row h-auto flex justify-center gap-12 mb-10">
                                    <div className="cards bg-neutral-600 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={js} alt="" />
                                    </div>
                                    <div className="cards bg-neutral-600 h-24 w-24 rounded-2xl flex justify-center items-center">
                                        <img className='h-20 object-contain' src={react} alt="" />
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                        </Swiper>

                        {/* <div className="row h-auto flex justify-center gap-12 mb-10">
                            <div className="cards bg-neutral-400 h-24 w-24 rounded-2xl">
                            
                            </div>
                            <div className="cards bg-green-500 h-24 w-24 rounded-2xl">
                                
                            </div>
                        </div>
                        <div className="row h-auto flex justify-center gap-12">
                            <div className="cards bg-neutral-400 h-24 w-24 rounded-2xl">
                            
                            </div>
                            <div className="cards bg-neutral-400 h-24 w-24 rounded-2xl">
                                
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About