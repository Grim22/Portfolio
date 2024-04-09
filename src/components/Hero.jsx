import '../css/Hero.css'
import wave from '../assets/wave.png'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'


function Hero() {
  return (
    <div className='hero-container w-full h-screen flex justify-center content-center items-center'>
        <div className='hero bg-white dark:bg-neutral-700 h-4/6 w-full max-w-screen-xl flex p-20 mr-0 rounded-3xl'>
            <div data-aos='fade-right' className="left w-8/12 flex flex-col justify-center">
                <div className="text-container w-full">
                    <div className="heading text-black dark:text-white text-6xl font-medium font-inter pb-5">Hi, my name is <strong>Allen.</strong>
                    </div>
                    <div className="subtext  text-black dark:text-white text-3xl font-medium font-inter pb-5"> Web Designer / Front End Developer.
                    </div>
                    <div className="text  text-black dark:text-white text-xl font-normal font-inter pb-5">
                        I'm passionate about cutting edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
                    </div>
                </div>
                <div className="button-container w-full">
                    <Link to="contact" spy={true} smooth={true} offset={-110} duration={1000}><button className='bg-[#30db5b] px-5 py-2 rounded-full text-white font-inter font-medium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out'>&#8756; Let's work together!</button></Link>
                </div>
            </div>
            <div data-aos='fade-left' className="right w-4/12 flex align-center justify-center content-center">
                <div className="pic-container w-96 flex justify-center align-center content-center">
                    <img className='w-[20vw] object-contain -mt-24' src={wave} alt="" />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Hero