
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
    <div id='about' className="about-container w-full h-auto flex justify-center content-center items-center mt-10">
        <div className="about bg-transparent h-auto w-full p-10 flex flex-col md:h-auto md:w-full md:max-w-screen-xl md:flex md:p-10 rounded-3xl md:flex-col lg:flex-row-reverse lg:p-20">
            <div className="left md:w-full ">
                <div className="text-container w-full flex flex-col justify-center items-center">
                    <div className="img-container w-full flex items-center justify-center h-40">
                            <img className='object-contain h-40 drop-shadow-xl' src={welcome} alt="" />
                        </div>
                    <div className="title text-green-500 text-5xl font-SFbold py-3 drop-shadow-xl ">
                        About me.
                    </div>
                    <div className="sub text-black dark:text-neutral-300 text-2xl font-inter font-semibold py-3 pt-10">
                        I'm a Creative Web Designer and Front End Developer from Batangas, Philippines.
                    </div>
                    <div className="about-me text-black dark:text-neutral-400 text-md font-inter font-normal py-3">
                        Hello! My name is Allen. I am a graduate of Bachelor of Science in Aviation Electronics Technology and Full Stack Web Development at KodeGo.
                        <br /><br />
                        I enjoy designing and developing a website because it allows me to blend creativity with technical skills. The process of conceptualizing a design, choosing color schemes, typography, and layout elements is like painting on a digital canvas. It's incredibly satisfying to see a vision come to life through code and visual elements.
                    </div>
                </div>
               
            </div>
            <div className="right h-auto w-full mt-10 md:w-full flex justify-center items-center lg:mt-0">
                <div className="stacks-container bg-neutral-500 h-fit max-w-[370px] pt-5 rounded-2xl sm:w-[370px] drop-shadow-xl ">
                    <div className='bar-container h-4 flex justify-center items-center'>
                        <p className="bar bg-neutral-300 h-1 w-8 rounded-full"></p>
                    </div>
                    <div className="title ml-16 pt-3 font-SFmedium text-xl  text-white">
                        Tech Stack
                    </div>
                    <div className="card-container h-auto pt-5">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About