import React from 'react'
import vpntext from '../../assets/vpntext.png'
import Image from 'next/image'
import {useTranslations} from "next-intl";

interface Props{
    className?: string;
    scrollTo: any;
    price: any;
}

export const Hero:React.FC<Props> = ({scrollTo, price, className}) => {
    const t = useTranslations("Hero")
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-col lg:text-[64px] items-center font-bold text-white lghero:text-center lghero:mt-[158px] z-20 md:ml-12 md:text-[48px] lg:mt-[120px] mdbvp:mt-[70px] smbvp:ml-5 smbvp:text-[32px] sm:ml-3 sm:text-[28px]">
                    <h1><span className="text-[#00FFF0]">WieldVPN</span>{t('titleone')}<br/>
                        {t('titletwo')}</h1>
            </div>

            <div className="flex flex-row justify-between mx-5 lg:hidden">
                <div></div>
                <div className="flex items-center justify-center z-20 border-dashed border-[1px] py-2 px-2 rounded-2xl">
                    <div
                        onClick={() => scrollTo(price.current)}
                        className="flex bg-[#00FFF0] cursor-pointer md:py-5 md:px-7 md:text-[32px] text-black [box-shadow:1px_25px_86px_28px_rgba(0,255,238,0.20)] font-bold rounded-2xl text-[20px] py-3 px-6">
                        {t('btn')}
                    </div>
                </div>
            </div>
            <Image className="absolute z-2" src={vpntext} alt="ssss"/>
        </div>
    )
}