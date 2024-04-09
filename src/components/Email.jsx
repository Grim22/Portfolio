

import heart from '../assets/heart.png';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import like from '../assets/like.png'
import arrowLeft from '../assets/arrow-left.png'
import close from '../assets/close.png'
import 'aos/dist/aos.css'

import { useEffect } from 'react';


function Email() {

  const sendEmail = (e) => {
      e.preventDefault();
      toggleModal();
    
    emailjs.sendForm('service_s6ctg8y', 'template_4ehknao', e.target, 'FjBP9TMeXQCMvw4kl');
  }

  const [modal, setModal] = useState (false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="email-container bg-[#eeeeee] dark:bg-neutral-800 w-full h-screen flex flex-col justify-center content-center items-center">
        <div data-aos='fade' className="email bg-white dark:bg-neutral-700 h-5/6 w-full max-w-screen-xl flex p-20 mr-0 rounded-3xl shadow-md">
            <div className="left w-[50%]  flex flex-col justify-center items-center">
                <div className="pic-container h-[50%] w-full flex justify-center items-center contain">
                    <img className='h-[70%]' src={heart} alt="" />
                </div>
                <div className="text-container h-[30%] w-full flex flex-col items-center justify-center">
                    <div className="title text-4xl text-black dark:text-white font-inter font-semibold py-3">
                          Send me a Message.
                    </div>
                    <div className="subtext text-lg text-black  dark:text-white font-inter font-medium py-3">
                        send me an instant message which I will receive via gmail.
                    </div>
                </div>
                
            </div>
            <div className="right w-[50%] bg-neutral-200 dark:bg-neutral-500 p-10 rounded-3xl shadow-lg">
                <div className="email-card w-full h-full">
                    <form className='contact-form w-full h-full flex flex-col' onSubmit={sendEmail}>
                        <div className="error h-4 mb-2 flex justify-center items-center text-red-500 font-inter font-semibold" id='error'>
                          
                        </div>
                        <label htmlFor="emailFrom" className=' text-black  dark:text-white font-inter font-semibold pb-1'>Your Email</label>
                        <input required type="text" name='email_from' id='email' className='min-h-[40px] rounded-sm bg-white text-black dark:bg-neutral-400 dark:text-white'/>
                        <label htmlFor="message" className=' text-black dark:text-white font-inter font-semibold mt-5 pb-1'>Message</label>
                        <textarea required name="message" id="message" cols="30" rows="10" className='h-[70%] rounded-sm  bg-white text-black dark:bg-neutral-400 dark:text-white'></textarea>
                        <div className="button-container w-full flex items-center mt-5 justify-between">
                          <Link to='/'>
                            <button className='bg-[#30db5b] md:px-4 lg:px-6 py-2 flex justify-around items-center rounded-full text-white font-inter font-medium text-base 
                                  hover:bg-[#007d1b] transition duration-150 ease-in-out'> <img className='h-6 mr-2' src={arrowLeft} alt="" /> Portfolio
                            </button>
                          </Link>
                            <button  className='bg-[#30db5b] md:px-10 lg:px-12 py-2 rounded-full text-white font-inter font-medium text-base 
                            hover:bg-[#007d1b] transition duration-150 ease-in-out'>
                                Send
                            </button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>

        {modal && (
      <div className="modal-container bg-neutral-800 h-44 w-64 absolute flex flex-col items-center justify-center rounded-2xl shadow-xl">
        <div className="pic-container h-[80%]">
            <img className='h-full' src={like} alt="" />
        </div>
          <div className="text font-inter text-white font-medium">
              Email sent successfully!
          </div>
          <Link to='/' className=''>
              <button className='absolute top-3 right-1 text-white px-2 py-0'>
                  <img className='h-7' src={close} alt="" />
              </button>  
          </Link>
      </div>
    )}
    </div>
    
   
  )
}
export default Email