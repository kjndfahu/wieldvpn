import React from 'react'
import Image from 'next/image'
import lights from '../../assets/light behind review.png'
import reviewlogo from '../../assets/animation (1).gif'
import minilogo from '../../assets/prfile3d 1.png'
import {SliderBlock} from "@/components/shared/sliderblock";
import {useTranslations} from "next-intl";

interface Props{
    className?:string;
    reviews: any;
}

export const Reviews: React.FC<Props> = ({reviews, className}) => {
    const t = useTranslations("Reviews")
    return (
        <div ref={reviews} className="lg:flex hidden flex-col bg-black mt-[193px] ">
            <Image className="absolute z-60 top-[250px] w-full" src={lights} alt="light"/>
            <h2 className="font-semibold text-white mdbvp:text-[96px] leading-[82px] mdbvp:ml-[136px] mdbvp:text-left sm:text-center  md:text-[64px] md:leading-[65px] smbvp:text-[40px] smbvp:leading-[45px]">{t('title')}<br/> {t('title2')}</h2>
            <Image className="self-center" src={minilogo} alt="minilogo"/>
            <Image className="absolute z-1 right-0 lghero:top-[1400px] lghero:w-[500px] md:w-[400px] md:top-[1500px]" src={reviewlogo} alt="review"/>
            <SliderBlock/>
        </div>
    )
}