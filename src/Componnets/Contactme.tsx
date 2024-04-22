import React from 'react'
import mina from '../mina.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import '../Css/contactme.css'
export default function Contactme() {
  return (
    <>
    <div className='container-contact'>
        <h3>Contact me</h3>
        <div className='container-image-contct'>
                <img className='profile-image' src={mina} alt="profile picture" />
        </div>
        <div className='desc-about'>
            <div className='social-media'>
                <div className='cont-links'>
                    <span className='icons'>
                        <FaPhoneAlt  style={{color:'#eab308' , fontSize:'2em'}}/>
                    </span>
                    <span className='text-t'>01204896124</span>
                </div>
                <div className='cont-links'>
                    <span className='icons'>
                        <MdEmail style={{color:'#ef4444' , fontSize:'2em'}} />
                    </span>
                    <span className='text-t'>minagiergies@gmail.com</span>
                </div>
                <div className='cont-links'>
                    <span className='icons'>
                        <FaLinkedin style={{color:'#2563eb' , fontSize:'2em'}}/>
                    </span>
                    <a href='https://www.linkedin.com/in/mina-girgis-a4a32a184/' className='text-t links-t'>Linked in</a>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
