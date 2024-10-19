import React, {useState} from 'react'
import CarouselPage from '../../CarouselPage'
import Memories from '../../Memories'
import './Home.css'
import girl from '../../assets/Home/girl.jpg'
import {FaHistory, FaLocationArrow, FaMailBulk, FaPhone} from "react-icons/fa";
import {FaGraduationCap} from "react-icons/fa";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import card from "../../Card"
import image1 from '../../assets/Services/stud.jpg'
import logo from '../../assets/Navbar/logo.png'
import blog from '../../blog'
const Home = () => {
    const [bloffvilleSchool,
        setbloffvilleSchool] = useState(false);
        
        function toggleClick() {
            setbloffvilleSchool(false)
        }

        function handleClick() {
            setbloffvilleSchool(true)
        }

    return (
        <div className='lg:py-14 h-96 '>
            <CarouselPage />
            <section className='lg:py-5 lg:px-40 py-5 md:py-5 md:px-10  z-80  '>
                <h1 className='text-center'>About Us</h1>
                <h1 className='text-center'>The Journey In Bloffville</h1>
                <div className='lg:flex md:flex pt-16 '>
                    <ScrollAnimation className='w-full ' animateIn="bounceInLeft">
                        <img
                            className='lg:w-[70%] w-[80%] m-auto'
                            style={{
                            borderRadius: "50%"
                        }}
                            src={girl}
                            alt=""/>

                    </ScrollAnimation>
                    <ScrollAnimation className='py-5 lg:py-0 md:py-0 sm:py-0 w-full m-auto' animateIn="bounceInRight">
                        <div className=' sm:px-0 px-3 lg:px-0 md:px-0 space-x-10 text-2xl flex sm:justify-center '>
                            <div className='items-center flex '>
                                <FaGraduationCap/>
                                <button
                                    onClick={toggleClick}
                                    className={`${bloffvilleSchool
                                    ? "text-gray-500"
                                    : "text-blue-900"} lg:py-[20px]  md:py-[20px] md:px-[15px] py-[10px]sm:px-[20px] sm:py-[20px] px-[5px] lg:px-[20px] bottom-2 shadow-xl shadow-black `}>Bloffville Schools</button>
                            </div>

                            <div className='flex text-gray-500 items-center '>
                                <FaHistory/>
                                <button
                                    onClick={handleClick}
                                    className={`${bloffvilleSchool
                                    ? "text-blue-900"
                                    : "text-gray-500"} md:py-[20px] md:px-[15px] py-[10px] px-[5px] lg:px-[20px] sm:px-[20px] sm:py-[20px] bottom-2 shadow-xl shadow-black`}>Our History</button>
                            </div>

                        </div>
                        <div className='py-4 px-4 lg:px-0 md:px-0 sm:px-0'>
                            <p
                                className={`leading-10 ${bloffvilleSchool
                                ? 'hidden'
                                : 'block'} text-gray-500`}>
                                Bloffville School is a beacon of excellence, committed to delivering world-class
                                education in an engaging learning atmosphere for students aged 18 months to 18
                                years. Our educational structure begins with the Elementary School, encompassing
                                the Early Years Foundation Stage, key stages 1 & 2 (primary). The High School
                                comprises key stages 3 & 4 (years 7 - 12), strategically located in the suburb
                                of Igbogbo, Ikorodu, Lagos State, Nigeria.
                            </p>
                            <p
                                className={`${bloffvilleSchool
                                ? 'block'
                                : 'hidden'} text-gray-500 leading-10`}>
                                Bloffville school's history dates back to summer of 2012 when it started off as
                                a Montessori school offering education. Bloffville school is a center of
                                excellence designed to provide world-class education in an exciting learning
                                environment for students within the age of 18 months to 18 years. Our structure
                                begins with the Elememtary School comprising of the Early Years Foundation
                                Stage, key stages 1 & 2 (primary). The High School comprises of key stages 3 & 4
                                (years 7 - 12) located in the suburb of Igbogbo, Ikorodu Lagos state, Nigeria.
                            </p>

                            <button className='bg-blue-800 md:py-[20px] md:px-[15px] py-[10px] px-[5px] lg:px-[20px] bottom-2 shadow-xl shadow-black text-white'>More About</button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
            <section className='pt-10'>
                <div className='pt-16'>
                    <h1 className='text-center font-extrabold'>Memories</h1>
                    <div className='py-10'>
                        <Memories/>
                    </div>
                </div>
            </section>
            <section className='py-10 lg:px-40 my-10'>
                <h1 className='text-center font-extrabold'>Blotiville Past Events</h1>
                <div className='grid lg:grid-cols-3 gap-5 px-4 md:grid-cols-3 md:px-28 md:py-24  lg:py-24 '>
                    {card.map(({id, image, title, desc, btn}) => {
                        return (
                            <div className=' relative group shadow border-2 ' key={id}>
                                <div>
                                    <img src={image} alt=""/>
                                </div>
                                <div className='px-4 py-2 '>
                                    <div>
                                        <h1 className='text-xl lg:text-3xl md:text-xl sm:text-xl '>{title}</h1>
                                    </div>
                                    <div className='text-gray-500'>
                                        <p>{desc}</p>
                                    </div>
                                   
                                </div>
                                <div
                                    className='absolute top-0 opacity-[0.01] text-white  group-hover:opacity-95 w-full h-full   group-hover:top-0   group-hover:backdrop-blur-lg duration-500 divide-neutral-700 bg-black'>
                                    <div className='text-center my-32 '>
                                        <div className=' '>
                                            <p>12:00AM</p>

                                        </div>
                                        <div>
                                            <h1 className='text-2xl'>AUDITORIUM + FIRST FLOOR</h1>

                                        </div>
                                         <div>
                                        <button className='group-hover:opacity-100 rounded-lg border-2 shadow-2xl hover:bg-blue-900'>{btn}</button>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='bg-blue-900 lg:py-20 lg:px-40 py-5 sm:px-5 px-5 md:px-4 '>
                <div className=''>
                    <h1 className='text-center text-white font-extrabold'>Our Services</h1>
                    <h1 className='text-center text-white font-bold'>WHY BLOFVILLE SCHOOL?</h1>
                    <div className='lg:flex   lg:py-14 md:py-14 py-5 sm:py-5  '>
                        <ScrollAnimation animateIn='bounceInLeft' className='w-full'>
                            <img
                                src={image1}
                                className='lg:w-[90%] md:w-[80%] w-full m-auto'
                                style={{
                                borderRadius: "50%"
                            }}
                                alt=""/>

                        </ScrollAnimation>
                        <ScrollAnimation className='text-2xl w-full sm:py-4 py-5 lg:py-0 md:py-0 ' animateIn='bounceInRight'>
                            <p className=' lg:leading-10 text-xl lg:text-3xl md:text-2xl md:leading-10 text-justify md:text-start lg:text-start font-serif text-white'>Bloffville school is a dynamic
                                and thriving educational environment offering strong educational programs in
                                Nigeria. Here are some reasons why you should choose us</p>
                            <div className='flex  text-white text-xl  md:text-2xl '>
                                <ul className='list-disc font-mono '>
                                    <li>Student Support</li>
                                    <li>Our Campus</li>
                                    <li>Equality & Diversity</li>
                                </ul>
                                <ul className='list-disc font-mono'>
                                    <li>Facilities & Technology</li>
                                    <li>Extra-Curricular Activities</li>
                                    <li>Leadership & Mentoring
                                    </li>
                                </ul>
                            </div>

                        </ScrollAnimation>

                    </div>
                </div>
            </section>

            <section className='lg:py-24 lg:px-40 px-4 pt-5 '>
                <h1 className='text-center font-extrabold'>School Blog</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-10 lg:py-16 lg:px-32 '>
                    {blog.map(({
                        id,
                        title,
                        image,
                        btn,
                        desc,
                        desc2,
                        desc3
                    }) => {
                        return (
                            <ScrollAnimation
                                animateIn='zoomIn'
                                className='hover:border-2 rounded-3xl shadow-2xl '>
                                <div>
                                    <img src={image} className='h-80 w-full rounded-xl touch-pinch-zoom' alt=""/>
                                </div>
                                <div className='pt-2 pr-4'>
                                    <ul className='flex justify-between'>
                                        <li>
                                            <p>{desc}</p>
                                        </li>
                                        <li>
                                            <p>{desc2}</p>
                                        </li>
                                        <li>
                                            <p>{desc3}</p>
                                        </li>

                                    </ul>
                                </div>
                                <div className='px-4'>
                                    <h1 className='text-xl'>{title}</h1>
                                </div>
                                <div className='px-4 py-4'>
                                    <button className='bg-blue-900 p-4 shadow-xl md:hover:bg-yellow-300 hover:bg-yellow-300 sm:hover-yellow-300 text-white lg:hover:bg-yellow-300 '>{btn}</button>
                                </div>
                            </ScrollAnimation>
                        )
                    })}
                </div>
            </section>

            <section
                className='bg-yellow-400 rounded-3xl py-10 text-center absolute w-[80%] sm:w-80% sm:left-16 left-10 lg:w-[80%] md:w-[78%] md:m-auto md:right-20   lg:right-32'>
                <div className='pt-12'>
                    <h1>JOIN BLOFFVILLE'S NEWSLETTER</h1>
                </div>
                <div>
                    <p>Stay up-to-date with the latest news</p>
                </div>
                <div className=' justify-center space-x-4 flex'>
                    <input
                        type="email"
                        className='p-3 w-50 border-black border-2'
                        placeholder='Enter Your Email'/>
                    <button
                        className='py-2 px-4 border-2 rounded-2xl shadow-none bg-blue-900 text-white '>Submit</button>
                </div>
            </section>
            <footer className='mt-56    text-white bg-blue-950'>
                <div className='grid grid-cols-2  gap-4 px-4  lg:py-28 pt-28 md-pt-20 md:px-5 lg:flex md:grid md:grid-cols-3 lg:justify-evenly'>
                    <div className='space-y-6 '>
                        <img src={logo} alt=""/>
                        <h1>Want to be
                            <br/>
                            Part Of Us?</h1>
                        <button className=' bg-blue-900 p-4 shadow border-2 border-blue-900 rounded-xl'>Enroll Now</button>
                    </div>
                    <div>
                        <h1>Quick Link</h1>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Admission</p>
                        <p>Facilities</p>
                        <p>School</p>
                        <p>Academics</p>
                        <p>Boarding</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className='space-y-4'>
                        <h1>High School</h1>
                        <div className='flex space-x-2 items-center'>
                            <FaPhone/>
                            <h2 className='text-xl font-serif font-bold'>More Inquiry</h2>
                        </div>
                        <p>+234 9124761292</p>
                        <p>+2347043776171</p>
                        <div className='flex space-x-2 items-center'>
                            <FaMailBulk/>
                            <h2 className='text-xl font-serif font-bold'>Send Mail</h2>
                        </div>
                        <p>info.high@<br/>bloffvilleschools.org</p>
                        <div className='flex space-x-2 items-center'>
                            <FaLocationArrow/>
                            <h2 className='text-xl font-serif font-bold'>Address</h2>
                        </div>
                        <p className='font-serif'>55 Tayo Wuraola Street off Selewu,<br/>Igbogbo Ikorodu – Lagos Nigeria.</p>
                    </div>

                    <div className='space-y-4'>
                        <h1>Elementary School</h1>
                        <div className='flex space-x-2 items-center'>
                            <FaPhone/>
                            <h2 className='text-xl font-serif font-bold'>More Inquiry</h2>
                        </div>
                        <p>+2348146366539</p>
                        <div className='flex space-x-2 items-center'>
                            <FaMailBulk/>
                            <h2 className='text-xl font-serif font-bold'>Send Mail</h2>
                        </div>
                        <p>info.elementary@<br/>bloffvilleschools.org</p>
                        <div className='flex items-center space-x-2'>
                            <FaLocationArrow/>
                            <h2 className='text-xl font-serif font-bold'>Address</h2>
                        </div>
                        <p className='font-serif'>4/6 Akin Ogunlewe Street,<br/> Igbogbo Ikorodu – Lagos Nigeria.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
