import React from 'react'
import block from '../../assets/aboutusblock.png'
import Image from 'next/image'
import line from "@/assets/line down text.png";
import downline from "@/assets/down line.png";
import downbutt from '../../assets/downbutt.png'
import uppbtn from '../../assets/uppbtn.png'
import {ChevronDown} from "lucide-react";
import {useTranslations} from "next-intl";
import set = gsap.set;

interface Props{
    className?:string
    isReviews: boolean;
    setReviews: Function;
}

export const AdaptiveAboutUs:React.FC<Props> = ({isReviews, setReviews, className}) => {
    const [isActive, setActive] = React.useState(false)
    const t = useTranslations("AboutUs")

    return (
        <>
            <div className="flex flex-col z-30 justify-center mt-48 lg:hidden">
                <div className="ml-5">
                    <div className="md:text-[48px] smbvp:text-[40px] sm:text-[36px] text-white font-semibold italic">{t('title')}</div>
                    <Image  src={line} alt="logo"/>
                        <div className={`md:text-[18px] [transition:0.5s] ${!isActive ? "h-[0vh]" : "h-[40vh]"} smbvp:text-[13px] text-[12px] px-4 mt-2 text-white font-semibold border-l-2 border-r-2 overflow-y-hidden`}>
                            {t('firsttext')}{t('secondtext')}
                        </div>
                </div>
                {isActive ? (
                    <Image className="absolute w-full smbvp:h-[67vh] sm:h-[72vh] [transition:1s]" src={block} alt="block"/>
                    ) : (
                    <Image className="absolute w-full h-[15vh] " src={block} alt="block"/>
                )}
            </div>
            <Image className="flex mt-1 lg:hidden" src={downline} alt="line"/>
            <div className="flex items-center justify-end z-[100] lg:hidden">
                {isActive ? (
                    <Image onClick={() => setActive(!isActive)} src={uppbtn} alt="upp"/>
                ) : (
                    <Image onClick={() => setActive(!isActive)} src={downbutt} alt="down"/>
                )}

            </div>
        </>
    )
}