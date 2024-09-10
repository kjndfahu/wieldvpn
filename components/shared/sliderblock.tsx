'use client'

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import {useTranslations} from "next-intl";

interface Props{
    className?:string
}

export const SliderBlock: React.FC<Props> = ({className}) => {
    const t = useTranslations("Reviews")

    return (
        <div className="flex z-30 items-center justify-center mt-10 h-[40vh]">
            <Swiper
                spaceBetween={70}
                speed={1200}
                centeredSlides={true}
                navigation={true}
                pagination={true}
                slidesPerView={2}
                loop={true}
                modules={[Navigation, Pagination]}
                className="flex items-center justify-center h-[42vh]">

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">{t('text1')}</SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">{t('text2')}</SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">{t('text3')}</SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">{t('text4')}</SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">{t('text5')}</SwiperSlide>

            </Swiper>
        </div>
    )
}