import React from 'react'
import Image from 'next/image'
import lights from '../../assets/light behind review.webp'
import reviewlogo from '../../assets/review 3d 1.webp'
import minilogo from '../../assets/prfile3d 1.webp'
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
            <Image className="absolute z-60 top-[250px] w-full max-h-[2700px]" src={lights} alt="light"/>
            <h2 className="font-semibold text-white mdbvp:text-[96px] leading-[82px] mdbvp:ml-[136px] mdbvp:text-left sm:text-center  md:text-[64px] md:leading-[65px] smbvp:text-[40px] smbvp:leading-[45px]">{t('title')}<br/> {t('title2')}</h2>
            <Image className="self-center" src={minilogo} alt="minilogo"/>
            <Image className="absolute z-1 right-0 lghero:top-[1100px] lghero:w-[600px] md:w-[500px] md:top-[1250px]" src={reviewlogo} alt="review"/>
            <SliderBlock/>
        </div>
    )
}
