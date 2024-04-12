
import '../css/Header.css';
import { Link } from 'react-scroll';
import logo from '../assets/laptop.png'
import { useState,useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import 'aos/dist/aos.css'
import { RxCross2 } from "react-icons/rx";

function Header() {
    const [click, setClick] = useState(false);
 
    const [toggleMenu,setToggleMenu] = useState(false);

    const [screenWidth,setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () =>{
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])




  return (
    <>
        <header className='h-20 w-full flex flex-col justify-center items-center rounded m-0'>
            <div className="header-container h-11 w-[95%] sm:w-[600px] flex-col md:w-[700px] md:flex md:flex-row md:bg-neutral-600 md:rounded-2xl">
                <div className="left-side h-full w-full py-5 px-1 flex items-center justify-between md:w-3/6 md:justify-start bg-neutral-600 rounded-2xl">
                    <div className="logo-container bg-[#eeeeee] h-9 w-9 rounded-xl">
                        <img src={logo} alt="" />
                    </div>
                    <div className="logo-text px-3 font-SFmedium text-white text-xl font-medium tracking-wide">
                        GrimCoder.
                    </div>
                    
                    <div className='button-container md:hidden'>
                        <label className="btn btn-circle swap swap-rotate bg-transparent border-none">
                        
                            {/* this hidden checkbox controls the state */}
                            <input onClick={toggleNav} type="checkbox" />
                            
                            {/* hamburger icon */}
                            <svg className="swap-off fill-current text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                            
                            {/* close icon */}
                            <svg className="swap-on fill-current  text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                        
                        </label>
                    </div>
                </div>

                {(toggleMenu || screenWidth > 768) && (
                    <div data-aos='fade-in' data-aos-duration='500' className="right-side bg-neutral-600 h-auto w-full mt-5 flex flex-col sm:h-auto sm:w-full sm:mt-5 sm:flex md:w-3/6 md:flex md:flex-row md:m-0 md:h-11 md:justify-end items-center px-1 rounded-2xl">
                        <div className="about py-5 sm:hidden md:flex px-3 font-SFregular text-white text-medium"> 
                            <Link to="about"  spy={true} smooth={true} offset={-110} duration={1000} >
                                <button className='hover:text-green-500 transition duration-150 ease-in-out'>
                                    about
                                </button>
                            </Link>
                        </div>
                        <div className="projects py-5 sm:hidden md:flex px-3 font-SFregular text-white text-medium">
                            <Link to="projects" spy={true} smooth={true} offset={-110} duration={1000}>
                                <button className='hover:text-green-500 transition duration-150 ease-in-out'>
                                    projects
                                </button>
                            </Link>
                        </div>
                        <div className="talk py-5 flex sm:hidden md:flex font-SFbold text-black text-medium justify-center items-center text-center "> 
                            <Link to="contact" spy={true} smooth={true} offset={-70} duration={1000}>
                                <button className='h-9 w-22 bg-[#eeeeee] rounded-xl px-3 hover:bg-[#30db5b] hover:text-white hover:transition .duration-150 ease-in-out'>
                                    Let's Talk.
                                </button>
                            </Link> 
                        </div>
                    </div>
                )}
            </div>
        </header>
    </>
  )
}

export default Header