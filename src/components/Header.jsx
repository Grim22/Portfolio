
import '../css/Header.css';
import { Link } from 'react-scroll';
import logo from '../assets/laptop.png'
import { useState } from 'react';

function Header() {
 
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click); 
        // awdawd
    }
    const content = <>
        <div className="mobile lg:hidden h-auto w-full flex items-center rounded  bg-neutral-600">
            <div className="left">awd</div>
            <div className="right">awd</div>
    </div>
    </>
  return (
    <>
        <header className='h-20 w-full flex justify-center items-center rounded m-0'>
            <div className="header-container h-11 sm:w-[600px] lg:w-[700px] bg-neutral-600 rounded-2xl flex">
                <div className="left-side w-3/6 py-5 px-1 flex items-center justify-start">
                    <div className="logo-container bg-[#eeeeee] h-9 w-9 rounded-xl">
                        <img src={logo} alt="" />
                    </div>
                    <div className="logo-text px-3 font-inter text-white text-xl font-medium">
                        GrimCoder
                    </div>
                </div>

                <div className="right-side w-3/6 flex justify-end items-center px-1">
                    <div className="about sm:hidden px-3 font-inter text-white text-meduim"> 
                        <Link to="about" spy={true} smooth={true} offset={-110} duration={1000} >
                            <button>
                                about
                            </button>
                        </Link>
                    </div>
                    <div className="projects sm:hidden px-3 font-inter text-white text-meduim">
                        <Link to="projects" spy={true} smooth={true} offset={-110} duration={1000}>
                            <button>
                                projects
                            </button>
                        </Link>
                    </div>
                    <div className="talk sm:hidden h-9 w-22 bg-[#eeeeee] rounded-xl px-3 font-inter text-black font-semibold text-medium flex justify-center items-center hover:bg-[#30db5b] hover:text-white hover:transition .duration-150 ease-in-out"> 
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={1000}>
                            <button>
                                Let's Talk.
                            </button>
                        </Link> 
                    </div>
                    <div className="123">
                        {click && content}
                    </div>
                    <div className="hamburger md:hidden mr-3">
                        <button onClick={handleClick}>
                            awdsd
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header