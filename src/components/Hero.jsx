
import wave from '../assets/wave.png'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'

function Hero() {
  return (
    <div className='hero-container w-full h-full mt-28 flex justify-center content-center items-center md:h-screen md:m-0 md:flex md:items-center md:justify-center '>
        <div className='hero bg-white dark:bg-neutral-700 h-auto w-full p-10 flex flex-col-reverse md:h-4/6 md:w-full max-w-screen-xl md:flex md:flex-row md:mt-24 md:p-10 lg:h-5/6 xl:h-4/6 lg:p-20 mr-0 rounded-3xl'>
            <div data-aos='fade-right' className="left w-full h-auto md:w-8/12 md:flex md:flex-col md:justify-center">
                <div className="text-container w-full">
                    <div className="heading text-black dark:text-white text-5xl leading-tight text-center font-medium font-SFmedium tracking-wide pb-5 md:text-5xl md:leading-snug md:text-start lg:text-6xl lg:pb-7">Hi, my name is <strong className='text-green-500'>Allen.</strong>
                    </div>
                    <div className="subtext  text-black dark:text-neutral-300 text-2xl leading-normal text-center font-SFsbi tracking-normal pb-10 md:pb-5 md:text-2xl md:text-start lg:text-3xl lg:pb-7"> Web Designer / Front End Developer.
                    </div>
                    <div className="text text-black dark:text-neutral-400 text-lg leading-normal text-center font-SFregular pb-10 md:pb-5 md:text-md md:text-start lg:text-xl lg:pb-7">
                        I'm passionate about cutting edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
                    </div>
                </div>
                <div className="button-container w-full flex items-center justify-center md:justify-start">
                    <Link to="contact" spy={true} smooth={true} offset={-110} duration={1000}><button className='bg-[#30db5b] px-5 py-2 rounded-full text-white font-SFmedium text-base 
                    hover:bg-[#007d1b] transition duration-150 ease-in-out'>&#8756; Let's work together!</button>
                    </Link>
                </div>
            </div>
            <div data-aos='fade-left' className="right h-64 w-full md:w-4/12 flex justify-center content-center">
                <div className="pic-container h-full w-full flex justify-center items-center content-center md:w-96 md:flex md:justify-center md:align-center md:content-center">
                    <img className='h-full ml-6 md:h-[35vh] object-contain -mt-24' src={wave} alt="" />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Hero