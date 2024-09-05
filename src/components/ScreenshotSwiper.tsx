'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const imgWeight = ["01","02","03","04","05","06","07"];

export default function ScreenshotSwiper() {
    return (
        <div className="screenshot-swiper-container">
            <Swiper
                slidesPerView={3}
                spaceBetween={12}
                breakpoints={{
                  1024: {
                    slidesPerView: 4.5,
                    spaceBetween:20,
                  },
                }}
            >
                {imgWeight.map((el)=>{
                    return (
                        <SwiperSlide id={el} key={el + "KEY"}>
                            <div className="screenshoot-card">
                                <img src={`/assets/images/screenshot/${el}.jpg`} alt={el}/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
