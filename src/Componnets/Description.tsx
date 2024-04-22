import React from 'react'
import '../Css/description.css'
import mina from '../mina.jpg'
// import logo from '../logo.svg';
import logo from '../logo.svg';
export default function Description() {
  return (
    <>
    <div className='container-desc'>
        <div className='profile-me'>
            <div className='container-about'>
                <img src={logo} className="about-logo" alt="logo" />
                <h2 className='about-me' >About me</h2>
            </div>
            <div className='container-image'>
                <img className='profile-image' src={mina} alt="profile picture" />
            </div>
            <div className='title-name'>
                <h3>mina giergies</h3>
                <p>I'm Front-end developer</p>
            </div>
        </div>
        <div className='desc-about'>
            <div className='desc-lorem'>
            I am Mina giergies, web developer from Egypt. I have rich experience in web site design and building and customization, also I am good at react js.
            </div>
            <div className='desc-schema'>
                <div className='skills '>
                    <div className='skill justify-between'>
                        <h5 className='font-bold'>
                            HTML , CSS , Js , Typescript
                        </h5>
                        <span>98%</span>
                    </div>
                    <div className='rounded-full bg-white w-full h-2 overflow-hidden'>
                        <span className='line-skill line-color-one' style={{width:'98%'}} datatype={'98%'}></span>
                    </div>
                </div>
                <div className='skills '>
                    <div className='skill justify-between'>
                        <h5 className='font-bold'>
                            PHP , Laravel , MySql
                        </h5>
                        <span>90%</span>
                    </div>
                    <div className='rounded-full bg-white w-full h-2 overflow-hidden'>
                        <span className='line-skill line-color-tow' style={{width:'90%'}} datatype={'90%'}></span>
                    </div>
                </div>
                <div className='skills '>
                    <div className='skill justify-between'>
                        <h5 className='font-bold'>
                            React , Next.js , Redux
                        </h5>
                        <span>80%</span>
                    </div>
                    <div className='rounded-full bg-white w-full h-2 overflow-hidden'>
                        <span className='line-skill line-color-three' style={{width:'80%'}} datatype={'80%'}></span>
                    </div>
                </div>
                <div className='skills '>
                    <div className='skill justify-between'>
                        <h5 className='font-bold'>
                            Tailwind , Bootstrap , Sass
                        </h5>
                        <span>75%</span>
                    </div>
                    <div className='rounded-full bg-white w-full h-2 overflow-hidden'>
                        <span className='line-skill line-color-four' style={{width:'75%'}} datatype={'75%'}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
