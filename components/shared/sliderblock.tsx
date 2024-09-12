'use client'

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay } from 'swiper/modules';
import {useTranslations} from "next-intl";

interface Props{
    className?:string
}

export const SliderBlock: React.FC<Props> = ({className}) => {
    const t = useTranslations("Reviews")

    return (
        <div className="flex z-30 items-center justify-center mt-10 h-[60vh]">
            <Swiper
                spaceBetween={50}
                speed={400}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

                allowTouchMove={false}
                slidesPerView={2}
                loop={true}
                modules={[Autoplay]}
                className="flex items-center justify-center h-[55vh]">

                <SwiperSlide className="text-white text-[30px] text-center leading-[27px] w-[550px]">{t('text1')}</SwiperSlide>

                <SwiperSlide className="text-white text-[30px] text-center leading-[27px] w-[550px]">{t('text2')}</SwiperSlide>

                <SwiperSlide className="text-white text-[30px] text-center leading-[27px] w-[550px]">{t('text3')}</SwiperSlide>

                <SwiperSlide className="text-white text-[30px] text-center leading-[27px] w-[550px]">{t('text4')}</SwiperSlide>

                <SwiperSlide className="text-white text-[30px] text-center leading-[27px] w-[550px]">{t('text5')}</SwiperSlide>

            </Swiper>
        </div>
    )
}