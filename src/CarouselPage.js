import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './assets/CarouselImage/school building.jpg'
import image2 from './assets/CarouselImage/school outside.jpg'
import image3 from './assets/CarouselImage/students.jpg'
import image4 from './assets/CarouselImage/bloffville hight.jpg'
import './CarouselPage.css'
import {FaGraduationCap} from "react-icons/fa";

const CarouselPage = () => {
    return (
        <div className=''>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={image1}
                        style={{
                        height: '90vh'
                    }}
                        alt='first'
                        className='d-block w-100'/>
                    <Carousel.Caption>
                        <div className='flex items-center space-x-2 justify-center'>
                            <FaGraduationCap />
                            <p>CHARACTER</p>

                        </div>
                        <h1 className=''>WE GROOM IMPACTFUL MINDS</h1>
                        <button className=''>Enroll Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image2}
                        style={{
                        height: '90vh'
                    }}
                        alt='third'
                        className='d-block w-100'/>

                    <Carousel.Caption>
                        <div className='flex items-center space-x-2 justify-center'>
                            <FaGraduationCap className=''/>
                            <p>DISCIPLINE</p>
                        </div>

                        <h1>WE PROVIDE UNPARRALLELED EDUCATIONAL SERVICES</h1>
                        <button>Enroll Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image3}
                        style={{
                        height: '90vh'
                    }}
                        alt='second'
                        className='d-block w-100'/>

                    <Carousel.Caption>
                         <div className='flex space-x-2 items-center justify-center'>
                            <FaGraduationCap/>
                            <p>KNOWLEDGE</p>

                        </div>
                        
                        <h1>WE BRING UP BRILLIANT STUDENTS WITH BRIGHT FUTURE</h1>
                        <button>Enroll Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image4}
                        style={{
                        height: '90vh'
                    }}
                        alt='second'
                        className='d-block w-100 '/>

                    <Carousel.Caption>
                          <div className='flex space-x-2 items-center justify-center'>
                            <FaGraduationCap/>
                             <p>EXCELLENCE</p>

                        </div>
                       
                        <h1>WE TEACH OUR STUDENTS TO MAINTAIN EXCELLENCE</h1>
                        <button>Enroll Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselPage
