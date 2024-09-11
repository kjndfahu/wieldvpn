import React from 'react'
import Image from 'next/image'
import line from '../../assets/line down text.png'
import biglogo from '../../assets/logo-anim-blue-gif.gif'
import lights from '../../assets/lights_aboutsus.png'
import downline from '../../assets/down line.png'
import {useTranslations} from "next-intl";

interface Props {
    className?: string
    aboutus: any;
}

export const AboutUs: React.FC<Props> = ({aboutus, className}) => {
    const t = useTranslations("AboutUs")
    return (
        <div ref={aboutus} className="lg:flex overflow-x-hidden hidden items-center z-30 justify-center flex-col rounded-tl-[68px] rounded-tr-[68px] mt-64 ">
            <Image className="sm" src={downline} alt="line"/>
            <Image src={biglogo} alt="biglogo" className="lg:flex mdbvp:w-[850px] sm:w-[300px] absolute z-20 top-[325px] right-[-200px] hidden"/>
            <div
                className="flex flex-col z-10 items-center text-white max-w-[1030px] mt-[170px] mb-[140px]">
                <h3 className="text-[48px] leading-[58px] italic font-semibold">{t('title')}</h3>
                <Image src={line} alt="logo"/>
                <p className="lg:flex hidden text-[24px] leading-6 font-semibold px-10 mt-10 border-l-2 border-r-2 ">{t('firsttext')}<br/>
                    {t('secondtext')}</p>
            </div>
            <Image className="sm" src={downline} alt="line"/>
            <Image className="absolute z-[1] w-full lg:h-[545px] sm:h-[100px]" src={lights} alt="lights"/>

        </div>
    )
}