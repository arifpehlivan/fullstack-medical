import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Patients() {
    return (
        <>
            <h1 className="patients-head">Our Patients</h1>
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
                navigation={true}
                // modules={[FreeMode, Navigation, Thumbs]}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide>
                <div className="patients">
                <div className="star">
                        <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                <div className="patients-card">
                    
                    
                    <div className="patients-text">
                        <p>Best Health Care</p>
                        Phasellus ligula ante, tempus ac imperdiet ut, mattis ac nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </div>
                </div>
                <div className="patients-img">
                    <img src="/img/1.jpg" alt=""/>
                    <span>Ben Walker Recovered</span>
                </div>
            </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                <div className="patients">
                    <div className="star">
                        <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                <div className="patients-card">
                    <div className="patients-text">
                        <p>Best Health Care</p>
                        Phasellus ligula ante, tempus ac imperdiet ut, mattis ac nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </div>
                </div>
                <div className="patients-img">
                    <img src="/img/1.jpg" alt=""/>
                    <span>Ben Walker Recovered</span>
                </div>
            </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                <div className="patients">
                    <div className="star">
                        <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                <div className="patients-card">
                    
                    
                    <div className="patients-text">
                        <p>Best Health Care</p>
                        Phasellus ligula ante, tempus ac imperdiet ut, mattis ac nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </div>
                </div>
                <div className="patients-img">
                    <img src="/img/1.jpg" alt=""/>
                    <span>Ben Walker Recovered</span>
                </div>
            </div>
                    
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}

