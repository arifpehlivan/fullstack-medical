import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMobile } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                // modules={[FreeMode, Navigation, Thumbs]}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/img/1.jpg" alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/2.jpg" alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/3.jpg" alt="" />
                    
                </SwiperSlide>
                <div className="sliderText">
                    <h1>Better <span>days</span> </h1> 
                    <h3>Medic Care is a Bootstrap 5 Template provided by TemplateMo website.Credits go to FreePik and RawPixel for images used in this template.</h3>
                    <div>
                        <button>Learn More</button>
                        <FaMobile size="25px" color="#717275" />
                    <span>0123456789</span>
                    </div>
                    
                    </div>
            </Swiper>
        </>
    );
}