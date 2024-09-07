import React from 'react'
import Image from 'next/image'
import lights from '../../assets/light behind review.png'
import minilogo from '../../assets/prfile3d 1.png'
import animation from '../../assets/animation.gif'
import {SliderBlock} from "@/components/shared/sliderblock";

interface Props{
    className?:string;
    reviews: any;
}

export const Reviews: React.FC<Props> = ({reviews, className}) => {
    return (
        <div ref={reviews} className="flex flex-col bg-black mt-[193px]">
            <Image className="absolute z-20 top-0 w-full" src={lights} alt="light"/>
            <h2 className="font-semibold text-white text-[96px] leading-[82px] ml-[136px]">Отзывы<br/> клиентов</h2>
            {/*<div className="w-[100vw]">*/}
            {/*    <Image className="absolute z-[1] bottom-[-1680px] left-[1100px]" src={animation} alt="anim"/>*/}
            {/*</div>*/}
            <Image className="self-center" src={minilogo} alt="minilogo"/>
            <SliderBlock/>
        </div>
    )
}