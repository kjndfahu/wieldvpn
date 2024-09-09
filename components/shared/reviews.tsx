import React from 'react'
import Image from 'next/image'
import lights from '../../assets/light behind review.png'
import minilogo from '../../assets/prfile3d 1.png'
import animation from '../../assets/animation.gif'
import {SliderBlock} from "@/components/shared/sliderblock";
import {useTranslations} from "next-intl";

interface Props{
    className?:string;
    reviews: any;
}

export const Reviews: React.FC<Props> = ({reviews, className}) => {
    const t = useTranslations("Reviews")
    return (
        <div ref={reviews} className="lg:flex hidden flex-col bg-black mt-[193px]">
            <Image className="absolute z-20 top-[250px] w-full" src={lights} alt="light"/>
            <h2 className="font-semibold text-white mdbvp:text-[96px] leading-[82px] mdbvp:ml-[136px] mdbvp:text-left sm:text-center  md:text-[64px] md:leading-[65px] smbvp:text-[40px] smbvp:leading-[45px]">{t('title')}<br/> {t('title2')}</h2>
            {/*<div className="w-[100vw]">*/}
            {/*    <Image className="absolute z-[1] bottom-[-1680px] left-[1100px]" src={animation} alt="anim"/>*/}
            {/*</div>*/}
            <Image className="self-center" src={minilogo} alt="minilogo"/>
            <SliderBlock/>
        </div>
    )
}