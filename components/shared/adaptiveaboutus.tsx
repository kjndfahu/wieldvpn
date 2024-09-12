import React from 'react'
import Image from 'next/image'
import line from "@/assets/line down text.png";
import downline from "@/assets/down line.png";
import downbutt from '../../assets/downbutt.png'
import uppbtn from '../../assets/uppbtn.png'
import {useTranslations} from "next-intl";
import set = gsap.set;

interface Props{
    className?:string
    isReviews: boolean;
    adaptiveabout: any;
    setReviews: Function;
}

export const AdaptiveAboutUs:React.FC<Props> = ({adaptiveabout, isReviews, setReviews, className}) => {
    const [isActive, setActive] = React.useState(false)
    const t = useTranslations("AboutUs")


    return (
        <>
            <div ref={adaptiveabout} className="flex flex-col bg-[#072535]/20 [box-shadow:inset_-1px_-5px_164px_-119px_rgba(65,176,232,1)] rounded-tl-[30px] rounded-tr-[30px]  z-30 justify-center mt-36 lg:hidden">
                <div className="ml-5">
                    <div
                        className="md:text-[48px] smbvp:text-[40px] sm:text-[36px] text-white font-semibold mt-5 italic">{t('title')}</div>
                    <Image className="mb-5" src={line} alt="logo"/>
                    <div
                        className={`md:text-[18px] smbvp:text-[13px] mb-5 text-[12px] px-4 mt-2 text-white font-semibold border-l-2 border-r-2 overflow-hidden text-center transition-all duration-700 ease-in-out ${
                            isActive ? "max-h-[500px]" : "max-h-0"
                        }`}
                    >
                        {t('firsttext')}{t('secondtext')}
                    </div>
                </div>
            </div>
            <Image className="flex lg:hidden" src={downline} alt="line"/>
            <div className="flex items-center justify-end z-[100] lg:hidden overflow-hidden text-center duration-1000">
                {isActive ? (
                    <Image onClick={() => {
                        setTimeout(()=>console.log(123), 1000)
                        setActive(!isActive)
                    }} src={uppbtn} alt="upp"/>
                ) : (
                    <Image onClick={() => setActive(!isActive)} src={downbutt} alt="down"/>
                )}
            </div>
        </>
    )
}