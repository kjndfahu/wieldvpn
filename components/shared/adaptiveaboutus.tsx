import React from 'react'
import block from '../../assets/aboutusblock.png'
import Image from 'next/image'
import line from "@/assets/line down text.png";
import downline from "@/assets/down line.png";
import openmenu from '../../assets/openmenu.png'
import {ChevronDown} from "lucide-react";
import {useTranslations} from "next-intl";

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
                    <Image src={line} alt="logo"/>
                    {isActive && (
                        <div className="md:text-[22px] smbvp:text-[19px] py-5 px-4 mt-1 text-white font-semibold border-l-2 border-r-2">
                            {t('firsttext')}{t('secondtext')}
                        </div>
                    )}
                </div>
                {isActive ? (
                    <Image className="absolute w-full smbvp:h-[50vh] sm:h-[45vh]" src={block} alt="block"/>
                    ) : (
                    <Image className="absolute w-full h-[15vh]" src={block} alt="block"/>
                )}
            </div>
            <Image className="flex mt-11 lg:hidden" src={downline} alt="line"/>
            <div className="flex items-center justify-end mt-6 z-[100] lg:hidden">
                <Image onClick={() => setActive(!isActive)} className="absolute w-[40vw] flex justify-end" src={openmenu} alt="menu"/>
                {isActive ? (
                    <svg
                        width={21}
                        className="mt-5 mr-[120px]"
                        height={12}
                        viewBox="0 0 21 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.6667 11L10.8333 1L0.999997 11"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                        />
                    </svg>

                ) : (
                    <svg
                        width={21}
                        height={12}
                        className="mt-5 mr-[120px]"
                        viewBox="0 0 21 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L10.8333 11L20.6667 1"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                        />
                    </svg>
                )}

            </div>
        </>
    )
}