'use client'

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

interface Props{
    className?:string
}

export const SliderBlock: React.FC<Props> = ({className}) => {
    return (
        <div className="flex z-10 items-center justify-center mt-10">
            <Swiper
                spaceBetween={70}
                speed={800}
                centeredSlides={true}
                navigation={true}
                pagination={true}
                slidesPerView={2}
                loop={true}
                modules={[Navigation, Pagination]}
                className="flex items-center justify-center">

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я очень довольна VPN-сервисом! Отличная скорость, стабильное соединение, блокировка рекламы и простота использования за довольно небольшую цену. Очень рекомендую его к использованию!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я очень довольна VPN-сервисом! Отличная скорость, стабильное соединение, блокировка рекламы и простота использования за довольно небольшую цену. Очень рекомендую его к использованию!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я очень довольна VPN-сервисом! Отличная скорость, стабильное соединение, блокировка рекламы и простота использования за довольно небольшую цену. Очень рекомендую его к использованию!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я очень довольна VPN-сервисом! Отличная скорость, стабильное соединение, блокировка рекламы и простота использования за довольно небольшую цену. Очень рекомендую его к использованию!
                </SwiperSlide>
            </Swiper>
        </div>
    )
}