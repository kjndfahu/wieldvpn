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
        <div className="flex z-30 items-center justify-center mt-10 h-[40vh]">
            <Swiper
                spaceBetween={70}
                speed={800}
                centeredSlides={true}
                navigation={true}
                pagination={true}
                slidesPerView={2}
                loop={true}
                modules={[Navigation, Pagination]}
                className="flex items-center justify-center h-[38vh]">

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я очень довольна VPN-сервисом! Отличная скорость, стабильное соединение, блокировка рекламы и простота использования за довольно небольшую цену. Очень рекомендую его к использованию!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Это лучший VPN, которым я когда-либо пользовался! Всегда под рукой на всех устройствах, не имеет проблем с блокировками. А если возникнут проблемы — служба поддержки ответит даже глубокой ночью! Определенно надолго с WieldVPN!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я пользуюсь этим VPN уже более полугода, он работает крайне стабильно и быстро, администратор быстро реагирует, если появляются проблемы. Советую WieldVPN всем!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Как самый обычный пользователь, который не очень хорошо разбирается в этом, я могу только сказать, что скорость работы с VPN просто бомба!! Я очень рада, потому что, по моему опыту, это лучший VPN из всех, которыми я пользовалась, также абсолютно все мои вопросы решаются быстро!
                </SwiperSlide>

                <SwiperSlide className="text-white text-[32px] leading-[27px] w-[500px]">
                    Я пользуюсь этим сервисом уже полгода. Он очень прост в установке и использовании, обладает высокой скоростью и всегда стабильным соединением. Почти все время у меня включен WieldVPN. Если у вас возникнут какие-либо вопросы, служба поддержки всегда готова прийти на помощь круглосуточно!
                </SwiperSlide>

            </Swiper>
        </div>
    )
}