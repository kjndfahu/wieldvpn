import React from 'react'
import animation from '../../assets/animation.gif'
import Image from 'next/image'
import lights from '../../assets/lightadapreview.png'
import wield from '../../assets/WIELD.png'
import {AdaptiveSwiper} from "@/components/shared/adaptiveswiper";
import {MoveRight} from "lucide-react";
import {useTranslations} from "next-intl";

interface Props{
    className?:string
    isReviews: boolean;
    setReviews: Function;
}

export const ReviewsAdaptive: React.FC<Props> = ({isReviews, setReviews, className}) => {
    const t = useTranslations("Reviews")
    return (
        <div className="flex flex-col items-center justify-center mt-[200px] lg:hidden">
            {isReviews ? (
                <div onClick={() => setReviews(true)}
                     className="flex z-30 items-center justify-center mt-[-180px] md:text-[80px] sm:text-[60px] font-semibold text-white leading-[65px] rounded-full text-[50px]">
                    {t('title')}<br/> {t('title2')}
                </div>
            ) : (
                <div onClick={() => setReviews(true)}
                     className="flex z-30 items-center justify-center bg-[#001a26] border-[1px] text-[38px] font-semibold text-white border-[white] text-center py-7 px-10 leading-[36px] rounded-full">
                    {t('title')}<br/> {t('title2')}
                </div>
            )}
            {isReviews ? (
                <Image className="absolute z-[1] top-[100px] right-[170px] " src={animation} alt="anim"/>
            ) : (
                <Image className="absolute z-[1] " src={animation} alt="anim"/>
            )}
            {isReviews && (
                <>
                    <AdaptiveSwiper/>
                    <div
                        onClick={() => setReviews(!isReviews)} className="flex items-center mt-[70px] justify-center z-50 border-dashed border-[1px] py-2 px-2 rounded-2xl">
                        <div
                            className="flex bg-[#00FFF0] cursor-pointer md:py-5 md:px-7 md:text-[32px] text-black [box-shadow:1px_25px_86px_28px_rgba(0,255,238,0.20)] font-bold rounded-2xl text-[20px] py-3 px-6">
                            {t('btn')}
                        </div>
                    </div>
                    <div onClick={() => setReviews(!isReviews)} className="flex flex-row justify-center items-center gap-2 text-white text-[24px] font-semibold z-[100]">
                        {t('home')}
                        <MoveRight color="#ffffff" />
                    </div>
                </>
            )}

            {isReviews ? ('') : (
                <Image className="absolute z-[1] w-[90vw] mt-[550px]" src={wield} alt="letters"/>
            )}
            <Image className="absolute z-[2] w-full" src={lights} alt="lights"/>
        </div>
    )
}