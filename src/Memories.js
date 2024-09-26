import React, {useRef} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";import image1 from '../src/assets/Memories/basketball.jpg'
import image2 from '../src/assets/Memories/chemistry.jpg'
import image3 from '../src/assets/Memories/cultural.jpg'
import image4 from '../src/assets/Memories/Teaching.jpg'
import image5 from '../src/assets/Memories/boy.jpg'
import image6 from '../src/assets/Memories/playing.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Memories = () => {
        let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      
    };
  return (
    <div className='overflow-x-hidden pt-10'>
        <div className='bg-blue-900 rounded-full absolute right-4 cursor-pointer translate-y-52  z-40 text-white'>
             <IoIosArrowForward className='next-btn ' size={36} onClick={next}  />

        </div>
        <div className='absolute left-4 z-40 cursor-pointer translate-y-52 text-white bg-blue-900 rounded-full'>
             <IoIosArrowBack className='prev-btn ' size={36}  onClick={previous} />

        </div>
        <div>    
             <Slider ref={slider => {
                  sliderRef = slider
                }} {...settings}>
                 
                    <div className='slider-content'>
                        <img src={image1} className='h-96 w-full' alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={image2} className='h-96 w-full' alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={image3} className='h-96 w-full' alt=''/>
                    </div>
                    <div className='slider-content'>
                        <img src={image4} className='h-96 w-full' alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={image5} className='h-96 w-full' alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={image6} className='h-96 w-full' alt=""/>
                    </div>
                 
                </Slider>
        </div>
       
               
    </div>
  )
}

export default Memories
