import React from 'react'
import Image from 'next/image'
import lights from '../../assets/light behind review.png'
import minilogo from '../../assets/prfile3d 1.png'
import animation from '../../assets/review-animation.gif'
import {SliderBlock} from "@/components/shared/sliderblock";

interface Props{
    className?:string;
}

export const Reviews: React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col bg-black mt-[193px]">
            <Image className="absolute z-20 top-[200px] left-[585px]" src={lights} alt="light"/>
            <h2 className="font-semibold text-white text-[96px] leading-[82px] ml-[136px]">Отзывы<br/> клиентов</h2>
            <Image className="absolute z-[15] bottom-[-1500px] left-[900px]" src={animation} alt="anim"/>
            <Image className="self-center" src={minilogo} alt="minilogo"/>
            <SliderBlock/>
        </div>
    )
}